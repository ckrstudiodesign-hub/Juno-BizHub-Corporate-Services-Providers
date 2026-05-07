"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Narrative = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl font-black">Elite Expertise in the <br /><span className="text-gradient-gold">Heart of Dubai</span></h2>
              <div className="w-12 h-1 bg-gold rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Golden Legacy Corporate Services Provider is strategically located at the heart of Dubai - Sheikh Zayed Road. This prime location mirrors our forward-thinking approach to business setup.
              </p>
              <p>
                Our team brings an extensive background from the UAE's premier banking sector. For over twenty years, we have managed complex financial portfolios and corporate structures for high-net-worth individuals and international enterprises.
              </p>
              <p>
                This unique financial heritage allows us to offer more than just administrative assistance. We provide strategic insight that ensures your company isn't just registered—it's structurally sound for banking, growth, and long-term success.
              </p>
            </div>

            <div className="flex gap-4">
               <Link href="/contact" className="btn-premium">Partner With Us</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gold/20 glass">
              <Image 
                src="/images/team.png" 
                alt="Executive Team" 
                width={600} 
                height={800}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
