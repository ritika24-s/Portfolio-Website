/*
 * File: src/components/blog/BlogList.tsx
 * Purpose: Display a list of blog posts
 */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {post.image && (
              <div className="md:w-1/3 h-48 md:h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 md:w-2/3">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 
                               dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime} min read
                </div>
              </div>
              
              <div className="mt-4">
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No blog posts found.</p>
        </div>
      )}
    </div>
  );
};