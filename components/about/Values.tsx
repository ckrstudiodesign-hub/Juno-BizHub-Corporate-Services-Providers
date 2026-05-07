"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: "Ethical Integrity",
      desc: "Transparent practices with zero hidden costs. We believe in building trust through total disclosure and fair pricing.",
      icon: <Shield className="w-10 h-10 text-gold" />
    },
    {
      title: "Precision Execution",
      desc: "Leveraging two decades of banking precision to ensure every document and procedure is perfectly compliant.",
      icon: <Target className="w-10 h-10 text-gold" />
    },
    {
      title: "Client-Centricity",
      desc: "Your success is our reputation. We provide bespoke solutions that cater to your specific business vision and industry.",
      icon: <Users className="w-10 h-10 text-gold" />
    }
  ];

  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-20">
        <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">The Golden Standard</h2>
        <h3 className="text-4xl md:text-5xl font-black">Our Core <span className="text-gradient-gold">Principles</span></h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
        {values.map((val, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] border border-gold/10 hover:border-gold/40 transition-all group"
          >
            <div className="mb-8 group-hover:scale-110 transition-transform origin-left">{val.icon}</div>
            <h4 className="text-2xl font-bold text-white mb-4">{val.title}</h4>
            <p className="text-gray-500 font-light leading-relaxed">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Values;
