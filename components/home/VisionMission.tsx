"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-[#030303]">
       <div className="absolute inset-0 bg-electric-sapphire/[0.03] -skew-y-3 origin-left"></div>
       <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid lg:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] p-12 md:p-16 rounded-[48px] border border-electric-sapphire/10 relative group hover:border-electric-sapphire/30 hover:bg-[#0d0d0d] transition-all duration-500 shadow-2xl"
            >
              <div className="w-24 h-24 bg-electric-sapphire/10 rounded-3xl flex items-center justify-center mb-10 rotate-3 group-hover:rotate-0 group-hover:bg-electric-sapphire transition-all duration-500">
                <Target size={48} className="text-electric-sapphire group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-4xl font-black mb-8 text-white tracking-tight">Our <span className="text-electric-sapphire">Vision</span></h3>
              <p className="text-2xl text-gray-400 font-light leading-relaxed mb-6 text-justify">
                "To become a <span className="text-electric-sapphire font-bold">trusted UAE corporate services partner</span> recognised for <span className="text-white font-medium">practical advice</span>, transparent execution and <span className="text-white font-medium">long-term client relationships</span>."
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-electric-sapphire font-black uppercase tracking-[0.2em] text-xs">
                  Where business formation meets banking excellence
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0a0a0a] p-12 md:p-16 rounded-[48px] border border-electric-sapphire/10 relative group hover:border-electric-sapphire/30 hover:bg-[#0d0d0d] transition-all duration-500 shadow-2xl"
            >
              <div className="w-24 h-24 bg-electric-sapphire/10 rounded-3xl flex items-center justify-center mb-10 -rotate-3 group-hover:rotate-0 group-hover:bg-electric-sapphire transition-all duration-500">
                <Eye size={48} className="text-electric-sapphire group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-4xl font-black mb-8 text-white tracking-tight">Our <span className="text-electric-sapphire">Mission</span></h3>
              <p className="text-2xl text-gray-400 font-light leading-relaxed italic text-justify">
                "To simplify <span className="text-white font-medium">business establishment</span> and <span className="text-electric-sapphire font-bold">corporate administration</span> by combining local knowledge, <span className="text-white font-medium">structured processes</span> and responsive client service."
              </p>
            </motion.div>
         </div>
       </div>
    </section>
  );
};

export default VisionMission;
