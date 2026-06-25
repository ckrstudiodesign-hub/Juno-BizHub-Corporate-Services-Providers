import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
    url?: string;
  };
  image: string;
  readingTime: string;
  keywords?: string[];
  tags?: string[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

/**
 * Ensures the content directory exists.
 */
function ensureDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

/**
 * Retrieves all blog post slugs.
 */
export function getPostSlugs(): string[] {
  ensureDirectory();
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

/**
 * Parses a single MDX file by slug.
 */
export function getPostBySlug(slug: string): BlogPost {
  ensureDirectory();
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const readTime = readingTime(content).text;

  return {
    meta: {
      ...data,
      slug: realSlug,
      readingTime: readTime,
    } as BlogPostMeta,
    content,
  };
}

/**
 * Retrieves all blog posts sorted by date (newest first).
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const now = new Date();
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // Filter out posts scheduled for the future
    .filter((post) => new Date(post.meta.date) <= now)
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
    
  return posts;
}

/**
 * Get related posts based on category or tags.
 */
export function getRelatedPosts(currentPost: BlogPostMeta, limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts();
  
  const related = allPosts
    .filter(post => post.meta.slug !== currentPost.slug) // Exclude current
    .filter(post => 
      post.meta.category === currentPost.category || 
      (post.meta.tags && currentPost.tags && post.meta.tags.some(tag => currentPost.tags?.includes(tag)))
    )
    .slice(0, limit)
    .map(post => post.meta);

  // If we don't have enough related posts, pad with the newest ones
  if (related.length < limit) {
    const more = allPosts
      .filter(post => post.meta.slug !== currentPost.slug && !related.some(r => r.slug === post.meta.slug))
      .slice(0, limit - related.length)
      .map(post => post.meta);
    return [...related, ...more];
  }

  return related;
}
