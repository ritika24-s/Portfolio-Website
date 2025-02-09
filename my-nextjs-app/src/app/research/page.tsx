/*
 * File: src/app/research/page.tsx
 * Purpose: Research page route
 */

'use client';

import { ResearchProjectShowcase } from '@/components/projects/ResearchProjectShowcase';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Research Work</h1>
          <p className="text-xl text-blue-100">
            Exploring NLP and Computer Vision at Trinity College Dublin
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ResearchProjectShowcase />
      </div>
    </div>
  );
}