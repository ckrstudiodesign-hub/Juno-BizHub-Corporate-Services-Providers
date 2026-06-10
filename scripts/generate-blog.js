const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const nodemailer = require("nodemailer");

dotenv.config({ path: ".env.local" });

const topics = require("../data/topics.json");
const usedTopicsPath = path.join(__dirname, "../data/used-topics.json");
const generatedPostsPath = path.join(
  __dirname,
  "../data/generated-posts.json"
);
const subscribersPath = path.join(__dirname, "../data/subscribers.json");

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

function getSubscribers() {
  try {
    return JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));
  } catch {
    return [];
  }
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

async function sendNewsletter(newPost) {
  const subscribers = getSubscribers();
  if (subscribers.length === 0) {
    console.log("No subscribers to notify.");
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.warn("GMAIL_USER or GMAIL_PASSWORD is not set. Skipping newsletter dispatch.");
    return;
  }

  console.log(`\nSending newsletter for "${newPost.title}" to ${subscribers.length} subscriber(s)...`);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goldenlegacy.ae";

  for (const subscriber of subscribers) {
    const email = subscriber.email;
    const unsubscribeLink = `${siteUrl}/api/unsubscribe?email=${encodeURIComponent(email)}`;
    const postLink = `${siteUrl}/blog/${newPost.slug}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${newPost.title}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              background-color: #f7f7f7;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .wrapper {
              width: 100%;
              background-color: #f7f7f7;
              padding: 40px 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #030303;
              border: 1px solid rgba(212, 175, 55, 0.2);
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            .header {
              padding: 40px 30px;
              text-align: center;
              background-color: #0a0a0a;
              border-bottom: 1px solid rgba(212, 175, 55, 0.1);
            }
            .logo {
              color: #d4af37;
              font-size: 24px;
              font-weight: 900;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              text-decoration: none;
            }
            .content {
              padding: 40px 30px;
              color: #ffffff;
            }
            .tag {
              display: inline-block;
              font-size: 10px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #d4af37;
              background-color: rgba(212, 175, 55, 0.1);
              padding: 4px 12px;
              border-radius: 20px;
              margin-bottom: 20px;
            }
            h1 {
              font-size: 26px;
              font-weight: 800;
              line-height: 1.3;
              margin-top: 0;
              margin-bottom: 20px;
              color: #ffffff;
            }
            .excerpt {
              font-size: 16px;
              line-height: 1.6;
              color: #a0a0a0;
              margin-bottom: 30px;
            }
            .btn-container {
              text-align: center;
              margin-bottom: 10px;
            }
            .btn {
              display: inline-block;
              background-color: #d4af37;
              color: #000000 !important;
              font-weight: 900;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              padding: 16px 32px;
              border-radius: 30px;
              text-decoration: none;
              transition: background-color 0.3s;
            }
            .btn:hover {
              background-color: #ffffff;
            }
            .footer {
              padding: 30px;
              text-align: center;
              background-color: #0a0a0a;
              border-top: 1px solid rgba(212, 175, 55, 0.1);
              font-size: 12px;
              color: #666666;
            }
            .footer p {
              margin: 5px 0;
            }
            .footer a {
              color: #d4af37;
              text-decoration: none;
            }
            .footer a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <a href="${siteUrl}" class="logo">Golden Legacy</a>
              </div>
              <div class="content">
                <span class="tag">${newPost.category}</span>
                <h1>${newPost.title}</h1>
                <p class="excerpt">${newPost.excerpt}</p>
                <div class="btn-container">
                  <a href="${postLink}" class="btn">Read Full Article</a>
                </div>
              </div>
              <div class="footer">
                <p>You received this because you subscribed to daily updates from Golden Legacy Corporate Services.</p>
                <p>Golden Legacy Corporate Services, Dubai, UAE</p>
                <p style="margin-top: 15px;">
                  <a href="${unsubscribeLink}">Unsubscribe</a> from these updates.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      await transporter.sendMail({
        from: `"Golden Legacy Insights" <${gmailUser}>`,
        to: email,
        subject: `New Blog: ${newPost.title}`,
        html: htmlContent,
      });
      console.log(`   ✓ Sent to: ${email}`);
    } catch (err) {
      console.error(`   ✗ Failed to send to ${email}:`, err.message);
    }
  }
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

  // Notify subscribers
  try {
    await sendNewsletter(newPost);
  } catch (err) {
    console.error("Newsletter dispatch failed:", err);
  }
}

generateBlog().catch((err) => {
  console.error("Blog generation failed:", err);
  process.exit(1);
});