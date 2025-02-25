/*
 * File: src/types/blog.ts
 * Purpose: Type definitions for blog content
 */

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    content: string;
    readTime: number;
    image?: string;
  }
  
  export type BlogPostsList = BlogPost[];