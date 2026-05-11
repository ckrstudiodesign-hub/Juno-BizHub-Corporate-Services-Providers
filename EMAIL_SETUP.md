# Form Submission Setup Guide (Web3Forms)

All forms are configured to send inquiries via Web3Forms.

## Active Configuration: Web3Forms ⭐

This is the current and recommended setup. Form submissions are sent directly from the browser to Web3Forms.

### Setup Steps

1. Create a Web3Forms access key in the Web3Forms dashboard

2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

3. Restart the dev server:
   ```
   npm run dev
   ```

## Testing Form Submissions

1. Fill out any form on the site
2. Click "Send" or "Get Started"
3. Submit the form and confirm the Web3Forms dashboard receives the submission

## Forms Connected

1. **Lead Modal** - Appears on every page after 1 second
2. **Service Contact Form** - Used across service pages
3. **Cost Calculator** - Final submit step
4. **Contact Page** - Main contact form

## Troubleshooting

- **"Form is not configured"** - Ensure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set
- **"Network error"** - Check browser extensions/ad blockers and try an incognito window

## Current Status

- ✅ All forms submit to Web3Forms
- ✅ No server-side email configuration required
