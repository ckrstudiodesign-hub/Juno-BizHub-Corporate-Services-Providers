"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    { name: 'Raj Kumar', location: 'India', rating: 5, text: 'Fast mainland setup and clear guidance.' },
    { name: 'Priya Sharma', location: 'India', rating: 4.5, text: 'Smooth visa support and professional help.' },
    { name: 'Aarav Mehta', location: 'India', rating: 5, text: 'Very responsive and easy to work with.' },
    { name: 'Sarah Johnson', location: 'UK', rating: 5, text: 'Excellent banking and company formation help.' },
    { name: 'Michael Brown', location: 'USA', rating: 4.5, text: 'Strong advisory and quick turnaround.' },
    { name: 'Lisa Chen', location: 'Singapore', rating: 5, text: 'Great support for our Dubai expansion.' },
    { name: 'Ahmed Al Farsi', location: 'UAE', rating: 5, text: 'Reliable team and solid corporate service.' },
    { name: 'Neha Gupta', location: 'India', rating: 5, text: 'Simple process and excellent communication.' },
    { name: 'Daniel Carter', location: 'Australia', rating: 4.5, text: 'Very helpful with setup and compliance.' },
    { name: 'Fatima Khan', location: 'Pakistan', rating: 5, text: 'Best service for a smooth UAE launch.' },
  ];


  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [reviews.length]);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={13}
          className={index < Math.round(rating) ? 'text-electric-sapphire fill-electric-sapphire' : 'text-white/25'}
        />
      ))}
    </div>
  );

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-75"
        >
          <source src="/juno videos/hero bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.22)_55%,rgba(0,0,0,0.55)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/15 to-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#030303]/70"></div>
        
        {/* Subtle Decorative Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-sapphire/8 blur-[10px] rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-sapphire/4 blur-[10px] rounded-full opacity-6 -ml-48 -mb-48"></div>
      </div>

      {/* Modern Background Branding */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] z-0">
        <h2 className="text-[20vw] font-black text-white whitespace-nowrap leading-none tracking-tighter">
          Juno BizHub
        </h2>
      </div>

      {/* Main Content Container with Navbar Offset */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 md:space-y-6 max-w-5xl px-4 py-8 md:py-10 rounded-[32px] bg-black/14 backdrop-blur-[1px] border border-white/5 shadow-[0_16px_44px_rgba(0,0,0,0.28)]"
          >
            {/* The "Juno BizHub" Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-electric-sapphire text-lg md:text-2xl font-black tracking-[0.45em] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                Juno BizHub
              </h3>
              <div className="w-16 h-[1px] bg-electric-sapphire/40"></div>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
              YOUR BUSINESS. <br />
              <span className="text-gradient-primary">OUR EXPERTISE.</span> UAE.
            </h1>
            
            <p className="text-sm sm:text-base md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal md:font-light drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] px-4">
              A practical, responsive partner for <span className="text-white font-medium">entrepreneurs, SMEs, investors</span> and international businesses establishing and growing in the United Arab Emirates.
            </p>

            <div className="mt-2 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <Link href="/cost-calculator" className="btn-premium !px-8 !py-3 !text-xs !rounded-full uppercase tracking-[0.2em] font-black shadow-[0_18px_36px_rgba(84,101,255,0.16)]">
                Calculate Setup Cost
              </Link>

              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <div className="flex items-center gap-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                    <span className="text-xs font-black text-[#4285F4]">G</span>
                  </span>
                  <div className="flex flex-col leading-none text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/70">Google rating</span>
                    <span className="text-sm font-black text-white">4.9</span>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={13} className={index < 5 ? 'text-electric-sapphire fill-electric-sapphire' : 'text-white/30'} />
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute bottom-12 left-3 md:left-8 z-20 w-[280px] md:w-[320px]"
      >
        <div className="rounded-[20px] border border-white/15 bg-black/60 shadow-[0_18px_44px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="px-3.5 py-2.5 border-b border-white/10 flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-[0.22em] font-black">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
              <span className="text-[9px] font-black text-[#4285F4]">G</span>
            </span>
            Google 4.9
            <div className="flex items-center gap-0.5 ml-auto">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={12} className="text-electric-sapphire fill-electric-sapphire" />
              ))}
            </div>
          </div>
          <div className="px-3.5 py-2.5 min-h-[78px]">
            <motion.div
              key={currentReviewIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-black text-white">{reviews[currentReviewIndex].name}</h4>
                {renderStars(reviews[currentReviewIndex].rating)}
              </div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">{reviews[currentReviewIndex].location}</p>
              <p className="text-[11px] leading-relaxed text-white/82">{reviews[currentReviewIndex].text}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA & Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-4 flex flex-col items-center justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-black/16 backdrop-blur-[1px] border border-white/5 px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
          >
            <div className="hidden xl:block">
              <Link href="/services" className="btn-outline-electric-sapphire !px-8 !py-3 !text-xs !rounded-full uppercase tracking-[0.2em] font-black backdrop-blur-sm">
               Services
              </Link>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <span className="hidden md:block text-white/70 text-[10px] tracking-[0.35em] uppercase font-bold">Scroll to Explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-electric-sapphire/40 via-electric-sapphire/5 to-transparent"></div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;




