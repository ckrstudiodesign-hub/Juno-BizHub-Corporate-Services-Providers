"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Raj Kumar",
      location: "Mumbai, India",
      rating: 5,
      review: "Seamless company setup in Dubai. Their expertise made the entire process hassle-free!"
    },
    {
      name: "Sarah Anderson",
      location: "London, UK",
      rating: 5,
      review: "Outstanding banking solutions and corporate advisory. Highly professional team."
    },
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      rating: 5,
      review: "Best free zone setup experience. They handled everything perfectly from start to finish."
    },
    {
      name: "Ahmed Al-Mansouri",
      location: "Dubai, UAE",
      rating: 4.5,
      review: "Excellent PRO services and visa assistance. Very responsive and knowledgeable."
    },
    {
      name: "Lisa Chen",
      location: "Singapore",
      rating: 5,
      review: "Professional offshore setup. Their guidance on tax planning was invaluable."
    },
    {
      name: "Vikram Patel",
      location: "Bangalore, India",
      rating: 5,
      review: "Amazing accounting and bookkeeping services. Highly recommended for startups!"
    },
    {
      name: "Marcus Johnson",
      location: "New York, USA",
      rating: 5,
      review: "Elite business formation team. Best decision for our international expansion."
    },
    {
      name: "Neha Gupta",
      location: "Pune, India",
      rating: 5,
      review: "Smooth VAT consultancy experience. They explained everything clearly and professionally."
    },
    {
      name: "Sophie Laurent",
      location: "Paris, France",
      rating: 4.5,
      review: "Great corporate advisory services. Helped us navigate UAE regulations efficiently."
    },
    {
      name: "Arjun Singh",
      location: "Hyderabad, India",
      rating: 5,
      review: "Outstanding support throughout our business setup journey. Truly professional!"
    }
  ];

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < Math.floor(rating) ? 'fill-electric-sapphire text-electric-sapphire' : i < rating ? 'fill-electric-sapphire text-electric-sapphire opacity-50' : 'text-gray-400'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#030303]">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric-sapphire/5 blur-[120px] rounded-full -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-sapphire/5 blur-[120px] rounded-full -mr-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs"
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
            Trusted by <span className="text-electric-sapphire">Global Entrepreneurs</span>
          </h2>
        </div>

        {/* Reviews Container */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Rotating Review Card - Apple Glassy Effect */}
          <div className="relative h-[280px] md:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-8 md:p-10 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-electric-sapphire/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Review Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-lg md:text-xl font-black text-white">
                        {reviews[currentIndex].name}
                      </h4>
                      <p className="text-xs text-electric-sapphire font-bold uppercase tracking-widest">
                        {reviews[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div>
                    {renderStars(reviews[currentIndex].rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-200 text-sm md:text-base font-light leading-relaxed italic">
                    "{reviews[currentIndex].review}"
                  </p>
                </div>

                {/* Indicator Dots */}
                <div className="flex gap-2 pt-4">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex ? 'w-8 bg-electric-sapphire' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Google Reviews & Stats */}
          <div className="space-y-8">
            {/* Google Reviews Card */}
            <div className="p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="flex items-start gap-6">
                {/* Google Logo & Rating */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-sapphire to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-black">G</span>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-xl md:text-2xl font-black text-white">Google Reviews</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Juno BizHub Consultancy</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${i < 4 ? 'fill-electric-sapphire text-electric-sapphire' : i < 4.9 ? 'fill-electric-sapphire text-electric-sapphire opacity-50' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-black text-white">4.9</span>
                  </div>

                  <p className="text-sm text-gray-300 font-medium">Based on 200+ verified reviews</p>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-black text-electric-sapphire">500+</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Happy Clients</p>
              </div>
              <div className="p-6 rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-black text-electric-sapphire">8+</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
