"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black tracking-[0.3em] uppercase text-xs md:text-sm block"
            >
              Industry Insights & News
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            >
              The Golden <span className="text-gradient-gold">Journal</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            >
              Stay updated with the latest trends, regulatory changes, and expert advice on business setup and corporate services in the UAE.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                   <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gold/10 backdrop-blur-md border border-gold/20 text-gold text-[10px] font-black uppercase tracking-wider rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-gold" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={12} className="text-gold" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0 z-0"></span>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center text-gold text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                    Read Article <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
