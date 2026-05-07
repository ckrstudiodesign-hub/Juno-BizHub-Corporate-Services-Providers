"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] rounded-full -mr-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 blur-[120px] rounded-full -ml-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Team Image */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border border-gold/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <Image 
                  src="/images/team-office.png" 
                  alt="Golden Legacy Expert Team" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* Floating Badge on Image */}
                <div className="absolute top-6 left-6 px-4 py-2 glass border border-gold/30 rounded-xl z-30">
                   <div className="flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                     </span>
                     <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Live Advisory</span>
                   </div>
                </div>
              </div>

              {/* Secondary Overlapping Image - Adjusted for perfect responsiveness */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-12 sm:-left-12 w-1/2 sm:w-1/2 aspect-video sm:aspect-square rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-background shadow-2xl z-20">
                <Image 
                  src="/images/about-legacy.png" 
                  alt="Premium Banking Excellence" 
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-10 -right-4 sm:-bottom-14 sm:-right-8 glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gold/30 z-30 shadow-2xl backdrop-blur-3xl animate-float">
                <div className="text-4xl sm:text-6xl font-black text-gold mb-1 tracking-tighter">20+</div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-tight">
                  Years of <br />
                  <span className="text-white">Elite Banking</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs sm:text-sm inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">Our Legacy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                Two Decades of <br />
                <span className="text-gradient-gold">Strategic Excellence</span>
              </h2>
              <div className="w-20 h-1.5 bg-gold rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light text-justify">
              <p>
                Golden Legacy Corporate Services, strategically located at the heart of Dubai - Sheikh Zayed Road, is more than just a consultancy. We are your dedicated growth partners in the UAE.
              </p>
              <p>
                Our foundation is built on extensive experience in the elite banking sector. For over twenty years, our team has navigated the complex financial landscapes of Dubai, serving high-net-worth individuals and corporate giants.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Shield className="text-gold w-6 h-6 group-hover:text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Full Compliance</h4>
                  <p className="text-gray-500 text-xs mt-1">Navigating every UAE regulation with total precision.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Trophy className="text-gold w-6 h-6 group-hover:text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Elite Banking</h4>
                  <p className="text-gray-500 text-xs mt-1">Direct access to premium financial networks.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 sm:pt-10 flex flex-wrap gap-4">
             
              <Link href="/services" className="px-8 py-3 rounded-full border border-gold/30 text-white font-bold hover:bg-gold/10 transition-all text-center">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

