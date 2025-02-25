/*
 * File: src/app/journey/page.tsx
 * Purpose: Career journey page with transition storyline
 */

'use client';

import React, { useState, useEffect } from 'react';
import { CareerJourney } from '@/components/journey/CareerJourney';
import { PageTransition } from '@/components/common/PageTransition';

export default function JourneyPage() {
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
            <h1 className="text-4xl font-bold mb-4">My Professional Journey</h1>
            <p className="text-xl text-blue-100">
              From software engineering to specialized NLP expertise
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* Journey Timeline */}
            <CareerJourney />
            
            {/* Journey Narrative */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold">My NLP Specialist Journey</h2>
              </div>
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    My career journey represents a deliberate progression from software engineering 
                    to specialized NLP expertise. Beginning with a strong technical foundation in 
                    computer science, I've consistently sought opportunities to deepen my knowledge 
                    and expertise in natural language processing and machine learning.
                  </p>
                  
                  <h3>From Software Engineering to AI</h3>
                  <p>
                    At Infosys, I established myself as a skilled software engineer, leading complex 
                    projects involving legacy system migration and cloud transformation. During this time, 
                    I became increasingly interested in the potential of machine learning and began 
                    exploring data analysis and predictive modeling in the fintech domain.
                  </p>
                  
                  <h3>Entrepreneurial Experience</h3>
                  <p>
                    My role as CTO and co-founder at Paws and Play provided valuable experience in 
                    building products from the ground up. This entrepreneurial venture taught me to 
                    think about technology from a product perspective—understanding user needs, 
                    creating technical roadmaps, and delivering value through software.
                  </p>
                  
                  <h3>Academic Specialization</h3>
                  <p>
                    To formalize my expertise in AI, I pursued an MSc in Computer Science with a focus 
                    on Intelligent Systems at Trinity College Dublin. My thesis work on predicting 
                    personality traits from facial expressions combined computer vision with machine 
                    learning, giving me hands-on experience with multi-modal analysis and research 
                    methodology.
                  </p>
                  
                  <h3>NLP Engineering Focus</h3>
                  <p>
                    In my current role at Scorebuddy, I've fully transitioned to NLP engineering, 
                    designing and implementing production-ready NLP systems. This position has allowed 
                    me to apply both my software engineering expertise and AI knowledge to build 
                    scalable solutions for real-world language processing challenges.
                  </p>
                  
                  <h3>The Connecting Thread</h3>
                  <p>
                    Throughout this journey, the common thread has been my interest in building 
                    intelligent systems that solve complex problems. From software engineering to 
                    NLP specialization, I've maintained a focus on creating robust, scalable solutions 
                    that deliver tangible value. This combination of software engineering fundamentals 
                    and specialized NLP expertise allows me to bridge the gap between research and 
                    production—translating cutting-edge techniques into practical applications.
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