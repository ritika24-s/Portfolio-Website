/*
 * File: src/app/demos/page.tsx
 * Purpose: Page showcasing interactive NLP demos
 */

'use client';

import React, { useState, useEffect } from 'react';
import { SentimentAnalysisDemo } from '@/components/demos/SentimentAnalysisDemo';
import { PageTransition } from '@/components/common/PageTransition';

export default function DemosPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition isLoading={isLoading}>
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Interactive NLP Demos</h1>
            <p className="text-xl text-blue-100">
              Experience real-world applications of my NLP expertise
            </p>
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-12">
            <SentimentAnalysisDemo />
            
            {/* Future demos can be added here */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold">Coming Soon</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    I&apos;m working on additional interactive demos showcasing:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Topic Classification
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Named Entity Recognition
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      Text Summarization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}