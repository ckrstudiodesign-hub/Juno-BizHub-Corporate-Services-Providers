"use client";

import React from 'react';
import { Eye, Landmark } from 'lucide-react';

const AboutVision = () => {
  return (
    <section id="mission" className="section-padding bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-16 rounded-[48px] border border-gold/10 space-y-8">
               <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <Eye className="text-gold w-8 h-8" />
               </div>
               <h3 className="text-4xl font-black text-white">Our Vision</h3>
               <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                 "To bridge the gap between global ambition and local success by creating a seamless corridor for businesses to flourish in the UAE."
               </p>
            </div>
            <div className="glass-card p-16 rounded-[48px] border border-gold/10 space-y-8">
               <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <Landmark className="text-gold w-8 h-8" />
               </div>
               <h3 className="text-4xl font-black text-white">Our Mission</h3>
               <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                 "Leveraging professional expertise to equip entrepreneurs with strategic corporate tools, bank-ready structures, and elite advisory."
               </p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default AboutVision;
