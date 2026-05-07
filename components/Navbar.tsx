"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Landmark, Globe2, Building2, Users, Phone, Home as HomeIcon, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Mainland',
      icon: <Landmark className="w-4 h-4" />,
      links: [
        { name: 'Overview', href: '/mainland-company-formation-in-dubai' },
        { name: 'LLC Formation', href: '/llc-company-formation-in-dubai' },
        { name: 'Professional License', href: '/professional-license-main-land-civil-company' },
        { name: 'Branch Office', href: '/branch-representative-office-in-main-land' },
      ]
    },
    {
      title: 'Free Zone',
      icon: <Building2 className="w-4 h-4" />,
      links: [
        { name: 'Overview', href: '/dubai-free-zone-company-overview' },
        { name: 'IFZA', href: '/ifza-dubai-business-set-up' },
        { name: 'MEYDAN', href: '/meydan-free-zone' },
        { name: 'DMCC', href: '/dmcc-free-zone-company-setup' },
        { name: 'RAKEZ', href: '/rakez-company-formation' },
        { name: 'SPC', href: '/spc-free-zone-setup' },
        { name: 'DIFC', href: '/difc-company-setup' },
        { name: 'AJMAN (Freezone)', href: '/ajman-free-zone-business-setup' },
        { name: 'SHAMS', href: '/sharjah-media-city-free-zone-business-setup' },
        { name: 'DAFZA', href: '/business-setup-in-dafza' },
        { name: 'JAFZA', href: '/jafza-company-formation' },
        { name: 'Dubai Media City', href: '/dubai-media-city-business-set-up' },
        { name: 'Fujairah Free Zone', href: '/fujairah-free-zone-company-formation' },
        { name: 'Dubai South', href: '/dubai-south-free-zone-business-setup' },
      ]
    },
    {
      title: 'Banking',
      icon: <Landmark className="w-4 h-4" />,
      links: [
        { name: 'Bank Account Services', href: '/bank-account-opening-dubai' },
      ]
    },
    {
      title: 'Value Added',
      icon: <PlusCircle className="w-4 h-4" />,
      links: [
        { name: 'UAE Will', href: '/uae-wills-service' },
        { name: 'Golden Visas', href: '/golden-visa-uae' },
        { name: 'PRO Services', href: '/pro-services-dubai' },
        { name: 'VAT Consultancy', href: '/vat-consultancy-uae' },
        { name: 'Corporate Tax', href: '/corporate-tax-uae' },
        { name: 'ISO Certification', href: '/iso-certification-dubai' },
        { name: 'Document Attestation', href: '/document-attestation-services' },
        { name: 'Legal Translation', href: '/legal-translation-dubai' },
        { name: 'Bookkeeping', href: '/bookkeeping-and-accounting-services' },
      ]
    },
    {
      title: 'Contact Us',
      icon: <Users className="w-4 h-4" />,
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Cost Calculator', href: '/cost-calculator' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-[1600px] mx-auto px-4 sm:px-6 transition-all duration-500`}>
        <div className={`relative flex justify-between items-center px-6 rounded-full border transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl h-16' : 'bg-black/5 backdrop-blur-md border-white/10 h-20'}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl">
                <Image 
                  src="/logo.png" 
                  alt="Golden Legacy Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
                  GOLDEN <span className="text-gold">LEGACY</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400/80 font-bold -mt-1 group-hover:text-gold/80 transition-colors">
                  Corporate Services
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all text-white/90 hover:text-gold hover:bg-white/5"
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${activeDropdown === item.title ? 'text-gold bg-white/10' : 'text-white/90 hover:text-gold hover:bg-white/5'}`}>
                  {item.icon}
                  {item.title} 
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-2 w-72 bg-[#0a0a0ae6] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden py-3"
                    >
                      {/* <div className="px-4 py-2 border-b border-white/5 mb-2">
                         <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Solutions for {item.title}</span>
                      </div> */}
                      <div className="grid grid-cols-1 gap-1 px-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between px-4 py-3 text-sm rounded-xl text-gray-400 hover:bg-gold hover:text-black transition-all group/item"
                          >
                            <span className="font-medium">{link.name}</span>
                            <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all font-bold" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-gold transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] lg:hidden bg-black/60 backdrop-blur-3xl"
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0ae6] border-l border-white/10 shadow-2xl flex flex-col pt-24 pb-8"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>

              {/* Close Button UI */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 active:scale-95 transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto px-6 space-y-4">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-4 p-5 rounded-2xl border bg-white/5 border-white/5 text-gray-300 hover:text-white transition-all"
                >
                  <div className="text-gold text-2xl">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-sm">Home</span>
                </Link>

                {menuItems.map((item, idx) => {
                  const isExpanded = activeDropdown === item.title;
                  return (
                    <div key={item.title} className="space-y-2">
                       <button 
                         onClick={() => setActiveDropdown(isExpanded ? null : item.title)}
                         className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${isExpanded ? 'bg-gold border-gold text-black' : 'bg-white/5 border-white/5 text-gray-300'}`}
                       >
                         <div className="flex items-center gap-4">
                           <div className={`transition-colors text-2xl ${isExpanded ? 'text-black' : 'text-gold'}`}>
                              {item.icon}
                           </div>
                           <span className="font-black uppercase tracking-widest text-sm">{item.title}</span>
                         </div>
                         <ChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-black' : 'text-gray-600'}`} size={16} />
                       </button>

                       <AnimatePresence>
                         {isExpanded && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden pl-4 pr-2 space-y-1"
                           >
                             {item.links.map((link, lIdx) => (
                               <motion.div
                                 initial={{ x: 10, opacity: 0 }}
                                 animate={{ x: 0, opacity: 1 }}
                                 transition={{ delay: lIdx * 0.05 }}
                                 key={link.href}
                               >
                                 <Link
                                   href={link.href}
                                   onClick={() => setIsOpen(false)}
                                   className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group"
                                 >
                                   <span className="text-gray-400 text-sm font-medium tracking-tight group-hover:text-white transition-colors">{link.name}</span>
                                   <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                 </Link>
                               </motion.div>
                             ))}
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                  );
                })}

                {/* Direct Action Section */}
                <div className="pt-6 space-y-3">
                   <Link 
                     href="/cost-calculator" 
                     onClick={() => setIsOpen(false)}
                     className="flex items-center gap-4 p-5 rounded-3xl bg-gold text-black shadow-[0_15px_30px_rgba(212,175,55,0.3)]"
                   >
                     <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center">
                        <ArrowRight size={20} />
                     </div>
                     <span className="font-black uppercase tracking-widest text-xs">Calculate Costs</span>
                   </Link>
                   
                   <Link 
                     href="/contact" 
                     onClick={() => setIsOpen(false)}
                     className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 text-white"
                   >
                     <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                        <Users size={20} />
                     </div>
                     <span className="font-black uppercase tracking-widest text-xs">Consult Experts</span>
                   </Link>
                </div>
              </div>

              {/* Mobile Footer Info */}
              <div className="mt-auto px-6 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <a href="tel:+971556656007" className="p-4 bg-white/5 rounded-2xl flex-1 flex flex-col items-center gap-2 group border border-transparent active:border-gold/50 transition-all">
                       <Phone size={18} className="text-gold" />
                       <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">Call Now</span>
                    </a>
                    <div className="w-4" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=goldenlegacy295%40gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl flex-1 flex flex-col items-center gap-2 group border border-transparent active:border-gold/50 transition-all">
                       <Globe2 size={18} className="text-gold" />
                       <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">Email Us</span>
                    </a>
                 </div>
                 <p className="text-center text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em] pb-2">
                   Legacy Excellence
                 </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ArrowRight = ({ size, className, strokeWidth = 3 }: { size: number, className?: string, strokeWidth?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default Navbar;
