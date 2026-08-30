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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-sapphire/5 blur-[150px] rounded-full -mr-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-electric-sapphire/5 blur-[120px] rounded-full -ml-20 pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border border-electric-sapphire/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <Image 
                  src="/juno team/juno-team.png" 
                  alt="Juno BizHub Expert Team" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* Floating Badge on Image */}
                <div className="absolute top-6 left-6 px-4 py-2 glass border border-electric-sapphire/30 rounded-xl z-30">
                   <div className="flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-sapphire opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-sapphire"></span>
                     </span>
                     <span className="text-[10px] font-bold text-electric-sapphire uppercase tracking-[0.2em]">Live Advisory</span>
                   </div>
                </div>
              </div>


              {/* Stats Card */}
              <div className="absolute -bottom-10 -right-4 sm:-bottom-14 sm:-right-8 glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-electric-sapphire/30 z-30 shadow-2xl backdrop-blur-3xl animate-float">
                <div className="text-4xl sm:text-6xl font-black text-electric-sapphire mb-1 tracking-tighter">20+</div>
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
              <span className="text-electric-sapphire font-bold tracking-[0.3em] uppercase text-xs sm:text-sm inline-block px-4 py-1.5 rounded-full bg-electric-sapphire/10 border border-electric-sapphire/20">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                Simplifying Business <br />
                <span className="text-gradient-primary">Establishment</span>
              </h2>
              <div className="w-20 h-1.5 bg-electric-sapphire rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light text-justify">
              <p>
                Juno BizHub is a UAE-based Corporate Service Provider focused on making business establishment and ongoing corporate administration simpler, clearer and more efficient.
              </p>
              <p>
                We support founders, investors, SMEs and international businesses with practical guidance across the business lifecycle — from choosing the right jurisdiction and activity to licensing, visas, banking assistance and post-incorporation support.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 group">
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2">
                    <Shield className="text-electric-sapphire w-4 h-4" /> Clarity
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">We simplify UAE setup options, requirements, documentation and timelines.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2">
                    <CheckCircle2 className="text-electric-sapphire w-4 h-4" /> Coordination
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">We coordinate the multiple steps involved in formation, visas, and banking.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2">
                    <ArrowRight className="text-electric-sapphire w-4 h-4" /> Responsiveness
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">A single point of contact helps clients move faster and reduces back-and-forth.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2">
                    <Trophy className="text-electric-sapphire w-4 h-4" /> Long-Term Support
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">We build relationships beyond incorporation through ongoing corporate support.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 sm:pt-10 flex flex-wrap gap-4">
             
              <Link href="/services" className="px-8 py-3 rounded-full border border-electric-sapphire/30 text-white font-bold hover:bg-electric-sapphire/10 transition-all text-center">
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

