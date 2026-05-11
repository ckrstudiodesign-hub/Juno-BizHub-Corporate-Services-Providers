"use client";

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import Narrative from '@/components/about/Narrative';
import Values from '@/components/about/Values';
import AboutVision from '@/components/about/AboutVision';
import AboutStats from '@/components/about/AboutStats';
import Team from '@/components/about/Team';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden">
      <AboutHero />
      <Narrative />
      <Team />
      <Values />
      <AboutVision />
      <AboutStats />
      <AboutCTA />
    </div>
  );
}
