import type { Metadata } from 'next';


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.junobizhub.com';

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'book' | 'profile';
  keywords?: string[];
}

/**
 * Enterprise SEO utility for generating dynamic metadata.
 * Ensures consistent Open Graph, Twitter Cards, and indexing rules.
 */
export function constructMetadata({
  title = 'Juno BizHub | Business Setup Dubai & Corporate Services UAE',
  description = 'Juno BizHub helps founders launch in Dubai with mainland, free zone, offshore, banking, VAT, PRO, and corporate advisory services.',
  image = '/golden-logo.png',
  noIndex = false,
  canonicalUrl = '/',
  type = 'website',
  keywords = [
    'Business Setup Consultant in Dubai',
    'Business Setup Company Dubai',
    'Company Formation Dubai',
    'Business Setup UAE',
    'Company Registration Dubai',
    'Trade License Dubai',
    'Golden Visa Dubai',
    'Corporate Services Dubai',
    'Free Zone Company Setup',
    'Mainland Company Formation'
  ],
}: ConstructMetadataProps = {}): Metadata {
  const fullUrl = `${SITE_URL}${canonicalUrl}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: {
      default: title,
      template: '%s | Juno BizHub',
    },
    description,
    keywords,
    authors: [{ name: 'Juno BizHub' }],
    creator: 'Juno BizHub',
    publisher: 'Juno BizHub',
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: type as any,
      locale: 'en_AE',
      url: fullUrl,
      siteName: 'Juno BizHub',
      title,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },
    verification: {
      google: 'VTKU994T1ZGZJd8ZATmJuKsyvuc4UoL6Yx4IRAPiz8I', // Kept from original layout.tsx
    },
  };
}
