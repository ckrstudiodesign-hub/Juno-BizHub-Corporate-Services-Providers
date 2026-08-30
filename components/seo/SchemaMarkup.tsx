import React from 'react';

type SchemaType = 
  | 'Organization'
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'WebSite'
  | 'Service'
  | 'Article'
  | 'BlogPosting'
  | 'BlogPosting'
  | 'FAQPage'
  | 'HowTo'
  | 'BreadcrumbList'
  | 'SubscribeAction';

interface SchemaProps {
  type: SchemaType;
  data: Record<string, any>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.junobizhub.com';

/**
 * Enterprise JSON-LD Structured Data Component
 * Supports multiple schema types for Google AEO/RAG discoverability.
 */
export default function SchemaMarkup({ type, data }: SchemaProps) {
  // Ensure we have the basic context and type
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Pre-defined global schemas for easy reuse
export const GlobalSchemas = {
  Organization: {
    '@type': 'Organization',
    name: 'Juno BizHub',
    url: SITE_URL,
    logo: `${SITE_URL}/golden-logo.png`,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61586592230906',
      'https://www.instagram.com/junobizhub.com/',
      'https://www.linkedin.com/company/juno-bizhub-corporate-service/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971 54 129 0038',
        contactType: 'customer support',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
  },
  LocalBusiness: {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Juno BizHub Corporate Services Providers',
    image: `${SITE_URL}/golden-logo.png`,
    url: SITE_URL,
    telephone: '+971 54 129 0038',
    email: 'info.junobh@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'UAE'],
    priceRange: '$$$',
  },
  WebSite: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Juno BizHub',
    description: 'Premier business setup and corporate services provider in Dubai, UAE.',
  }
};
