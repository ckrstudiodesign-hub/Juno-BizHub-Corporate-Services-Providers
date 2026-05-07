import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';

export const metadata: Metadata = {
  title: 'Business Setup Dubai & Corporate Services UAE',
  description:
    'Golden Legacy helps founders launch in Dubai with mainland, free zone, offshore, banking, VAT, PRO, and corporate advisory services.',
  alternates: {
    canonical: '/',
  },
};

const About = dynamic(() => import('@/components/home/About'));
const CoreServices = dynamic(() => import('@/components/home/CoreServices'));
const VisionMission = dynamic(() => import('@/components/home/VisionMission'));
const Stats = dynamic(() => import('@/components/home/Stats'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));
const Team = dynamic(() => import('@/components/about/Team'));
const ContactBanner = dynamic(() => import('@/components/home/ContactBanner'));

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden">
      <Hero />
      <TrustBadges />
      <About />
      <Team />
      <CoreServices />
      <VisionMission />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactBanner />
    </div>
  );
}
