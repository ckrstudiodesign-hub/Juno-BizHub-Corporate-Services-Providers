"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, BarChart3, Target, Zap, Landmark } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    { title: "Clear Explanation", desc: "Clear explanation of setup options before a client commits.", icon: <Target size={48} /> },
    { title: "Practical Coordination", desc: "Practical coordination across licensing, visas, documentation and banking assistance.", icon: <Shield size={48} /> },
    { title: "Single Point of Contact", desc: "A single point of contact for the business owner to move faster and reduce back-and-forth.", icon: <Zap size={48} /> },
    { title: "Long-Term Relationships", desc: "Focus on long-term relationships rather than one-off transactions.", icon: <Landmark size={48} /> },
    { title: "Growing Network", desc: "A growing network of Free Zone and professional partners to widen client options.", icon: <BarChart3 size={48} /> },
  ];

  return (
    <section className="section-padding bg-[#030303] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-sapphire/5 blur-[120px] rounded-full -ml-40"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Client Journey Step Header */}
        <div className="mb-20 text-center">
          <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs block mb-4">Our Client Journey</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 text-white/70 font-bold uppercase tracking-widest text-sm md:text-lg">
            <span className="text-white hover:text-electric-sapphire transition-colors cursor-default">Consult</span>
            <span className="hidden sm:inline">→</span>
            <span className="text-white hover:text-electric-sapphire transition-colors cursor-default">Recommend</span>
            <span className="hidden sm:inline">→</span>
            <span className="text-white hover:text-electric-sapphire transition-colors cursor-default">Document</span>
            <span className="hidden sm:inline">→</span>
            <span className="text-white hover:text-electric-sapphire transition-colors cursor-default">Execute</span>
            <span className="hidden sm:inline">→</span>
            <span className="text-white hover:text-electric-sapphire transition-colors cursor-default">Support</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 h-fit">
            <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs">Juno BizHub Difference</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">Why Clients <br /><span className="text-electric-sapphire">Choose Us</span></h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg lg:text-xl">
              We provide practical advice, transparent execution, and a single point of coordination for your business setup in the UAE.
            </p>
            <Link href="/contact" className="btn-premium !rounded-xl inline-flex items-center justify-center gap-3 mt-4">
              Start Your Journey <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {points.map((item, idx) => (
              <div 
                key={idx} 
                className={`glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 group hover:border-electric-sapphire/40 hover:bg-electric-sapphire/5 transition-all duration-500 shadow-2xl ${idx === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="text-electric-sapphire mb-8 group-hover:scale-110 transition-transform origin-left bg-white/5 inline-flex p-4 rounded-2xl">
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
