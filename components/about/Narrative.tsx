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
              <span className="text-electric-sapphire font-bold tracking-[0.3em] uppercase text-sm">Our Positioning</span>
              <h2 className="text-4xl font-black">One Trusted Point <br />of <span className="text-gradient-primary">Contact</span></h2>
              <div className="w-12 h-1 bg-electric-sapphire rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light text-justify">
              <p>
                Juno BizHub is a UAE-based Corporate Service Provider focused on making business establishment and ongoing corporate administration simpler, clearer and more efficient.
              </p>
              <p>
                From business idea to UAE operation, we help clients navigate jurisdiction selection, licensing, government processes and the practical requirements of establishing a compliant UAE presence.
              </p>
              <p>
                We serve a diverse range of clients, from first-time entrepreneurs and growing SMEs to international investors and E-commerce businesses. Our ideal clients value clarity, responsiveness, and one-point coordination rather than a transactional licence-only service.
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
            <div className="relative rounded-3xl overflow-hidden border border-electric-sapphire/20 glass">
              <Image 
                src="/images/team.png" 
                alt="Executive Team" 
                width={600} 
                height={800}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric-sapphire/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
