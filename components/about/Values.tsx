"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: "01 Integrity",
      desc: "Clear communication, transparent scope and professional handling of client information.",
      icon: <Shield className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "02 Client Focus",
      desc: "Solutions designed around the client's activity, ownership structure, budget and growth plans.",
      icon: <Users className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "03 Execution",
      desc: "Structured follow-through from documentation and submission to completion and handover.",
      icon: <Zap className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "04 Professionalism",
      desc: "Reliable coordination with authorities, partners, banks and service providers.",
      icon: <CheckCircle className="w-10 h-10 text-electric-sapphire" />
    },
    {
      title: "05 Long-Term Thinking",
      desc: "Building recurring relationships through renewals, amendments and ongoing corporate support.",
      icon: <TrendingUp className="w-10 h-10 text-electric-sapphire" />
    }
  ];

  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-sapphire/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-20">
        <h2 className="text-electric-sapphire font-bold tracking-[0.3em] uppercase text-sm mb-4">The Golden Standard</h2>
        <h3 className="text-4xl md:text-5xl font-black">Our Core <span className="text-gradient-primary">Principles</span></h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
        {values.map((val, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] border border-electric-sapphire/10 hover:border-electric-sapphire/40 transition-all group"
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
