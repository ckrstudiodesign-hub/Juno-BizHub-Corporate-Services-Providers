"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/office.png"
          alt="Golden Legacy Office"
          fill
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#030303]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Our <span className="text-gradient-gold">Golden</span> Legacy
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Founded on two decades of elite banking expertise, navigating the corporate landscape of Dubai with precision and prestige.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
