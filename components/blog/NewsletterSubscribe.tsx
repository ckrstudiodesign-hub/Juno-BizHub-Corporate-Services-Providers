"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import SchemaMarkup from '../seo/SchemaMarkup';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  const subscribeSchema = {
    "@type": "SubscribeAction",
    "object": {
      "@type": "Organization",
      "name": "Juno BizHub Corporate Services Providers"
    },
    "result": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.junobizhub.com/blog"
    }
  };

  return (
    <>
      <SchemaMarkup type="SubscribeAction" data={subscribeSchema} />
      <div className="relative bg-gradient-to-br from-[#111111] to-[#050505] rounded-[40px] p-8 md:p-12 border border-white/5 overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-sapphire/5 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
              Stay Ahead with Our <span className="text-electric-sapphire">Weekly Briefing</span>
            </h3>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Subscribe to our exclusive newsletter to receive premium weekly insights directly to your inbox. We cover actionable strategies across Corporate Tax, Mainland & Free Zone structuring, UAE Visas, and advanced optimization tactics including SEO, AEO, GEO, LLM, and RAG intelligence.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#111111] flex items-center justify-center">
                    <UserIcon />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">Join 5,000+ Executives</p>
            </div>
          </div>

          <div className="bg-black/50 p-6 md:p-8 rounded-[32px] border border-white/5 backdrop-blur-md">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-electric-sapphire/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-electric-sapphire" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase">Subscription Confirmed</h4>
                <p className="text-gray-400 text-sm">Welcome to the Juno BizHub executive briefing.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-4">
                    Corporate Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-sapphire/50 focus:bg-white/10 transition-all"
                      placeholder="executive@company.com"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-electric-sapphire hover:bg-white text-black font-black uppercase tracking-widest text-xs py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                >
                  {status === 'loading' ? 'Processing...' : 'Subscribe Now'}
                  {status !== 'loading' && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
                </button>
                <p className="text-center text-[10px] text-gray-600 uppercase tracking-wider mt-4">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
