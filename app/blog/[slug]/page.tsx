import React from 'react';
import { getPostBySlug, getPostSlugs, getRelatedPosts } from '@/lib/blog';
import { constructMetadata } from '@/lib/seo';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock, ChevronLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return constructMetadata({
      title: post.meta.title,
      description: post.meta.excerpt,
      image: post.meta.image,
      canonicalUrl: `/blog/${post.meta.slug}`,
      type: 'article',
      keywords: post.meta.keywords,
    });
  } catch (e) {
    return {};
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.meta, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.junobizhub.com';
  const fullUrl = `${siteUrl}/blog/${post.meta.slug}`;

  // JSON-LD Schemas
  const articleSchema = {
    '@type': 'BlogPosting',
    headline: post.meta.title,
    description: post.meta.excerpt,
    image: `${siteUrl}${post.meta.image}`,
    author: {
      '@type': 'Person',
      name: post.meta.author.name,
      jobTitle: post.meta.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Juno BizHub',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/golden-logo.png`,
      },
    },
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.meta.title, item: fullUrl },
    ],
  };

  return (
    <div className="bg-[#030303] text-white min-h-screen pb-32 pt-28">
      <SchemaMarkup type="BlogPosting" data={articleSchema} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-electric-sapphire text-[10px] font-black tracking-[0.4em] uppercase mb-12 hover:gap-4 transition-all opacity-60 hover:opacity-100">
          <ChevronLeft size={14} /> Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-electric-sapphire/10 text-electric-sapphire border border-electric-sapphire/20 text-xs font-black uppercase tracking-widest rounded-full">
              {post.meta.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
            {post.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image src={post.meta.author.image} alt={post.meta.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">{post.meta.author.name}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">{post.meta.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-electric-sapphire" /> {format(parseISO(post.meta.date), 'MMMM d, yyyy')}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-electric-sapphire" /> {post.meta.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl border border-white/5">
           <Image src={post.meta.image} alt={post.meta.title} fill className="object-cover" priority />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg prose-gold max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-electric-sapphire hover:prose-a:text-white prose-img:rounded-3xl">
          <MDXRemote source={post.content} />
        </div>
        
        {/* Tags */}
        {post.meta.tags && (
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-3">
            {post.meta.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
        )}

      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 pt-20 border-t border-white/5">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-px bg-electric-sapphire"></div>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">Related Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
               <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                <article className="bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-electric-sapphire/30 transition-colors shadow-2xl h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={rp.image} alt={rp.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-electric-sapphire text-[10px] font-black uppercase tracking-widest mb-3 block">{rp.category}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-electric-sapphire transition-colors mb-4 line-clamp-2">{rp.title}</h3>
                    <div className="mt-auto flex items-center gap-2 text-gray-500 text-xs font-medium">
                       <Clock size={12} className="text-electric-sapphire" /> {rp.readingTime}
                    </div>
                  </div>
                </article>
               </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
