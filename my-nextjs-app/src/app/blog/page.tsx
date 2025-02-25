/*
 * File: src/app/blog/page.tsx
 * Purpose: Blog listing page
 */

'use client';

import React, { useState, useEffect } from 'react';
import { BlogList } from '@/components/blog/BlogList';
import { blogPosts } from '@/data/blogData';
import { PageTransition } from '@/components/common/PageTransition';
import { Tag } from 'lucide-react';

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition isLoading={isLoading}>
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Technical Blog</h1>
            <p className="text-xl text-blue-100">
              Insights and experiences from my work in NLP and machine learning
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === null
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog List */}
          <BlogList posts={filteredPosts} />
        </div>
      </div>
    </PageTransition>
  );
}