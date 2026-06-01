import React from 'react';
import { teamMembers } from '@/lib/team-data';
import TeamMemberClient from '@/components/about/TeamMemberClient';
import Link from 'next/link';

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <Link href="/about-us" className="text-gold hover:underline">Return to About Us</Link>
        </div>
      </div>
    );
  }

  return <TeamMemberClient member={member} />;
}
