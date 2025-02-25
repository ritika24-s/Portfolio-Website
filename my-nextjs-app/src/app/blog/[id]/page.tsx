/*
 * File: src/app/blog/[id]/page.tsx
 * Purpose: Dynamic page for individual blog posts
 */

'use client';

import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/components/blog/BlogPost';
import { getBlogPostById } from '@/data/blogData';
import { PageTransition } from '@/components/common/PageTransition';
import { useRouter } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const post = getBlogPostById(params.id);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Redirect to blog listing if post not found
  useEffect(() => {
    if (!isLoading && !post) {
      router.push('/blog');
    }
  }, [isLoading, post, router]);

  if (!post) {
    return null;
  }

  return (
    <PageTransition isLoading={isLoading}>
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogPost post={post} />
        </div>
      </div>
    </PageTransition>
  );
}