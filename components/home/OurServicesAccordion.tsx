"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe2, Briefcase, FileSignature, Landmark, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'mainland',
    title: 'Mainland Formation',
    icon: Building2,
    description: 'Launch your business in the UAE mainland with full ownership and direct access to the local market.',
    links: ['Mainland Overview', 'LLC Formation', 'Professional License', 'Branch Office'],
    href: '/services'
  },
  {
    id: 'freezone',
    title: 'Free Zone Setup',
    icon: Globe2,
    description: 'Benefit from tax exemptions and 100% foreign ownership in UAE\'s premier Free Zones.',
    links: ['Free Zone Overview', 'IFZA', 'MEYDAN', 'DMCC', 'RAKEZ', 'SPC Free Zone', 'DIFC'],
    href: '/services'
  },
  {
    id: 'corporate',
    title: 'Corporate Services',
    icon: Briefcase,
    description: 'Comprehensive corporate services to support your business growth and compliance.',
    links: ['Bank Account Opening', 'PRO Services', 'VAT Consultancy', 'Corporate Tax', 'Bookkeeping', 'Legal Translation'],
    href: '/services'
  },
  {
    id: 'residency',
    title: 'Residency & Visas',
    icon: FileSignature,
    description: 'Expert assistance with Golden Visas and residency permits for you and your employees.',
    links: ['Golden Visa', 'UAE Will', 'Document Attestation'],
    href: '/services'
  },
  {
    id: 'banking',
    title: 'Banking Solutions',
    icon: Landmark,
    description: 'Strategic partnerships with leading UAE banks to facilitate seamless account opening and financial operations.',
    links: ['Corporate Banking', 'Personal Banking', 'Offshore Accounts', 'Trade Finance'],
    href: '/services'
  }
];

const OurServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding relative overflow-hidden bg-[#030303]" id="our-services">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-1/3 h-[500px] bg-electric-sapphire/5 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase max-w-4xl mx-auto">
            Tailored corporate solutions designed to navigate the complexities of the <span className="text-electric-sapphire">UAE market</span>.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto">
            From inception to expansion, we are your strategic partners.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass border transition-all duration-500 rounded-[2rem] overflow-hidden ${
                  isOpen ? 'border-electric-sapphire/40 shadow-[0_10px_40px_rgba(84,101,255,0.1)]' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl transition-colors duration-500 ${
                      isOpen ? 'bg-electric-sapphire/20 text-electric-sapphire' : 'bg-white/5 text-gray-400'
                    }`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className={`text-xl md:text-3xl font-black uppercase tracking-tighter transition-colors duration-500 ${
                      isOpen ? 'text-white' : 'text-gray-400'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 transition-transform duration-500 ${
                      isOpen ? 'rotate-180 text-electric-sapphire' : 'text-gray-500'
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 md:pl-[6.5rem]">
                        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-3xl">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-8">
                          {service.links.map((link, linkIdx) => (
                            <span 
                              key={linkIdx}
                              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:border-electric-sapphire/50 transition-colors cursor-default"
                            >
                              {link}
                            </span>
                          ))}
                        </div>

                        <Link 
                          href={service.href}
                          className="inline-flex items-center gap-2 text-electric-sapphire font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group"
                        >
                          Explore Category
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesAccordion;
