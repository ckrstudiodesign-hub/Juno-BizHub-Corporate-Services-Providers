import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { constructMetadata } from '@/lib/seo';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

const locationsDirectory = path.join(process.cwd(), 'content', 'locations');

function getLocation(city: string) {
  try {
    const filePath = path.join(locationsDirectory, `${city}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  if (!fs.existsSync(locationsDirectory)) return [];
  const files = fs.readdirSync(locationsDirectory);
  return files.map(file => ({
    city: file.replace(/\.json$/, '')
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const location = getLocation(params.city);
  if (!location) return {};

  return constructMetadata({
    title: `Business Setup in ${location.name} | Company Formation`,
    description: location.description,
    canonicalUrl: `/locations/${params.city}`,
  });
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const location = getLocation(params.city);
  if (!location) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.goldenlegacy.ae';

  const localBusinessSchema = {
    '@type': 'ProfessionalService',
    name: `Golden Legacy Corporate Services - ${location.name}`,
    image: `${siteUrl}/golden-logo.png`,
    url: `${siteUrl}/locations/${params.city}`,
    telephone: '+971556656007',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.name,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude,
    },
  };

  return (
    <>
      <SchemaMarkup type="ProfessionalService" data={localBusinessSchema} />
      <ServicePage
        title={location.title}
        description={location.description}
        advantages={location.advantages}
        advantagesTitle={`Why Choose ${location.name}?`}
        heroImage="/images/mainland.png"
        executiveSummary={{
          summary: `Setting up a business in ${location.name} offers entrepreneurs access to one of the most dynamic markets in the world. With both mainland and free zone options available, ${location.name} provides tailored solutions for every industry.`,
          keyFacts: [
            `Strategic location in ${location.name}`,
            "100% Foreign ownership allowed in most sectors",
            "Tax-efficient corporate structures",
            "Access to global talent"
          ]
        }}
        stepByStep={{
          title: `How to Setup a Company in ${location.name}`,
          steps: [
            { title: "Consultation", description: "Speak with our experts to determine the best legal structure." },
            { title: "Documentation", description: "Prepare and submit the required paperwork to local authorities." },
            { title: "Licensing", description: "Obtain your trade license and relevant approvals." },
            { title: "Visas & Banking", description: "Process investor visas and open a corporate bank account." }
          ]
        }}
      />
    </>
  );
}
