"use client";

import React from 'react';
import { Landmark, Building2, Globe2, BadgeCheck, Home } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="bg-white section-padding border-y border-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Credibility</span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase">Authorized & <span className="text-gold">Accredited</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {[
            { icon: <Landmark size={32} />, title: "DED Licensed", desc: "Registered Department of Economic Development" },
            { icon: <Building2 size={32} />, title: "Freezone Partner", desc: "Official formation partner across UAE zones" },
            { icon: <Globe2 size={32} />, title: "Global Network", desc: "Extensive corporate banking & legal reach" },
            { icon: <BadgeCheck size={32} />, title: "ISO Certified", desc: "International Quality Management Standard" },
            { icon: <Home size={32} />, title: "RERA Certified", desc: "Real Estate Regulatory Agency Approved" }
          ].map((badge, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center space-y-4 p-8 rounded-3xl transition-all duration-500 hover:bg-gray-50">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                {badge.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-black font-black text-lg tracking-tight uppercase">{badge.title}</h4>
                <p className="text-gray-400 text-[10px] md:text-xs font-medium leading-relaxed max-w-[180px] mx-auto uppercase tracking-[0.05em]">{badge.desc}</p>
              </div>
              <div className="w-8 h-0.5 bg-gold/20 rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
