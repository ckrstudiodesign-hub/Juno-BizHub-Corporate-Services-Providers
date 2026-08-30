import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { constructMetadata } from '@/lib/seo';
import SchemaMarkup, { GlobalSchemas } from '@/components/seo/SchemaMarkup';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import NewsletterSubscribe from '@/components/blog/NewsletterSubscribe';

export const metadata = constructMetadata({
  title: 'Blog & Insights | UAE Business Setup',
  description: 'Read the latest insights, news, and expert advice on business setup, company formation, visas, and corporate services in Dubai and the UAE.',
  canonicalUrl: '/blog',
});

// Revalidate this page every hour (3600 seconds) to support scheduled publishing
export const revalidate = 3600;

export default function BlogIndex() {
  const posts = getAllPosts();

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.junobizhub.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.junobizhub.com/blog' },
    ],
  };

  return (
    <div className="bg-[#030303] text-white min-h-screen pb-32 pt-32">
      <SchemaMarkup type="Organization" data={GlobalSchemas.Organization} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
          Business <span className="text-electric-sapphire">Insights</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Expert analysis, regulatory updates, and step-by-step guides for navigating the UAE corporate landscape.
        </p>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.meta.slug} href={`/blog/${post.meta.slug}`} className="group block h-full">
              <article className="bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-electric-sapphire/30 transition-colors h-full flex flex-col shadow-2xl shadow-black/50">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
                  <Image
                    src={post.meta.image}
                    alt={post.meta.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-electric-sapphire text-black text-xs font-black uppercase tracking-widest rounded-full">
                      {post.meta.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-2xl font-black text-white mb-4 group-hover:text-electric-sapphire transition-colors line-clamp-2">
                    {post.meta.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 font-light flex-1">
                    {post.meta.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                        <Image src={post.meta.author.image} alt={post.meta.author.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold">{post.meta.author.name}</p>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest">{post.meta.author.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-500 text-[11px] font-medium tracking-wide">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5"><Calendar size={14} className="text-electric-sapphire" /> {format(parseISO(post.meta.date), 'MMM d, yyyy')}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-electric-sapphire" /> {post.meta.readingTime}</span>
                      </div>
                      <ArrowRight size={16} className="text-electric-sapphire opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-24">
        <NewsletterSubscribe />
      </section>
    </div>
  );
}
