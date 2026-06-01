"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.45, type: 'spring' }}
      className="hidden md:flex fixed bottom-20 right-4 md:bottom-4 md:right-3 z-[200] items-end gap-2 md:gap-3"
    >
      <motion.div
        initial={{ width: 0, opacity: 0, x: 10 }}
        animate={{ width: 'auto', opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
        className="hidden md:block overflow-hidden"
      >
        <motion.div
          className="whitespace-nowrap rounded-full bg-black/80 border border-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.span
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ delay: 0.65, duration: 1.1, ease: 'easeInOut' }}
            className="inline-block"
          >
            Say Hi in WhatsApp 👋
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.a
        href="https://wa.me/971556656007"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
        className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_0_24px_rgba(37,211,102,0.35)] hover:scale-110 hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="currentColor" 
          className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppFloat;
