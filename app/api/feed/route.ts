import { getAllPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export const revalidate = 3600;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.junobizhub.com';

export async function GET() {
  const posts = getAllPosts();

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Juno BizHub Business Insights</title>
    <link>${SITE_URL}</link>
    <description>Expert analysis, regulatory updates, and step-by-step guides for navigating the UAE corporate landscape.</description>
    <language>en-ae</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/feed" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${SITE_URL}/blog/${post.meta.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.meta.slug}</guid>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.meta.excerpt}]]></description>
      <category><![CDATA[${post.meta.category}]]></category>
      <author>${post.meta.author.name}</author>
      <media:content url="${SITE_URL}${post.meta.image}" medium="image"/>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
