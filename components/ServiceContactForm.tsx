"use client";

import React, { useState, useRef } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Landmark, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitToWeb3Forms } from '@/lib/web3forms';

interface ServiceContactFormProps {
  defaultService?: string;
  title?: string;
}

const ServiceContactForm = ({ 
  defaultService = "Mainland Setup",
  title = "Quick Enquiry" 
}: ServiceContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');
  const [service, setService] = useState(defaultService);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    setService(defaultService);
  }, [defaultService]);

  const allServices = [
    "Mainland Company Formation in Dubai",
    "LLC Company Formation in Dubai",
    "Professional License (Main Land / Civil Company)",
    "IFZA Dubai Business Set-up",
    "DMCC Free Zone Company Setup",
    "Sharjah Media City (Shams) Free Zone Business Setup",
    "Fujairah Free Zone Company Formation",
    "Meydan Free Zone",
    "RAKEZ Company Formation",
    "Offshore Company Formation in Dubai",
    "RAK Offshore Company Formation"
  ];

  // ✅ SECURITY: Basic client-side validation
  const validateForm = (): boolean => {
    const name = nameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const phone = phoneRef.current?.value?.trim();

    if (!name || name.length < 2) {
      setValidationError('Please enter a valid name (at least 2 characters)');
      return false;
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      setValidationError('Please enter a valid email address');
      return false;
    }

    if (!phone || phone.length < 7) {
      setValidationError('Please enter a valid phone number');
      return false;
    }

    setValidationError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ SECURITY: Validate before sending
    if (!validateForm()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setValidationError('Form is not configured. Please try again later.');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      const name = nameRef.current?.value || '';
      const email = emailRef.current?.value || '';
      const phone = phoneRef.current?.value || '';
      const msg = messageRef.current?.value || '';

      await submitToWeb3Forms({
        accessKey,
        subject: 'New Service Inquiry - Juno BizHub',
        name,
        email,
        phone,
        message: `New service inquiry.\n\nService: ${service}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`,
        extra: {
          formType: 'service-contact',
          service,
        },
      });

        setStatus('success');
        // Reset form
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        setValidationError('');
        setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setValidationError(error instanceof Error ? error.message : 'Network error. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-[32px] border border-electric-sapphire/20 text-center space-y-4">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
          <CheckCircle2 className="text-green-600" size={28} />
        </div>
        <h4 className="text-xl font-black text-black">Form submitted</h4>
        <p className="text-gray-500 text-sm">Your request was sent successfully.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl relative overflow-hidden group">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-electric-sapphire/5 blur-2xl rounded-full -mr-12 -mt-12 transition-all group-hover:bg-electric-sapphire/10"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="space-y-1">
          <h4 className="text-xl font-black text-black uppercase tracking-tighter">{title}</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Start your {defaultService.split(' ')[0]} setup</p>
        </div>

        {/* ✅ SECURITY: Display validation errors */}
        {validationError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-red-700">{validationError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                ref={nameRef}
                required
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-electric-sapphire/40 focus:ring-1 focus:ring-electric-sapphire/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                ref={emailRef}
                required
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-electric-sapphire/40 focus:ring-1 focus:ring-electric-sapphire/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                ref={phoneRef}
                required
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-electric-sapphire/40 focus:ring-1 focus:ring-electric-sapphire/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-electric-sapphire/40 focus:ring-1 focus:ring-electric-sapphire/20 outline-none transition-all font-medium appearance-none cursor-pointer"
              >
                {!allServices.includes(defaultService) && (
                  <option value={defaultService}>{defaultService}</option>
                )}
                <optgroup label="Mainland">
                  <option value="Mainland Company Formation in Dubai">Mainland Setup</option>
                  <option value="LLC Company Formation in Dubai">LLC Formation</option>
                  <option value="Professional License (Main Land / Civil Company)">Professional License</option>
                </optgroup>
                <optgroup label="Free Zone">
                  <option value="IFZA Dubai Business Set-up">IFZA Dubai</option>
                  <option value="DMCC Free Zone Company Setup">DMCC Dubai</option>
                  <option value="Sharjah Media City (Shams) Free Zone Business Setup">Shams Sharjah</option>
                  <option value="Fujairah Free Zone Company Formation">Fujairah Free Zone</option>
                  <option value="Meydan Free Zone">Meydan Free Zone</option>
                  <option value="RAKEZ Company Formation">RAKEZ RAK</option>
                </optgroup>
                <optgroup label="Offshore">
                  <option value="Offshore Company Formation in Dubai">Offshore Setup</option>
                  <option value="RAK Offshore Company Formation">RAK Offshore</option>
                </optgroup>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
              <textarea 
                ref={messageRef}
                placeholder="Special Requirements..." 
                rows={3}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-electric-sapphire/40 focus:ring-1 focus:ring-electric-sapphire/20 outline-none transition-all font-medium resize-none"
              ></textarea>
            </div>
          </div>

          {/* Hidden field for service context */}
          <input type="hidden" value={defaultService} />

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm font-medium">
              Something went wrong. Please try again.
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="btn-premium w-full py-4 !rounded-xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-electric-sapphire/20 disabled:opacity-50"
          >
            {status === 'sending' ? 'Processing...' : 'Request Consultation'}
            <Send size={14} />
          </button>
        </form>
        
        <p className="text-[9px] text-gray-400 text-center font-bold uppercase tracking-tighter">
          Response within 2 business hours
        </p>
      </div>
    </div>
  );
};

export default ServiceContactForm;
