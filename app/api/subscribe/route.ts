import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const subscribersPath = path.join(process.cwd(), "data", "subscribers.json");

// Simple email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface Subscriber {
  email: string;
  subscribedAt: string;
}

// Fetch subscribers from local file
function getLocalSubscribers(): Subscriber[] {
  try {
    const raw = fs.readFileSync(subscribersPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Save subscribers locally
function saveLocalSubscribers(subscribers: Subscriber[]) {
  const dir = path.dirname(subscribersPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
}

// Commit to GitHub via API
async function commitToGitHub(subscribers: Subscriber[], email: string): Promise<boolean> {
  const token = process.env.GITHUB_PAT;
  const repo = process.env.GITHUB_REPO;

  if (!token || !repo) {
    console.warn("GITHUB_PAT or GITHUB_REPO not configured. Falling back to local storage.");
    return false;
  }

  const url = `https://api.github.com/repos/${repo}/contents/data/subscribers.json`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GoldenLegacy-Website",
  };

  try {
    // 1. Get current file sha if it exists
    let sha: string | undefined;
    const getRes = await fetch(url, { headers, cache: "no-store" });
    if (getRes.ok) {
      const getJson = await getRes.json();
      sha = getJson.sha;
    }

    // 2. Prepare content
    const content = Buffer.from(JSON.stringify(subscribers, null, 2)).toString("base64");

    // 3. Put request
    const putRes = await fetch(url, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore: add subscriber ${email} [skip ci]`,
        content,
        sha,
      }),
    });

    if (!putRes.ok) {
      const errorText = await putRes.text();
      console.error("GitHub API update failed:", errorText);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Error committing to GitHub:", err);
    return false;
  }
}

// Get subscribers from either GitHub (if configured) or local
async function getSubscribers(): Promise<{ list: Subscriber[]; sha?: string }> {
  const token = process.env.GITHUB_PAT;
  const repo = process.env.GITHUB_REPO;

  if (token && repo) {
    const url = `https://api.github.com/repos/${repo}/contents/data/subscribers.json`;
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "GoldenLegacy-Website",
        },
        cache: "no-store",
      });

      if (res.ok) {
        const json = await res.json();
        const decoded = Buffer.from(json.content, "base64").toString("utf-8");
        return { list: JSON.parse(decoded), sha: json.sha };
      }
    } catch (err) {
      console.error("Failed to fetch subscribers from GitHub, falling back to local:", err);
    }
  }

  return { list: getLocalSubscribers() };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Get the latest list
    const { list: subscribers } = await getSubscribers();

    // Check for duplicate
    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json(
        { message: "You're already subscribed! We'll keep you updated." },
        { status: 200 }
      );
    }

    // Add new subscriber
    const newSubscriber: Subscriber = {
      email,
      subscribedAt: new Date().toISOString(),
    };
    
    const updatedSubscribers = [...subscribers, newSubscriber];

    // Try committing to GitHub
    let saved = false;
    if (process.env.GITHUB_PAT && process.env.GITHUB_REPO) {
      saved = await commitToGitHub(updatedSubscribers, email);
    }

    // Always save locally as well
    saveLocalSubscribers(updatedSubscribers);

    return NextResponse.json(
      {
        message:
          "Successfully subscribed! You'll receive daily updates on business setup, tax, visa & more.",
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Subscribe API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
