"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Landmark, Building2, PlusCircle, ArrowRight, ShieldCheck, Globe2, Briefcase, CreditCard } from 'lucide-react';

const services = [
  {
    title: 'Mainland Formation',
    icon: Landmark,
    description: "Launch your business in the UAE mainland with full ownership and direct access to the local market.",
    links: [
      { name: 'Mainland Overview', href: '/mainland-company-formation-in-dubai' },
      { name: 'LLC Formation', href: '/llc-company-formation-in-dubai' },
      { name: 'Professional License', href: '/professional-license-main-land-civil-company' },
      { name: 'Branch Office', href: '/branch-representative-office-in-main-land' },
    ]
  },
  {
    title: 'Free Zone Setup',
    icon: Building2,
    description: "Benefit from tax exemptions and 100% foreign ownership in UAE's premier Free Zones.",
    links: [
      { name: 'Free Zone Overview', href: '/dubai-free-zone-company-overview' },
      { name: 'IFZA', href: '/ifza-dubai-business-set-up' },
      { name: 'MEYDAN', href: '/meydan-free-zone' },
      { name: 'DMCC', href: '/dmcc-free-zone-company-setup' },
      { name: 'RAKEZ', href: '/rakez-company-formation' },
      { name: 'SPC Free Zone', href: '/spc-free-zone-setup' },
      { name: 'DIFC', href: '/difc-company-setup' },
    ]
  },
  {
    title: 'Corporate Services',
    icon: Briefcase,
    description: "Comprehensive corporate services to support your business growth and compliance.",
    links: [
      { name: 'Bank Account Opening', href: '/bank-account-opening-dubai' },
      { name: 'PRO Services', href: '/pro-services-dubai' },
      { name: 'VAT Consultancy', href: '/vat-consultancy-uae' },
      { name: 'Corporate Tax', href: '/corporate-tax-uae' },
      { name: 'Bookkeeping', href: '/bookkeeping-and-accounting-services' },
      { name: 'Legal Translation', href: '/legal-translation-dubai' },
    ]
  },
  {
    title: 'Residency & Visas',
    icon: Globe2,
    description: "Expert assistance with Golden Visas and residency permits for you and your employees.",
    links: [
      { name: 'Golden Visa', href: '/golden-visa-uae' },
      { name: 'UAE Will', href: '/uae-wills-service' },
      { name: 'Document Attestation', href: '/document-attestation-services' },
    ]
  },
  {
    title: 'Banking Solutions',
    icon: CreditCard,
    description: "Strategic partnerships with leading UAE banks to facilitate seamless account opening and financial operations.",
    links: [
      { name: 'Corporate Banking', href: '/bank-account-opening-dubai' },
      { name: 'Personal Banking', href: '/personal-bank-account-services' },
      { name: 'Offshore Accounts', href: '/offshore-banking-services' },
      { name: 'Trade Finance', href: '/trade-finance-services' },
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden font-sans selection:bg-gold/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/5 blur-[150px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <span className="text-gold font-black tracking-[0.3em] uppercase text-xs">World-Class Expertise</span>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9]"
          >
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-shimmer">
              SERVICES
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            Tailored corporate solutions designed to navigate the complexities of the UAE market. From inception to expansion, we are your strategic partners.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-4 md:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 md:p-12 hover:border-gold/30 transition-all duration-700 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-500 shadow-xl">
                      <service.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-500" />
                    </div>
                    <span className="text-white/20 font-black text-4xl select-none">0{idx + 1}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed mb-10 border-b border-white/5 pb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                    {service.links.map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-3 text-sm text-gray-400 hover:text-white group/link transition-colors py-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover/link:bg-gold transition-colors"></span>
                        <span className="font-medium tracking-wide">{link.name}</span>
                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-dashed border-white/10 flex justify-end">
                     <span className="text-xs font-black uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                        Explore Category <ArrowRight size={14} />
                     </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Ready to Start Your <span className="text-gold">Journey?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get a personalized cost estimate for your business setup or schedule a consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
             <Link href="/cost-calculator" className="px-10 py-4 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:shadow-none hover:-translate-y-1">
                Calculate Cost
             </Link>
             <Link href="/contact" className="px-10 py-4 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-all hover:-translate-y-1">
                Contact Experts
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
