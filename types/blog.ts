/**
 * Blog Post Type Definitions
 * Golden Legacy Corporate Services
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt?: string;
  author: string;
  image: string;
  category: string;
  content: string;
}

export interface GeneratedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: string;
}
