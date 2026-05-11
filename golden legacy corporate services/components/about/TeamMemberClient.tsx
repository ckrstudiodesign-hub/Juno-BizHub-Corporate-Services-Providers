"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote } from 'lucide-react';

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  message: string;
  expertise?: string;
  profession?: string;
  experience?: string;
}

const TeamMemberClient = ({ member }: { member: TeamMember }) => {
  return (
    <main className="min-h-screen bg-background text-white relative overflow-hidden font-serif">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#0a0a0a] -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -ml-48 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="absolute top-32 left-10 z-20">
        <Link 
          href="/about-us#team" 
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-xs font-bold">Back to Team</span>
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 min-h-screen flex flex-col justify-between">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 order-2 lg:order-1"
          >
            {/* <div className="space-y-4">
              <span className="text-gold text-xs font-black tracking-[0.3em] uppercase block">
                {member.role === 'CEO' ? "CEO'S MESSAGE" : "TEAM PROFILE"}
              </span>
              <div className="w-20 h-[1px] bg-white/20"></div>
            </div> */}



            <div className="space-y-4">
              <div className="w-12 h-[3px] bg-red-600"></div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{member.name}</h1>
                <p className="text-white/60 uppercase tracking-[0.2em] text-sm mt-2 font-bold">{member.role}</p>
              </div>
            </div>
            
            {member.experience && (
              <div className="pt-4 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-gold/30"></div>
                <div className="uppercase tracking-widest text-[10px] text-white/40 font-bold">
                  {member.experience} Experience
                </div>
              </div>
            )}

            {(member.expertise || member.profession) && (
              <div className="pt-8 space-y-2 border-t border-white/10">
                {member.expertise && (
                  <div className="uppercase tracking-widest text-[10px] text-white/60 font-black">
                    {member.expertise}
                  </div>
                )}
                {member.profession && (
                  <div className="uppercase tracking-widest text-[10px] text-gold font-black">
                    {member.profession}
                  </div>
                )}
              </div>
            )}
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/70 leading-relaxed font-light text-sm md:text-base whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[300px] lg:h-[500px] w-full order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <Image 
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-center hover:scale-105 transition-all duration-1000"
              priority
            />
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/5 flex justify-between items-end text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <div>COMPANY PROFILE</div>
          <div className="text-white/40">02</div>
        </footer>
      </div>
    </main>
  );
};

export default TeamMemberClient;
