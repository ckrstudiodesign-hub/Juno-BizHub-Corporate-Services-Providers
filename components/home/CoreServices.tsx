"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Zap, Globe2, ArrowRight, Landmark, PlusCircle, FileCheck, Shield } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CoreServices = () => {
  const services = [
    {
      title: "Business Setup & Company Formation",
      desc: "Mainland and Free Zone setup coordination, jurisdiction assessment, and licence application support.",
      img: "/images/mainland.png",
      link: "/mainland-company-formation-in-dubai",
      icon: <Building2 className="text-electric-sapphire mb-4" />
    },
    {
      title: "Free Zone Selection & Partner Facilitation",
      desc: "Compare suitable Free Zones, coordinate applications, and access our authorised channel partner networks.",
      img: "/images/freezone.png",
      link: "/dubai-free-zone-company-overview",
      icon: <Globe2 className="text-electric-sapphire mb-4" />
    },
    {
      title: "PRO, Visa & Immigration Support",
      desc: "Establishment coordination, investor/employee visa processing, Emirates ID, and government documentation.",
      img: "/images/wills-service.png",
      link: "/pro-services-dubai",
      icon: <FileCheck className="text-electric-sapphire mb-4" />
    },
    {
      title: "Corporate Banking Assistance",
      desc: "Bank selection guidance, account-opening documentation, application preparation, and follow-up support.",
      img: "/images/mainland.png",
      link: "/bank-account-opening-dubai",
      icon: <Landmark className="text-electric-sapphire mb-4" />
    },
    {
      title: "Corporate Compliance & Ongoing Support",
      desc: "Licence renewals, document updates, shareholder changes, UBO coordination, and administrative assistance.",
      img: "/images/freezone.png",
      link: "/services",
      icon: <Shield className="text-electric-sapphire mb-4" />
    },
    {
      title: "Accounting, VAT & Tax Coordination",
      desc: "Bookkeeping, VAT/Corporate Tax registration, management reporting, and specialist referrals.",
      img: "/images/offshore.png",
      link: "/bookkeeping-and-accounting-services",
      icon: <PlusCircle className="text-electric-sapphire mb-4" />
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-sapphire/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-black leading-tight">Choose Your Path to <br /><span className="text-electric-sapphire">UAE Success</span></h3>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Explore our specialized business setup categories designed to meet diverse corporate requirements in the heart of the Emirates.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={item} className="group bg-gray-50 overflow-hidden rounded-[40px] border border-gray-100 hover:border-electric-sapphire/30 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700">
              <div className="h-72 relative overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                   <div className="w-12 h-12 bg-electric-sapphire rounded-2xl flex items-center justify-center text-black mb-4">
                     {service.icon}
                   </div>
                   <h4 className="text-3xl font-black text-white">{service.title}</h4>
                </div>
              </div>
              <div className="p-10 space-y-8">
                <p className="text-gray-500 font-medium leading-relaxed text-justify">
                  {service.desc}
                </p>
                <Link href={service.link} className="inline-flex items-center gap-3 text-electric-sapphire font-black hover:gap-6 transition-all uppercase tracking-widest text-xs">
                  Read Full Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
