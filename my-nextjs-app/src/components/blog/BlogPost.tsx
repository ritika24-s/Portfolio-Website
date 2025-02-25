/*
 * File: src/components/blog/BlogPost.tsx
 * Purpose: Display a single blog post with markdown rendering
 */

import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, Tag, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      {post.image && (
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-8">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 
                   dark:hover:text-blue-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to all posts
        </Link>
        
        {/* Header */}
        <header className="mb-8">
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
          
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>
        </header>
        
        {/* Share Button */}
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: post.description,
                  url: window.location.href
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 
                     rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </button>
        </div>
        
        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};