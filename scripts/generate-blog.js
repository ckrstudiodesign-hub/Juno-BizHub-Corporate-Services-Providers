const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config({ path: ".env.local" });

const topics = require("../data/topics.json");
const usedTopicsPath = path.join(__dirname, "../data/used-topics.json");
const generatedPostsPath = path.join(
  __dirname,
  "../data/generated-posts.json"
);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ─── How many days before a post is auto-deleted ─────────────────────
const POST_LIFETIME_DAYS = 7;

function getUsedTopics() {
  try {
    return JSON.parse(fs.readFileSync(usedTopicsPath, "utf-8"));
  } catch {
    return [];
  }
}

function getAvailableTopics() {
  const used = getUsedTopics();
  const available = topics.filter((t) => !used.includes(t));
  // If all topics used, reset
  if (available.length === 0) {
    fs.writeFileSync(usedTopicsPath, JSON.stringify([], null, 2));
    return topics;
  }
  return available;
}

function markTopicUsed(topic) {
  const used = getUsedTopics();
  used.push(topic);
  fs.writeFileSync(usedTopicsPath, JSON.stringify(used, null, 2));
}

// ─── Auto-cleanup: remove posts older than POST_LIFETIME_DAYS ────────
function cleanupExpiredPosts(posts) {
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - POST_LIFETIME_DAYS);

  const before = posts.length;

  const kept = posts.filter((post) => {
    // Use publishedAt (ISO) if available, fall back to date (human-readable)
    const postDate = new Date(post.publishedAt || post.date);
    if (isNaN(postDate.getTime())) {
      // If date is unparseable, keep the post to be safe
      console.warn(`Could not parse date for "${post.slug}", keeping post.`);
      return true;
    }
    return postDate >= cutoff;
  });

  const removed = before - kept.length;
  if (removed > 0) {
    console.log(
      `🗑  Cleaned up ${removed} expired post(s) older than ${POST_LIFETIME_DAYS} days.`
    );
    kept.forEach((p) => console.log(`   ✓ Kept: ${p.slug}`));
  } else {
    console.log("✓ No expired posts to clean up.");
  }

  return kept;
}

async function generateBlog() {
  // ── Step 1: Load existing posts and clean up expired ones ──────────
  let existingPosts = [];
  try {
    existingPosts = JSON.parse(
      fs.readFileSync(generatedPostsPath, "utf-8")
    );
  } catch {
    existingPosts = [];
  }

  existingPosts = cleanupExpiredPosts(existingPosts);

  // Save immediately after cleanup (even if generation fails below)
  fs.writeFileSync(
    generatedPostsPath,
    JSON.stringify(existingPosts, null, 2)
  );

  // ── Step 2: Pick a topic and generate content ─────────────────────
  const available = getAvailableTopics();
  const topic = available[Math.floor(Math.random() * available.length)];

  console.log("\nGenerating blog for topic:", topic);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an SEO content strategist for Golden Legacy Corporate Services, a premier business setup consultancy in Dubai, UAE.

Write a professional, SEO-optimized blog post about:
${topic}

Requirements:
- 1500 to 2500 words
- SEO optimized with relevant keywords naturally integrated
- AEO optimized (Answer Engine Optimization) with clear, direct answers
- GEO optimized for Dubai/UAE audience
- Professional, authoritative tone

Output ONLY valid JSON (no markdown, no code fences) with this exact structure:
{
  "title": "SEO-optimized title",
  "excerpt": "Compelling 1-2 sentence description (max 160 characters)",
  "category": "One of: Business Setup, Immigration, Taxation, Banking, Free Zones, Legal, Corporate Services",
  "content": "Full HTML content with <h2>, <h3>, <p>, <ul>, <li>, <strong> tags. Include Introduction, multiple H2 sections, FAQ section with H3 questions, conclusion with CTA. Use <a href='/contact'> for CTAs."
}
`;

  const result = await model.generateContent(prompt);
  const responseText = result.response.text();

  // Parse the JSON response
  let parsed;
  try {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON object found in response");
    }
    parsed = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error("Failed to parse AI response:", err.message);
    console.error("Raw response:", responseText.substring(0, 500));
    process.exit(1);
  }

  const slug = topic
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/\s+/g, "-");

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const newPost = {
    slug: slug,
    title: parsed.title || topic,
    excerpt: parsed.excerpt || `Expert guide on ${topic} in the UAE.`,
    date: dateStr,
    publishedAt: today.toISOString(),
    author: "Golden Legacy Team",
    image: "/blog/default-blog.jpg",
    category: parsed.category || "Business Setup",
    content: parsed.content || "",
  };

  // ── Step 3: Insert the new post ───────────────────────────────────
  const duplicateIndex = existingPosts.findIndex(
    (p) => p.slug === newPost.slug
  );
  if (duplicateIndex !== -1) {
    existingPosts[duplicateIndex] = newPost;
    console.log("Updated existing post:", newPost.slug);
  } else {
    existingPosts.unshift(newPost);
    console.log("Added new post:", newPost.slug);
  }

  // Save updated posts
  fs.writeFileSync(
    generatedPostsPath,
    JSON.stringify(existingPosts, null, 2)
  );

  // Mark topic as used
  markTopicUsed(topic);

  console.log("\n✅ Blog saved successfully!");
  console.log("   Title:", newPost.title);
  console.log("   Slug:", newPost.slug);
  console.log("   Category:", newPost.category);
  console.log("   Expires:", new Date(today.getTime() + POST_LIFETIME_DAYS * 86400000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }));
}

generateBlog().catch((err) => {
  console.error("Blog generation failed:", err);
  process.exit(1);
});