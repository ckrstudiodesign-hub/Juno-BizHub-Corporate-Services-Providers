# Email Configuration Setup Guide

All forms are configured to send inquiries directly to **goldenlegacy295@gmail.com** via Gmail SMTP.

## Active Configuration: Gmail SMTP ⭐

This is the current and recommended setup. Form submissions are sent directly from the server using Gmail's SMTP service.

### Setup Steps

1. **Enable 2-Factor Authentication** on goldenlegacy295@gmail.com
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate an App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" from the first dropdown
   - Select "Windows Computer" (or your device) from the second dropdown
   - Click "Generate"
   - Google will show a 16-character password

3. **Add to `.env.local`**
   ```
   GMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```
   (Remove spaces from the password)

4. **Restart the dev server**
   ```
   npm run dev
   ```

## Testing Form Submissions

1. Fill out any form on the site
2. Click "Send" or "Get Started"
3. Check the server terminal (where `npm run dev` is running) for:
   - ✅ Email sent successfully to goldenlegacy295@gmail.com
4. Check goldenlegacy295@gmail.com inbox for the submission

## Forms Connected

1. **Lead Modal** - Appears on every page after 1 second
2. **Service Contact Form** - Used across service pages
3. **Cost Calculator** - Final submit step
4. **Contact Page** - Main contact form

## Troubleshooting

- **"GMAIL_PASSWORD not configured"** - Ensure GMAIL_PASSWORD is set in `.env.local`
- **"Authentication failed"** - Check that:
  - 2FA is enabled on the Gmail account
  - App Password is correct (16 characters, no spaces)
  - Nodemailer package is installed (`npm install nodemailer`)
- **Submission works but no email received** - Check spam/junk folder

## Current Status

- ✅ All forms POST to `/api/send-inquiry`
- ✅ Email sends via Gmail SMTP to goldenlegacy295@gmail.com
- ✅ Nodemailer installed and configured
