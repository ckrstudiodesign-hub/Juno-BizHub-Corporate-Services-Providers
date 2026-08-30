"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Mail, PhoneCall } from 'lucide-react';
import { teamMembers } from '@/lib/team-data';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric-sapphire/5 blur-[120px] rounded-full -mr-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs">Our Experts</span>
          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">The Minds Behind <br /><span className="text-gradient-primary">Your Success</span></h2>
          <div className="w-24 h-1 bg-electric-sapphire mx-auto rounded-full"></div>
        </div>

        {/* Unified Responsive Grid for exactly 4 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }: { member: any }) => (
  <div className="relative group overflow-hidden rounded-[24px] border border-white/5 hover:border-electric-sapphire/30 transition-all duration-700 bg-[#0a0a0a]">
    <Link href={`/team/${member.slug}`} className="block relative h-[350px] md:h-[420px]">
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black grayscale group-hover:grayscale-0 transition-all duration-1000" />
      )}
      
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <div className="space-y-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            <h4 className="text-2xl md:text-xl font-bold text-white mb-1 leading-tight">{member.name}</h4>
            <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-electric-sapphire"></div>
              <p className="text-electric-sapphire font-bold tracking-wide text-[14px] md:text-[13px] line-clamp-1">{member.role}</p>
            </div>
          </div>
          
          <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex flex-col gap-2 mb-4">
            {member.email && (
              <div 
                onClick={(e) => { e.preventDefault(); window.location.href = `mailto:${member.email}`; }} 
                className="text-gray-400 hover:text-white text-xs flex items-center gap-2 transition-colors z-50 cursor-pointer"
              >
                <Mail size={12} />
                <span className="truncate">{member.email}</span>
              </div>
            )}
            {member.mobile && (
              <div 
                onClick={(e) => { e.preventDefault(); window.location.href = `tel:${member.mobile}`; }} 
                className="text-gray-400 hover:text-white text-xs flex items-center gap-2 transition-colors z-50 cursor-pointer"
              >
                <PhoneCall size={12} />
                <span>{member.mobile}</span>
              </div>
            )}
            <span className="mt-2 text-electric-sapphire text-[10px] font-black uppercase tracking-wider border-b border-electric-sapphire/30 pb-0.5 self-start">View Profile →</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Team;
