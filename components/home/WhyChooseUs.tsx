"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, BarChart3, Target, Zap, Landmark } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    { title: "Banking Support", desc: "Superior assistance in navigating multi-currency corporate account setups.", icon: <Landmark size={48} /> },
    { title: "Govt Networking", desc: "Direct connections and optimized procedures with local authorities.", icon: <Target size={48} /> },
    { title: "Fast Tracking", desc: "Efficient procedures that reduce your time-to-market significantly.", icon: <Zap size={48} /> },
    { title: "Ethical Integrity", desc: "No hidden fees. Full transparency in every document and government fee.", icon: <Shield size={48} /> },
    { title: "Market Insights", desc: "Access twenty years of data and trends in the UAE business landscape.", icon: <BarChart3 size={48} /> },
    { title: "Custom Solutions", desc: "Bespoke setup packages tailored to your specific industry needs.", icon: <Zap size={48} /> },
  ];

  return (
    <section className="section-padding bg-[#030303] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -ml-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-32 h-fit">
            <span className="text-gold font-black tracking-[0.4em] uppercase text-xs">The Golden Standard</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Why Visionary <br />Entrepreneurs <br /><span className="text-gold">Choose Us</span></h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              We combine deep-rooted banking knowledge with cutting-edge legal expertise to provide a setup process that is as prestigious as it is practical.
            </p>
            <Link href="/contact" className="btn-premium !rounded-xl flex items-center justify-center gap-3">
              Consult with Experts <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {points.map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-10 rounded-[40px] border border-white/5 group hover:border-gold/30 transition-all duration-500 shadow-2xl">
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-white mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
