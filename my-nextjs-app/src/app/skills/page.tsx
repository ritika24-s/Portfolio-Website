/*
 * File: src/app/skills/page.tsx
 * Purpose: Skills showcase page
 */

'use client';

import React, { useState, useEffect } from 'react';
import { SkillsVisualization } from '@/components/skills/SkillsVisualization';
import { PageTransition } from '@/components/common/PageTransition';

export default function SkillsPage() {
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
            <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
            <p className="text-xl text-blue-100">
              A comprehensive overview of my technical capabilities
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            <SkillsVisualization />
            
            {/* Skills Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold">Skills Overview</h2>
              </div>
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    My technical expertise is centered around Natural Language Processing (NLP) and 
                    machine learning, with strong foundations in software engineering. I specialize in 
                    building production-ready NLP systems that deliver real business value.
                  </p>
                  
                  <h3>NLP Expertise</h3>
                  <p>
                    I&apos;ve developed and deployed numerous NLP solutions, including sentiment analysis, 
                    topic classification, named entity recognition, and automated QA systems. My 
                    experience spans the full NLP pipeline—from text preprocessing and feature 
                    engineering to model development and deployment.
                  </p>
                  
                  <h3>Software Engineering</h3>
                  <p>
                    With over 6 years of professional experience, I&apos;ve built everything from 
                    microservices architectures to full-stack applications. I emphasize clean 
                    code, comprehensive testing, and scalable design in all my work.
                  </p>
                  
                  <h3>Machine Learning</h3>
                  <p>
                    My expertise includes developing machine learning pipelines, implementing 
                    deep learning models, and optimizing for production environments. I&apos;ve worked 
                    with various frameworks and libraries to build robust ML solutions.
                  </p>
                  
                  <h3>Research Experience</h3>
                  <p>
                    My MSc thesis on predicting personality traits from facial expressions 
                    combined computer vision with machine learning, demonstrating my ability 
                    to apply interdisciplinary approaches to complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}