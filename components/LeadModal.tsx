"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { submitToWeb3Forms } from '@/lib/web3forms';

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>('');
  const pathname = usePathname();

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Show modal only once per browser tab session (persists across refreshes)
  useEffect(() => {
    try {
      const shown = sessionStorage.getItem('leadModalShown');
      if (!shown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          try { sessionStorage.setItem('leadModalShown', '1'); } catch {}
        }, 1000); // 1 second delay feels natural

        return () => clearTimeout(timer);
      }
    } catch (e) {
      // If sessionStorage is unavailable, fall back to showing once per navigation
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
    // only run on pathname change
  }, [pathname]);

  // ✅ SECURITY: Basic client-side validation
  const validateForm = (): boolean => {
    const name = nameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const phone = phoneRef.current?.value?.trim();

    if (!name || name.length < 2) {
      setError('Please enter a valid name');
      return false;
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!phone || phone.length < 7) {
      setError('Please enter a valid phone number');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ SECURITY: Validate before sending
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setError('Form is not configured. Please try again later.');
        return;
      }

      const name = nameRef.current?.value || '';
      const email = emailRef.current?.value || '';
      const phone = phoneRef.current?.value || '';

      await submitToWeb3Forms({
        accessKey,
        subject: 'New Lead - Juno BizHub (Modal)',
        name,
        email,
        phone,
        message: `New lead submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
        extra: {
          formType: 'lead-modal',
        },
      });

        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
          if (nameRef.current) nameRef.current.value = '';
          if (phoneRef.current) phoneRef.current.value = '';
          if (emailRef.current) emailRef.current.value = '';
          setError('');
        }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#0a0a0a] border border-electric-sapphire/20 rounded-[2rem] shadow-[0_0_50px_rgba(84,101,255,0.1)] overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-sapphire/10 blur-[50px] rounded-full pointer-events-none -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-sapphire/5 blur-[50px] rounded-full pointer-events-none -ml-10 -mb-10" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8 relative z-10">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-electric-sapphire/15 border border-electric-sapphire/30 flex items-center justify-center">
                    <CheckCircle2 className="text-electric-sapphire" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Form submitted</h3>
                  <p className="text-gray-400 text-sm">Your details have been sent successfully.</p>
                </div>
              ) : (
              <>
              <div className="text-center space-y-2 mb-8">
                <span className="text-electric-sapphire text-xs font-black uppercase tracking-[0.2em]">Welcome to Juno BizHub</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Start Your Journey</h2>
                <p className="text-gray-400 text-sm font-light">Enter your details to receive a personalized consultation.</p>
              </div>

              {/* ✅ SECURITY: Display validation errors */}
              {error && (
                <div className="mb-4 bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-start gap-2">
                  <div className="text-red-400 mt-0.5">⚠️</div>
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-electric-sapphire transition-colors" size={18} />
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-sapphire/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-electric-sapphire transition-colors" size={18} />
                    <input
                      ref={phoneRef}
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-sapphire/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-electric-sapphire transition-colors" size={18} />
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-sapphire/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-4 bg-electric-sapphire hover:bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_10px_20px_rgba(84,101,255,0.2)] hover:shadow-none hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Get Started'} {!isSubmitting && <Send size={16} />}
                </button>
              </form>
              </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
