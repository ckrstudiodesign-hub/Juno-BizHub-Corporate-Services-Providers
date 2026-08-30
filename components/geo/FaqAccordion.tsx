"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title?: string;
  faqs: FAQ[];
}

/**
 * GEO / AEO Optimized Component
 * Explicit QA pairs injected automatically into FAQPage JSON-LD.
 */
export default function FaqAccordion({ title = "Frequently Asked Questions", faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQ Schema dynamically
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      }
    }))
  };

  return (
    <section className="mb-12" aria-label={title}>
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-px bg-electric-sapphire"></div>
        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight m-0">{title}</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/5 border-electric-sapphire/30' : 'bg-transparent hover:bg-white/[0.02]'}`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
              >
                <h3 className={`font-bold pr-8 transition-colors ${isOpen ? 'text-electric-sapphire' : 'text-white'}`}>
                  {faq.question}
                </h3>
                <ChevronDown className={`shrink-0 transition-transform duration-300 text-gray-500 ${isOpen ? 'rotate-180 text-electric-sapphire' : ''}`} />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
