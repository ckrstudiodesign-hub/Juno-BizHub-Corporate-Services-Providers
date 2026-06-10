import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

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

// Send Welcome Email
async function sendWelcomeEmail(email: string) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.warn("GMAIL_USER or GMAIL_PASSWORD is not set. Skipping welcome email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goldenlegacy.ae";
  const unsubscribeLink = `${siteUrl}/api/unsubscribe?email=${encodeURIComponent(email)}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to Golden Legacy</title>
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
            line-height: 1.6;
          }
          h1 {
            font-size: 26px;
            font-weight: 800;
            line-height: 1.3;
            margin-top: 0;
            margin-bottom: 20px;
            color: #ffffff;
            text-align: center;
          }
          p {
            font-size: 15px;
            color: #d0d0d0;
            margin-bottom: 20px;
          }
          .topics-grid {
            margin: 30px 0;
            padding: 20px;
            background-color: #0a0a0a;
            border: 1px solid rgba(212, 175, 55, 0.1);
            border-radius: 12px;
          }
          .topics-title {
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #d4af37;
            margin-bottom: 15px;
            text-align: center;
          }
          .topics-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .topic-item {
            font-size: 13px;
            color: #a0a0a0;
            display: flex;
            align-items: center;
          }
          .topic-item::before {
            content: "✓";
            color: #d4af37;
            font-weight: bold;
            margin-right: 8px;
          }
          .btn-container {
            text-align: center;
            margin: 35px 0 15px 0;
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
              <h1>Welcome to the Legacy</h1>
              <p>Thank you for subscribing to the Golden Legacy Insights daily newsletter. We are thrilled to have you join our community of entrepreneurs, business leaders, and investors.</p>
              <p>Starting tomorrow, you will receive daily updates containing expert advice, industry trends, and regulatory updates designed to help you navigate and succeed in the UAE business landscape.</p>
              
              <div class="topics-grid">
                <div class="topics-title">What We Cover Daily</div>
                <div class="topics-list font-size:13px;">
                  <div style="font-size:13px;color:#a0a0a0;margin-bottom:5px;"><span style="color:#d4af37;margin-right:5px;">✓</span> Business Setup & Licensing</div>
                  <div style="font-size:13px;color:#a0a0a0;margin-bottom:5px;"><span style="color:#d4af37;margin-right:5px;">✓</span> Corporate Tax & VAT</div>
                  <div style="font-size:13px;color:#a0a0a0;margin-bottom:5px;"><span style="color:#d4af37;margin-right:5px;">✓</span> Golden Visa & Residency</div>
                  <div style="font-size:13px;color:#a0a0a0;margin-bottom:5px;"><span style="color:#d4af37;margin-right:5px;">✓</span> Corporate & Personal Banking</div>
                  <div style="font-size:13px;color:#a0a0a0;margin-bottom:5px;"><span style="color:#d4af37;margin-right:5px;">✓</span> Free Zone vs Mainland Guides</div>
                  <div style="font-size:13px;color:#a0a0a0;margin-bottom:5px;"><span style="color:#d4af37;margin-right:5px;">✓</span> PRO & Legal Translation</div>
                </div>
              </div>
              
              <p>If you have any immediate questions regarding starting or expanding your business in the UAE, please don't hesitate to reach out to our advisory team.</p>
              
              <div class="btn-container">
                <a href="${siteUrl}" class="btn">Explore Our Services</a>
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

  await transporter.sendMail({
    from: `"Golden Legacy Insights" <${gmailUser}>`,
    to: email,
    subject: "Welcome to Golden Legacy Insights",
    html: htmlContent,
  });
}

// Commit to GitHub via API
async function commitToGitHub(subscribers: Subscriber[], email: string): Promise<boolean> {
  const token = process.env.GITHUB_PAT;
  const repo = process.env.GITHUB_REPO || "goldenlegacy295-create/golden-legacy-corporate-service-website-v2";

  if (!token) {
    console.warn("GITHUB_PAT not configured. Falling back to local storage.");
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
    if (process.env.GITHUB_PAT) {
      saved = await commitToGitHub(updatedSubscribers, email);
    }

    // Always save locally as well
    saveLocalSubscribers(updatedSubscribers);

    // Send Welcome Email if Gmail secrets are configured
    try {
      await sendWelcomeEmail(email);
    } catch (err) {
      console.error("Welcome email failed to send:", err);
    }

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
