"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-12">
         <h2 className="text-4xl md:text-6xl font-black">Experience the <br /><span className="text-gradient-gold">Golden Legacy</span> Journey</h2>
         <p className="text-xl text-gray-400 font-light leading-relaxed">
           Join the ranks of successful international businesses that started their UAE journey with us.
         </p>
         <div className="flex justify-center">
            <Link href="/contact" className="btn-premium flex items-center gap-4">
              Get a Free Consultation <ArrowRight />
            </Link>
         </div>
      </div>
    </section>
  );
};

export default AboutCTA;
