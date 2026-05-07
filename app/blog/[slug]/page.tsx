import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import BlogPostClient from '@/components/blog/BlogPostClient';

// This is required for static export
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostClient post={post} />;
}
