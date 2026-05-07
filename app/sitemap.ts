import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { teamMembers } from '@/lib/team-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goldenlegacy.ae';

// Static routes
const staticRoutes = [
  { route: '/', priority: 1, changeFrequency: 'weekly' as const },
  { route: '/about-us', priority: 0.8, changeFrequency: 'monthly' as const },
  { route: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
  { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { route: '/mainland-company-formation-in-dubai', priority: 0.7, changeFrequency: 'monthly' as const },
  { route: '/dubai-free-zone-company-overview', priority: 0.7, changeFrequency: 'monthly' as const },
  { route: '/offshore-company-formation-in-dubai', priority: 0.7, changeFrequency: 'monthly' as const },
  { route: '/bank-account-opening-dubai', priority: 0.7, changeFrequency: 'monthly' as const },
  { route: '/vat-consultancy-uae', priority: 0.7, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticSitemapEntries = staticRoutes.map((item) => ({
    url: `${siteUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const teamRoutes = teamMembers.map((member) => ({
    url: `${siteUrl}/team/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));

  return [...staticSitemapEntries, ...blogRoutes, ...teamRoutes];
}