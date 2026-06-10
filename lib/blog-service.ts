import type { BlogPost } from "@/types/blog";
import { blogPosts } from "@/lib/blog-data";

/**
 * Get all blog posts, sorted by date (newest first).
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single blog post by its slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Get all unique blog categories.
 */
export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories).sort();
}

/**
 * Get posts filtered by category.
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get all slugs (useful for generateStaticParams).
 */
export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
