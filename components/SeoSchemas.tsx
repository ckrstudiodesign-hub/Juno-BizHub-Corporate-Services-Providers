import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goldenlegacy.ae';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Golden Legacy',
  url: siteUrl,
  logo: `${siteUrl}/golden-logo.png`,
  sameAs: [
    'https://www.facebook.com/profile.php?id=61586592230906',
    'https://www.instagram.com/goldenlegacy.ae/',
    'https://www.linkedin.com/company/golden-legacy-corporate-service/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971556656007',
      contactType: 'customer support',
      areaServed: 'AE',
      availableLanguage: ['English'],
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'Golden Legacy',
  image: `${siteUrl}/golden-logo.png`,
  url: siteUrl,
  telephone: '+971556656007',
  email: 'info@goldenlegacy.ae',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: ['Dubai', 'UAE'],
  priceRange: '$$',
  sameAs: orgSchema.sameAs,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Golden Legacy',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/blog?query={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function SeoSchemas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}