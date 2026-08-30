# Juno BizHub Corporate Services Providers Website v2.0

**Designed & Developed by [CKR Creatives](https://ckrcreatives.com)**

Professional corporate website for Juno BizHub Corporate Services Providers - specializing in business setup, licensing, and corporate services in UAE.

---

## 🌟 Features

✨ **Performance Optimized**
- Pre-rendered pages for fast load times
- CDN-ready with aggressive caching headers (1-year asset cache)
- 63 pre-rendered static pages
- ~160 KB First Load JS (homepage)

🔐 **Security First**
- TypeScript strict mode enabled
- Input sanitization on all forms
- XSS protection via isomorphic-dompurify
- Environment variable protection

📱 **Fully Responsive**
- Mobile-first design approach
- Tablet and desktop optimized layouts
- Dark theme with gold accent branding (#030303 / #5465ff)

🎨 **Premium Branding**
- Custom typography (Inter, Roboto Slab, Roboto Condensed)
- Smooth animations via Framer Motion
- Icon library (Lucide React)
- Professional color scheme

📊 **SEO & Discoverability**
- Generated XML sitemap (63 pages)
- AI discoverability guide (llms.txt)
- Metadata API for each page
- Markdown mirrors for content distribution
- robots.txt configured

⚖️ **Legal Compliance**
- Full Privacy Policy page with 15 sections
- PDPL compliance documentation
- Legal footer links

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14.2.35 (App Router) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 3.4.7 |
| **Animations** | Framer Motion 10.x |
| **Icons** | Lucide React 0.x |
| **Fonts** | Next.js Font Optimization |
| **Forms** | React + Web3Forms |
| **Validation** | validator.js |
| **Security** | isomorphic-dompurify |
| **Deployment** | Vercel |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/junobizhub295-create/juno-bizhub-corporate-service-website-v2.git
cd juno-bizhub-corporate-service-website-v2

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Configure email (optional)
# Add GMAIL_USER and GMAIL_PASSWORD to .env.local for contact form
```

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
```

### Run Production Server
```bash
npm run start
```

### Export Static Site (Optional)
Static export disables Next.js API routes, so website forms that POST to `/api/send-inquiry` will not work.

```bash
npm run export:static
# Output: /out directory (for static hosting)
```

---

## 📁 Project Structure

```
juno-bizhub-corporate-services/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage
│   ├── privacy-policy/            # Legal page
│   ├── blog/                      # Blog routes
│   ├── team/                      # Team member profiles
│   ├── api/                       # API routes
│   │   └── send-inquiry/          # Contact form endpoint
│   └── [service-pages]/           # 45+ service pages
│
├── components/                    # React components
│   ├── Navbar.tsx                 # Navigation header
│   ├── Footer.tsx                 # Site footer
│   ├── LeadModal.tsx              # Inquiry modal
│   ├── home/                      # Homepage components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   └── about/                     # About page components
│
├── lib/                           # Utilities
│   ├── security.ts                # Input sanitization
│   ├── blog-data.ts               # Blog content
│   └── team-data.ts               # Team content
│
├── public/                        # Static assets
│   ├── images/                    # Optimized images
│   ├── videos/                    # Video content
│   ├── golden-logo.png            # Brand logo
│   └── ...
│
├── markdown/                      # Content mirrors
│   ├── index.md
│   ├── about.md
│   ├── services.md
│   └── ...
│
├── next.config.js                 # Next.js configuration
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind CSS config
├── vercel.json                    # Vercel deployment config
├── llms.txt                       # AI discoverability
├── sitemap.xml                    # XML sitemap
└── README.md                      # This file
```

---

## 🎨 Design System

### Colors
```
Dark Background:  #030303
Gold Accent:      #5465ff
Light Text:       #ffffff
Secondary:        #999999
```

### Typography
- **Headers:** Roboto Slab (weights: 400, 500)
- **Body:** Inter (default weights)
- **Tracking Heavy:** Roboto Condensed (weights: 400, 500)

### Responsive Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

---

## 📧 Contact Form Setup (Web3Forms)

This project submits forms via Web3Forms (no custom email server required).

1. Create a Web3Forms Access Key
2. Add to `.env.local`:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

---

## 🔍 SEO & Discovery

### Sitemap
- Auto-generated at build time
- Covers 63 pages
- Includes priority and frequency metadata
- Located at `/sitemap.xml`

### robots.txt
- Allows all bots
- References sitemap
- Located at `/robots.txt`

### AI Discoverability (llms.txt)
- Guides LLMs (ChatGPT, Claude, Gemini) on crawling
- Content preferences and snippet rules
- Located at `/llms.txt`

### Metadata
Every page includes:
- Open Graph tags (og:title, og:description, og:image)
- Twitter card tags
- Canonical URLs
- Structured data (JSON-LD)

---

## 📊 Page Count

| Type | Count |
|------|-------|
| Core Pages | 16 |
| Service Pages | 45 |
| Blog Posts | 3 (dynamic) |
| Team Member Pages | 8 (dynamic) |
| **Total** | **63** |

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables (Forms)
Configure this in your deployment environment (e.g. Vercel Project Settings):
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### Deployment Performance
- **Cache Strategy:** 1-year immutable for assets, 1-hour for HTML
- **Build Time:** ~2 minutes
- **Bundle Size:** ~87 KB First Load JS (shared)
- **Total Size:** ~10.7 MB (with all assets)

---

## 🔐 Security Features

✓ Input validation on all forms
✓ XSS protection (isomorphic-dompurify)
✓ CSRF tokens on API routes
✓ Environment variables for sensitive data
✓ NoSQL injection prevention
✓ Rate limiting ready (implement via middleware)
✓ SSL/TLS ready for HTTPS
✓ Security headers configured

---

## 📝 Privacy & Legal

- **Privacy Policy:** `/privacy-policy`
- **PDPL Compliance:** UAE Personal Data Protection Law
- **Data Retention:** As per company policy
- **Contact:** support@junobizhubcs.ae

---

## 🛠 Development

### Code Standards
- **Language:** TypeScript (strict mode)
- **Linting:** ESLint (Next.js config)
- **Formatting:** Prettier recommended
- **Type Safety:** 100% type coverage target

### Adding New Pages

1. Create file in `app/[page-name]/page.tsx`
2. Export metadata and component
3. Add to navigation if needed
4. Rebuild to generate sitemap

Example:
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Title | Juno BizHub",
  description: "Service description...",
};

export default function ServicePage() {
  return <div>Page content</div>;
}
```

### Adding New Services
1. Create service page in `app/service-name/page.tsx`
2. Use `ServicePage` component wrapper
3. Add to `Navbar.tsx` navigation
4. Rebuild for sitemap update

---

## 📞 Support & Contact

### Juno BizHub Corporate Services Providers LLC

**Office Address**
```
106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower
Near Business Bay Metro Station
Dubai, United Arab Emirates
```

**Contact Information**
- 📧 Email: info.junobh@gmail.com
- 📱 Phone/WhatsApp: +971 54 129 0038

**Services**
- Business Setup & Company Formation
- Free Zone Selection & Channel Partner Facilitation
- PRO, Visa & Immigration Support
- Corporate Banking Assistance
- Corporate Compliance & Ongoing Support
- Accounting, VAT & Tax Coordination

---

### CKR Creatives

**Company Name:** CKR Creatives

**Business Type:** AI-Powered Creative & Business Growth Agency

**Website:** https://ckrcreatives.com

**Contact Information**
- 📧 Email: ckrstudiodesign@gmail.com
- 📱 Phone: +971 52 104 6611
- 📍 Location: Dubai, United Arab Emirates

**Services Offered**
- 🤖 AI Automation
- 🎨 Creative Media & Design
- 💼 Digital Transformation
- 💻 Web Development & Full-Stack Solutions
- 📈 SEO & Digital Marketing
- 🚀 Business Growth Solutions
- 🎭 Corporate Branding & Identity

---

## 📄 License

© 2026 Juno BizHub Corporate Services Providers. All rights reserved.

This website and all content are the property of Juno BizHub Corporate Services Providers.

**Design & Development:** CKR Creatives

---

## 🎯 Roadmap

- [ ] Analytics dashboard integration
- [ ] Blog search functionality
- [ ] Client testimonials management
- [ ] Multi-language support (AR/EN)
- [ ] Advanced contact form with file uploads
- [ ] Live chat integration
- [ ] Email marketing automation
- [ ] CMS integration (optional)

---

## 📞 Credits

**Designed & Developed by:** CKR Creatives
- Full-stack development
- UI/UX design
- Performance optimization
- Security implementation
- SEO & discoverability setup

**Built with:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion

---

**Last Updated:** May 7, 2026
**Version:** 2.0
**Status:** Production Ready ✅
