import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const subscribersPath = path.join(process.cwd(), "data", "subscribers.json");

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
  try {
    const dir = path.dirname(subscribersPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
  } catch (err) {
    console.warn("Local subscribers write failed (expected in read-only serverless environments):", err);
  }
}

// Get subscribers from either GitHub or local
async function getSubscribers(): Promise<{ list: Subscriber[]; sha?: string }> {
  const token = process.env.GITHUB_PAT;
  const repo = process.env.GITHUB_REPO || "goldenlegacy295-create/golden-legacy-corporate-service-website-v2";

  if (token) {
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
      console.error("Failed to fetch subscribers from GitHub:", err);
    }
  }

  return { list: getLocalSubscribers() };
}

// Commit to GitHub via API
async function commitToGitHub(subscribers: Subscriber[], email: string): Promise<boolean> {
  const token = process.env.GITHUB_PAT;
  const repo = process.env.GITHUB_REPO || "goldenlegacy295-create/golden-legacy-corporate-service-website-v2";

  if (!token) return false;

  const url = `https://api.github.com/repos/${repo}/contents/data/subscribers.json`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GoldenLegacy-Website",
  };

  try {
    let sha: string | undefined;
    const getRes = await fetch(url, { headers, cache: "no-store" });
    if (getRes.ok) {
      const getJson = await getRes.json();
      sha = getJson.sha;
    }

    const content = Buffer.from(JSON.stringify(subscribers, null, 2)).toString("base64");

    const putRes = await fetch(url, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore: remove subscriber ${email} [skip ci]`,
        content,
        sha,
      }),
    });

    return putRes.ok;
  } catch (err) {
    console.error("Error committing to GitHub:", err);
    return false;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = (searchParams.get("email") || "").trim().toLowerCase();

  const brandStyles = `
    body {
      background-color: #030303;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }
    .card {
      background-color: #0a0a0a;
      border: 1px solid rgba(212, 175, 55, 0.15);
      border-radius: 16px;
      padding: 40px 30px;
      max-width: 480px;
      width: 100%;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .logo {
      color: #d4af37;
      font-size: 24px;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 22px;
      margin-top: 0;
      margin-bottom: 12px;
      font-weight: 800;
    }
    p {
      color: #a0a0a0;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .btn {
      display: inline-block;
      background-color: #d4af37;
      color: #000000;
      text-decoration: none;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 12px 24px;
      border-radius: 30px;
      transition: all 0.3s ease;
    }
    .btn:hover {
      background-color: #ffffff;
    }
  `;

  if (!email) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribe - Golden Legacy</title>
          <style>${brandStyles}</style>
        </head>
        <body>
          <div class="card">
            <div class="logo">Golden Legacy</div>
            <h1>Invalid Link</h1>
            <p>We couldn't process this request. The unsubscribe link seems to be invalid or incomplete.</p>
            <a href="/" class="btn">Go to Home</a>
          </div>
        </body>
      </html>`,
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  try {
    const { list: subscribers } = await getSubscribers();
    const exists = subscribers.some((s) => s.email === email);

    if (exists) {
      const updatedSubscribers = subscribers.filter((s) => s.email !== email);

      // Save locally
      saveLocalSubscribers(updatedSubscribers);

      // Commit to GitHub
      if (process.env.GITHUB_PAT) {
        await commitToGitHub(updatedSubscribers, email);
      }
    }

    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribed - Golden Legacy</title>
          <style>${brandStyles}</style>
        </head>
        <body>
          <div class="card">
            <div class="logo">Golden Legacy</div>
            <h1>Unsubscribed Successfully</h1>
            <p>You have been removed from our daily newsletter. You will no longer receive blog notifications for <strong>${email}</strong>.</p>
            <a href="/" class="btn">Go to Home</a>
          </div>
        </body>
      </html>`,
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Error - Golden Legacy</title>
          <style>${brandStyles}</style>
        </head>
        <body>
          <div class="card">
            <div class="logo">Golden Legacy</div>
            <h1>Something Went Wrong</h1>
            <p>An error occurred while processing your request. Please try again or contact us directly.</p>
            <a href="/" class="btn">Go to Home</a>
          </div>
        </body>
      </html>`,
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  }
}
