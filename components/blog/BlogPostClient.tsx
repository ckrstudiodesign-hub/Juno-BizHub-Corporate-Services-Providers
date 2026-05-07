"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, User, Share2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    content: string;
  };
}

export default function BlogPostClient({ post }: BlogPostProps) {
  return (
    <article className="min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans">
      {/* Post Header */}
      <header className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/blog" className="inline-flex items-center text-gold text-xs font-black uppercase tracking-widest hover:text-white transition-colors mb-8 gap-2 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gold/80"
            >
              <span className="px-3 py-1 bg-gold/10 rounded-full border border-gold/20">{post.category}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>{post.date}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white/90"
            >
              {post.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between border-t border-b border-white/10 py-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <User size={18} className="text-gold" />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-wider font-bold">Written By</span>
                  <span className="block text-sm font-bold text-white">{post.author}</span>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors">
                <Share2 size={16} />
                <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Share</span>
              </button>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 mt-8"
            >
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <section className="pb-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Content Body */}
          <div className="prose prose-invert prose-lg prose-headings:font-black prose-headings:text-white prose-p:text-gray-300 prose-a:text-gold prose-strong:text-white prose-li:text-gray-300">
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Post Footer CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            
            <h3 className="text-2xl md:text-3xl font-black text-white">Need Expert Advice?</h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Schedule a consultation with our experts to discuss your business setup requirements in detail.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-none"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
