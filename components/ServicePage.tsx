"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceContactForm from './ServiceContactForm';
import ExecutiveSummary from './geo/ExecutiveSummary';
import DecisionTable from './geo/DecisionTable';
import StepByStep from './geo/StepByStep';
import FaqAccordion from './geo/FaqAccordion';
interface ServicePageProps {
  title: string;
  subtitle?: string;
  description: string | string[];
  advantagesTitle?: string;
  advantages?: string[];
  sections?: {
    title: string;
    content?: string | string[];
    list?: (string | { name: string; logo: string })[];
  }[];
  hallmarksTitle?: string;
  hallmarks?: {
    title: string;
    description: string;
  }[];
  heroImage?: string;
  executiveSummary?: { summary: string | string[], keyFacts: string[] };
  decisionTable?: { title: string, option1Name: string, option2Name: string, features: { name: string, option1: boolean | string, option2: boolean | string }[] };
  stepByStep?: { title: string, steps: { title: string, description: string }[] };
  faqs?: { question: string, answer: string }[];
}

const ServicePage = ({
  title,
  subtitle,
  description,
  advantagesTitle = "Key Advantages",
  advantages,
  sections,
  hallmarksTitle = "Our Service Hallmarks",
  hallmarks,
  heroImage = "/images/mainland.png",
  executiveSummary,
  decisionTable,
  stepByStep,
  faqs
}: ServicePageProps) => {
  return (
    <div className="bg-[#030303] text-white min-h-screen pb-32 pt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Dynamic Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-30 grayscale-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl mx-auto"
           >
              <Link href="/" className="inline-flex items-center gap-2 text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-10 hover:gap-4 transition-all opacity-60 hover:opacity-100">
                <ArrowLeft size={14} /> Back to Hub
              </Link>
              <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] text-white tracking-tighter uppercase">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 3 === 2 ? "text-gradient-gold" : ""}>{word} </span>
                ))}
              </h1>
              {subtitle && (
                <div className="inline-block px-5 py-2 glass rounded-full border border-gold/20">
                  <p className="text-sm md:text-base text-gold font-bold tracking-widest uppercase">
                    {subtitle}
                  </p>
                </div>
              )}
           </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Main Content Area */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-24">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-xl max-w-none"
            >
              <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-10 font-light">
                {Array.isArray(description) ? (
                  description.map((p, i) => <p key={i} className="first-letter:text-5xl first-letter:font-black first-letter:text-gold first-letter:mr-3 first-letter:float-left">{p}</p>)
                ) : (
                  <p className="first-letter:text-5xl first-letter:font-black first-letter:text-gold first-letter:mr-3 first-letter:float-left">{description}</p>
                )}
              </div>
            </motion.section>

            {executiveSummary && (
              <ExecutiveSummary summary={executiveSummary.summary} keyFacts={executiveSummary.keyFacts} />
            )}

            {decisionTable && (
              <DecisionTable {...decisionTable} />
            )}

            {stepByStep && (
              <StepByStep {...stepByStep} />
            )}
            {sections && sections.map((section, idx) => (
              <motion.section 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gold"></div>
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">{section.title}</h2>
                </div>
                
                <div className="space-y-10">
                  {section.content && (
                    <div className="text-gray-400 text-lg leading-relaxed font-light">
                      {Array.isArray(section.content) ? (
                        section.content.map((p, i) => <p key={i} className="mb-6">{p}</p>)
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  )}
                  
                  {section.list && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.list.map((item, i) => {
                         const isString = typeof item === 'string';
                         const name = isString ? item : item.name;
                         const logo = isString ? null : item.logo;
                         
                         return (
                          <div key={i} className="bg-white/5 p-6 rounded-3xl flex items-center gap-6 hover:bg-white/10 transition-all border border-white/5 hover:border-gold/30 group">
                            {logo ? (
                              <div className="w-16 h-12 relative shrink-0 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
                                <Image src={logo} alt={name} fill className="object-contain object-left" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                                <CheckCircle2 className="text-gold group-hover:text-black w-4 h-4 transition-colors" />
                              </div>
                            )}
                            <span className={`text-gray-300 font-medium text-sm leading-relaxed ${logo ? 'font-bold text-white' : ''}`}>{name}</span>
                          </div>
                         );
                      })}
                    </div>
                  )}
                </div>
              </motion.section>
            ))}

            {/* Standard Service Highlights - Universal Content Expansion */}
            <section className="space-y-12 pt-12 border-t border-white/5">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gold"></div>
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">Our Legacy Standard</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                   {[
                     { t: "Elite Banking", d: "Direct introductions to premier UAE banks including multi-currency account setup support." },
                     { t: "Tax Optimization", d: "Strategic corporate tax and VAT structural planning for maximum efficiency." },
                     { t: "Concierge Pro", d: "End-to-end visa processing and government liaison services for your entire team." }
                   ].map((item, i) => (
                     <div key={i} className="glass p-8 rounded-3xl space-y-4 border-gold/10">
                        <h4 className="text-gold font-black uppercase text-sm tracking-widest">{item.t}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed font-light">{item.d}</p>
                     </div>
                   ))}
                </div>
            </section>

            {hallmarks && (
              <section className="space-y-12">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">{hallmarksTitle}</h2>
                  <div className="w-16 h-1 bg-gold mt-4 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {hallmarks.map((hallmark, idx) => (
                    <div key={idx} className="glass-card p-10 rounded-[40px] space-y-6">
                      <h4 className="text-xl font-bold text-gold uppercase tracking-tight">{hallmark.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed text-sm italic">{hallmark.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {faqs && (
              <FaqAccordion faqs={faqs} />
            )}
          </div>

          {/* Sidebar Area - Form Centered Right */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-32 space-y-10">
              
              {/* Direct Service Form - The centerpiece of the sidebar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-b from-gold/40 to-transparent blur-2xl opacity-20 transition-opacity"></div>
                <div className="relative">
                  <ServiceContactForm defaultService={title} title="Secure Entry Form" />
                </div>
              </motion.div>

              {advantages && (
                <div className="glass p-10 rounded-[48px] border border-gold/10 space-y-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/5 pb-6">{advantagesTitle}</h3>
                  <ul className="space-y-6">
                    {advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <CheckCircle2 className="text-gold w-4 h-4 shrink-0 mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        <span className="text-gray-400 font-medium text-xs md:text-sm leading-relaxed group-hover/item:text-white transition-colors">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Expert Hotline - Compact */}
              <div className="bg-white p-8 rounded-[40px] flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                 <div className="relative z-10 space-y-1">
                    <p className="text-black/40 font-black uppercase text-[10px] tracking-[0.2em] group-hover:text-black/60 transition-colors">Direct Desk</p>
                    <a href="tel:+971556656007" className="text-black text-xl font-black tracking-tighter">
                      +971 55 665 6007
                    </a>
                 </div>
                 <div className="relative z-10 w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-gold group-hover:bg-white group-hover:text-black transition-all shadow-lg rotate-3 group-hover:rotate-0">
                    <Phone size={22} strokeWidth={2.5} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
