"use client";

import React from 'react';
import { Briefcase, Users, BarChart3, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: "Successful Setups", val: "1000+", icon: <Briefcase /> },
    { label: "Expert Advisors", val: "25+", icon: <Users /> },
    { label: "Business Activities", val: "2000+", icon: <BarChart3 /> },
    { label: "Client Satisfaction", val: "100%", icon: <Award /> },
  ];

  return (
    <section className="py-12 md:py-20 bg-electric-sapphire relative overflow-hidden">
      {/* Decorative Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_5s_infinite] skew-x-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="text-black/80 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-5xl font-black text-black tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-black/60 font-black tracking-[0.2em] uppercase text-[10px] md:text-[12px]">
                  {stat.label}
                </div>
                <div className="w-12 h-1 bg-black/10 mx-auto rounded-full group-hover:w-24 group-hover:bg-black transition-all duration-500"></div>
              </div>
            ))}
         </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
