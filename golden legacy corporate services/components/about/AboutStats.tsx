"use client";

import React from 'react';
import { BarChart3, Landmark, Users, BadgeCheck } from 'lucide-react';

const AboutStats = () => {
  const stats = [
    { label: "Successful Setups", val: "1000+", icon: <BarChart3 /> },
    { label: "Banking Expertise", val: "20+", icon: <Landmark /> },
    { label: "Global Network", val: "150+", icon: <Users /> },
    { label: "Compliance Rate", val: "100%", icon: <BadgeCheck /> },
  ];

  return (
    <section className="section-padding bg-gold relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="text-black/80 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-black tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-black/60 font-black tracking-widest uppercase text-[10px]">
                  {stat.label}
                </div>
                <div className="w-8 h-1 bg-black/10 mx-auto rounded-full group-hover:w-16 group-hover:bg-black transition-all duration-500"></div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default AboutStats;
