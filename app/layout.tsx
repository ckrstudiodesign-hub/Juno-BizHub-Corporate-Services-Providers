import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import LeadModal from "@/components/LeadModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SeoSchemas from "@/components/SeoSchemas";
import Analytics from "@/components/Analytics";
import type { Metadata } from "next";
import { Inter, Roboto_Slab, Roboto_Condensed } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSlab = Roboto_Slab({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-slab",
});

const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldenlegacy.ae";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Golden Legacy | Business Setup Dubai & Corporate Services UAE",
    template: "%s | Golden Legacy",
  },
  description:
    "Golden Legacy helps founders launch in Dubai with mainland, free zone, offshore, banking, VAT, PRO, and advisory services.",
  keywords: [
    "Business setup Dubai",
    "Corporate services UAE",
    "Mainland company formation",
    "Free zone company setup",
    "Offshore company formation",
    "Dubai business consultant",
  ],
  authors: [{ name: "Golden Legacy" }],
  creator: "Golden Legacy",
  publisher: "Golden Legacy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: "Golden Legacy",
    title: "Golden Legacy | Business Setup Dubai & Corporate Services UAE",
    description:
      "Business setup Dubai and corporate services UAE for mainland, free zone, offshore, banking, VAT, and PRO support.",
    images: [
      {
        url: "/golden-logo.png",
        width: 512,
        height: 512,
        alt: "Golden Legacy corporate services provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Legacy | Business Setup Dubai & Corporate Services UAE",
    description:
      "Dubai business setup, corporate services UAE, and banking support for ambitious founders.",
    images: ["/golden-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/golden-logo.png",
    shortcut: "/golden-logo.png",
    apple: "/golden-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoSlab.variable} ${robotoCondensed.variable} font-sans antialiased bg-background text-foreground`}>
        <Analytics />
        <SeoSchemas />
        <Navbar />
        <SocialSidebar />
        <MobileBottomNav />
        <WhatsAppFloat />
        <LeadModal />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
