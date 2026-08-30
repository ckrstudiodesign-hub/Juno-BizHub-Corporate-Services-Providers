"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Tech Startup Dubai',
    text: 'Juno BizHub transformed our business setup process. What we thought would take months was completed in weeks. Their transparency and expertise are unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Ahmed Al-Mansouri',
    role: 'CEO, Trading Company',
    text: 'The banking support they provided was exceptional. They navigated complex corporate account setups with ease and saved us thousands in unnecessary fees.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Maria Garcia',
    role: 'Entrepreneur, Fashion Retail',
    text: 'I was overwhelmed with the setup process until I met the team. Their personalized guidance made everything clear and simple. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'James Chen',
    role: 'Director, Import/Export Business',
    text: 'The market insights they shared were invaluable. Their 20 years of experience showed in every recommendation they made for our business structure.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Founder, Consulting Firm',
    text: 'Zero hidden fees, complete transparency. They handled our PRO services flawlessly. This is how professional services should be delivered.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'David Miller',
    role: 'Investment Manager',
    text: 'Setting up our offshore structure was seamless. Their government connections opened doors that would have taken us months to find.',
    image: 'https://images.unsplash.com/photo-1519085360771-9852d59a8e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner, Services',
    text: 'The fast-tracking service actually works. Our company was live and banking within record time. Best investment we made for our business.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Marcus Thompson',
    role: 'Partner, Law Firm',
    text: 'Their legal expertise combined with banking knowledge is rare. They provide solutions, not just documentation. Outstanding service.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Leila Hassan',
    role: 'CEO, Manufacturing',
    text: 'The VAT consultancy was perfectly aligned with our business needs. They understood our operations and provided tailored solutions.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    name: 'Robert Anderson',
    role: 'Founder, Digital Agency',
    text: 'From start to finish, professionalism and expertise. The team went above and beyond. Our company is thriving thanks to their setup strategy.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5
  }
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let animationFrameId: number;
    const scrollSpeed = 0.8; // pixels per frame
    const pauseTime = 2000; // pause 2 seconds at end before restart
    let isPaused = false;
    let pauseStartTime = 0;

    const autoScroll = () => {
      if (isPaused) {
        const currentTime = Date.now();
        if (currentTime - pauseStartTime > pauseTime) {
          isPaused = false;
          scrollAmount = 0;
        }
      } else {
        scrollAmount += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollAmount >= maxScroll) {
          isPaused = true;
          pauseStartTime = Date.now();
          scrollAmount = maxScroll;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
      
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-sapphire/5 blur-[150px] rounded-full opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12">
        <div className="text-center space-y-4">
          <span className="text-electric-sapphire font-black tracking-[0.4em] uppercase text-xs block">CLIENT STORIES</span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase">
            What <span className="text-electric-sapphire">Founders Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Real experiences from entrepreneurs who transformed their vision into thriving UAE businesses.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4"
          style={{ 
            scrollBehavior: 'auto',
            willChange: 'scroll-position'
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-96 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-electric-sapphire/30">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-electric-sapphire text-electric-sapphire" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed font-light mb-8 text-sm line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
