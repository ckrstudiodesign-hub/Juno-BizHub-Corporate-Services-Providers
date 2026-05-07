"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#030303] pt-20 md:pt-32 lg:pt-40 pb-12 relative overflow-hidden">
      {/* Decorative Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold/5 blur-[150px] rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-10">
             <Link href="/" className="group flex items-center gap-4">
              <div className="relative w-20 h-20 overflow-hidden rounded-2xl transition-all group-hover:scale-105">
                <Image 
                  src="/golden-logo.png" 
                  alt="Golden Legacy Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
                  GOLDEN <span className="text-gold">LEGACY</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold group-hover:text-gray-300 transition-colors">
                  Corporate Services Provider
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              The premier business gateway to the UAE. Leveraging two decades of elite banking expertise to architect your corporate future in Dubai and beyond.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586592230906' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/golden-legacy-corporate-service/' },
                { Icon: Instagram, href: 'https://www.instagram.com/goldenlegacy.ae/' }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Formation</h4>
            <ul className="space-y-5 text-gray-500 font-medium">
              <li><Link href="/mainland-company-formation-in-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Mainland Setup <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/dubai-free-zone-company-overview" className="hover:text-gold transition-colors flex items-center gap-2 group">Free Zone Centers <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/bank-account-opening-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Banking Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/pro-services-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Value Added Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/about-us" className="hover:text-gold transition-colors flex items-center gap-2 group">About Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Offshore</h4>
            <ul className="space-y-5 text-gray-500 font-medium">
              <li><Link href="/offshore-company-formation-in-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Overview <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/rak-offshore-company-formation" className="hover:text-gold transition-colors flex items-center gap-2 group">RAK Offshore <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/jafza-offshore-company-setup" className="hover:text-gold transition-colors flex items-center gap-2 group">JAFZA Offshore <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/ajman-offshore-company-setup" className="hover:text-gold transition-colors flex items-center gap-2 group">Ajman Offshore <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-2 group">Contact Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Headquarters</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Visit Our Office</p>
                  <p className="text-gray-500 leading-relaxed font-light">Located At The Heart Of Dubai - Sheikh Zayed Road</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Direct Lines</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+971556656007" className="text-gray-500 hover:text-gold transition-colors">+971 55 665 6007</a>

                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Email Inquiry</p>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:info@goldenlegacy.ae" className="text-gray-500 hover:text-gold transition-colors">info@goldenlegacy.ae</a>
                    <Link href="/contact" className="text-gray-500 hover:text-gold transition-colors italic">Send Secure Message</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="pt-12 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start gap-2">
             <p className="text-gray-600 text-xs font-light">
               Design & developed by{' '}
               <a 
                 href="https://www.ckrcreatives.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gold hover:text-gold/80 transition-colors font-semibold"
               >
                 ckrcreatives.com
               </a>
             </p>
             <p className="text-gray-700 text-xs font-light">© 2024 Golden Legacy. All rights reserved.</p>
             <div className="flex gap-4 mt-2">
               <Link href="/privacy-policy" className="text-gray-500 hover:text-gold text-xs">Privacy Policy</Link>
             </div>
           </div>

           <button 
             onClick={scrollToTop}
             className="group flex items-center gap-4 text-gray-500 hover:text-gold transition-all duration-500"
           >
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Top</span>
             <div className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500 rotate-45 group-hover:rotate-0">
               <ArrowUpRight size={18} className="-rotate-45" />
             </div>
           </button>
        </div>       
      </div>
    </footer>
  );
};

export default Footer;
