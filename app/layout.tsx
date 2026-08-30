/*
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║           Juno BizHub Corporate Services Providers WEBSITE                 ║
 * ║                                                                   ║
 * ║         Designed & Developed by CKR Creatives                     ║
 * ║         Full Stack Development, UI/UX Design, Performance         ║
 * ║                                                                   ║
 * ║  © 2026 Juno BizHub Corporate Services Providers. All rights reserved.    ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 */

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import LeadModal from "@/components/LeadModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaMarkup, { GlobalSchemas } from "@/components/seo/SchemaMarkup";
import Analytics from "@/components/Analytics";
import DisableServiceWorker from "@/components/DisableServiceWorker";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.junobizhub.com";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoSlab.variable} ${robotoCondensed.variable} font-sans antialiased bg-background text-foreground`}>
        <Analytics />
        <DisableServiceWorker />
        <SchemaMarkup type="Organization" data={GlobalSchemas.Organization} />
        <SchemaMarkup type="ProfessionalService" data={GlobalSchemas.LocalBusiness} />
        <SchemaMarkup type="WebSite" data={GlobalSchemas.WebSite} />
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
