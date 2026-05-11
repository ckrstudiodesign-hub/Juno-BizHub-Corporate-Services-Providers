"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { submitToWeb3Forms } from '@/lib/web3forms';

const ContactPage = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 2000);
        return;
      }

      const name = nameRef.current?.value || '';
      const email = emailRef.current?.value || '';
      const phone = phoneRef.current?.value || '';
      const serviceType = serviceRef.current?.value || '';
      const msg = messageRef.current?.value || '';

      await submitToWeb3Forms({
        accessKey,
        subject: 'New Contact Page Inquiry - Golden Legacy',
        name,
        email,
        phone,
        message: `New contact page inquiry.\n\nService Type: ${serviceType}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`,
        extra: {
          formType: 'contact-page',
          serviceType,
        },
      });

        setSubmitStatus('success');
        // Reset form
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (serviceRef.current) serviceRef.current.value = 'Mainland Setup';
        if (messageRef.current) messageRef.current.value = '';
        
        setTimeout(() => setSubmitStatus('idle'), 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 2000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden pt-20">
      {/* Hero Header */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -mr-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-gold font-black tracking-[0.5em] uppercase text-xs">Get In Touch</span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              Let's Start Your <br />
              <span className="text-gradient-gold">UAE Journey</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Our consultants are ready to assist you with elite business setup solutions. Connect with us to architect your corporate future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-white">Direct <span className="text-gold">Contact</span></h3>
                <p className="text-gray-400 font-light">Visit our headquarters in the heart of Dubai or reach out through our digital channels.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Headquarters</p>
                    <p className="text-white text-lg font-medium">Located At The Heart Of Dubai - Sheikh Zayed Road</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Call Us</p>
                    <a href="tel:+971556656007" className="text-white text-lg font-medium hover:text-gold transition-colors">+971 55 665 6007</a>
                    <br />
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Email Us</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=goldenlegacy295%40gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-medium hover:text-gold transition-colors italic">goldenlegacy295@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Clock size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Office Hours</p>
                    <div className="flex flex-col">
                      <p className="text-white text-lg font-medium">Monday to Saturday | 9:30 AM – 6:30 PM</p>
                      <p className="text-white/50 text-sm font-medium">Closed on 1st and 2nd Saturdays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social or Badge area could go here */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl relative overflow-hidden group">
                {/* Decorative Pattern inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-black">Inquiry <span className="text-gold">Form</span></h3>
                    <p className="text-gray-500 text-sm">Fill out the details below and our experts will contact you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Full Name</label>
                        <input 
                          ref={nameRef}
                          type="text" 
                          placeholder="John Doe" 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Email Address</label>
                        <input 
                          ref={emailRef}
                          type="email" 
                          placeholder="john@example.com" 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Phone Number</label>
                        <input 
                          ref={phoneRef}
                          type="tel" 
                          placeholder="+971" 
                          required
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Service Type</label>
                        <select 
                          ref={serviceRef}
                          defaultValue="Mainland Setup"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium appearance-none"
                        >
                          <option>Mainland Setup</option>
                          <option>Free Zone Setup</option>
                          <option>Offshore Setup</option>
                          <option>Banking Assistance</option>
                          <option>Other Consultations</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Your Message</label>
                      <textarea 
                        ref={messageRef}
                        rows={5}
                        placeholder="Tell us about your business vision..." 
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium resize-none"
                      ></textarea>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-green-700 text-sm font-medium flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white border border-green-200 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="text-green-600" size={28} />
                        </div>
                        <div>
                          <div className="font-black text-base text-green-700">Form submitted</div>
                          <div className="text-green-600">Thank you! We'll contact you shortly.</div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm font-medium">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="btn-premium w-full py-5 !rounded-2xl text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(212,175,55,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'submitting' ? 'Processing...' : 'Send Secure Message'} {submitStatus !== 'submitting' && <Send size={20} />}
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section or bottom highlight */}
      <section className="bg-white py-1 relative">
        <div className="h-[420px] w-full relative overflow-hidden">
          <iframe
            title="Golden Legacy Location - Sheikh Zayed Road, Dubai"
            src="https://www.google.com/maps?q=Sheikh+Zayed+Road+Dubai+UAE&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />

          <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 bg-black/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10">
            <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Sheikh Zayed Road HQ</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sheikh+Zayed+Road+Dubai+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-xs md:text-sm font-semibold hover:text-gold/80 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
