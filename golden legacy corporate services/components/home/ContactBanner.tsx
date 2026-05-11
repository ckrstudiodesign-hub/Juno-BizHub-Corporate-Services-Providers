"use client";

import React from 'react';
import Link from 'next/link';

const ContactBanner = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold/5 blur-[150px] rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-gray-50 p-12 md:p-24 rounded-[60px] border border-gray-100 relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all duration-700">
           {/* Decorative Element */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48 transition-all duration-700 group-hover:bg-gold/10"></div>
           
           <div className="relative z-10 text-center space-y-12">
             <div className="space-y-6">
                <span className="text-gold font-black tracking-[0.5em] uppercase text-xs">Direct Access</span>
                <h2 className="text-4xl md:text-7xl font-black text-black leading-tight tracking-tighter">Ready to launch <br />in <span className="text-gold">Dubai?</span></h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                  Join the elite circle of global businesses. Our consultants are ready to architect your corporate future in the UAE.
                </p>
             </div>
             
             <div className="flex flex-wrap justify-center gap-8 pt-6">
                <a href="tel:+971556656007" className="btn-premium !px-12 !py-5 text-lg shadow-[0_20px_40px_rgba(212,175,55,0.2)] !rounded-2xl">
                  Call: +971 55 665 6007
                </a>
                <Link href="/contact" className="border-2 border-gold/50 px-12 py-5 rounded-2xl font-black text-gold text-lg hover:bg-gold hover:text-black transition-all duration-300 backdrop-blur-sm">
                  Send Inquiry Form
                </Link>
             </div>
             
             <p className="text-gray-400 text-xs font-black tracking-[0.3em] uppercase pt-8">
               Located at the heart of Dubai - Sheikh Zayed Road
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
