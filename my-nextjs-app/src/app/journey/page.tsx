/*
 * File: src/app/journey/page.tsx
 * Purpose: Career journey page with transition storyline
 */

'use client';

import React, { useState, useEffect } from 'react';
import { CareerJourney } from '@/components/journey/CareerJourney';
import { PageTransition } from '@/components/common/PageTransition';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronDown, ChevronUp, Code as CodeIcon } from 'lucide-react';

export default function JourneyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
                <h2 className="text-xl font-semibold">My Path to NLP Specialization</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <button 
                      onClick={() => toggleSection('foundation')}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-semibold flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                        Educational Foundation
                      </h3>
                      {expandedSection === 'foundation' ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    
                    {expandedSection === 'foundation' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-gray-600 dark:text-gray-300"
                      >
                        <p className="mb-4">
                          My journey began with a strong foundation in Computer Science and Engineering 
                          at Mody University, where I developed core programming skills and a fascination 
                          with AI. This foundation proved invaluable throughout my career.
                        </p>
                        <p>
                          Later, I pursued specialized education at Trinity College Dublin, focusing on 
                          Intelligent Systems. My thesis work on predicting personality traits from facial 
                          expressions gave me hands-on experience in applying machine learning to complex 
                          real-world problems.
                        </p>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <button 
                      onClick={() => toggleSection('industry')}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-semibold flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-green-500" />
                        Industry Experience
                      </h3>
                      {expandedSection === 'industry' ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    
                    {expandedSection === 'industry' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-gray-600 dark:text-gray-300"
                      >
                        <p className="mb-4">
                          At Infosys, I developed strong software engineering skills while working on 
                          complex enterprise systems. This experience taught me how to build robust, 
                          scalable solutions—a crucial skill for developing production-grade NLP systems 
                          later in my career.
                        </p>
                        <p className="mb-4">
                          I also gained entrepreneurial experience as CTO and co-founder of Paws and Play, 
                          where I had to think about technology from a product perspective. This taught me 
                          to focus on delivering value through software and understanding user needs.
                        </p>
                        <p>
                          In my current role at Scorebuddy, I&apos;ve fully transitioned to NLP engineering, 
                          designing and implementing systems that analyze customer-agent interactions 
                          for quality assurance. This position perfectly combines my software engineering 
                          expertise with my passion for NLP.
                        </p>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <button 
                      onClick={() => toggleSection('skills')}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-semibold flex items-center">
                        <CodeIcon className="w-5 h-5 mr-2 text-purple-500" />
                        Key Skills Development
                      </h3>
                      {expandedSection === 'skills' ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    
                    {expandedSection === 'skills' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-gray-600 dark:text-gray-300"
                      >
                        <p className="mb-4">
                          Throughout my journey, I&apos;ve deliberately built a complementary set of skills that 
                          enable me to excel in NLP engineering:
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                            <span>
                              <strong>Software Engineering:</strong> Building scalable, maintainable systems
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                            <span>
                              <strong>Machine Learning:</strong> Developing ML pipelines and models
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                            <span>
                              <strong>NLP Techniques:</strong> Implementing text processing, sentiment analysis, and more
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                            <span>
                              <strong>Research Methodology:</strong> Applying academic rigor to real-world problems
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                            <span>
                              <strong>Product Thinking:</strong> Focusing on creating value for users
                            </span>
                          </li>
                        </ul>
                        <p>
                          This unique combination allows me to bridge the gap between research and 
                          production—translating cutting-edge NLP techniques into practical applications 
                          that deliver real value.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Career Milestones */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold">Key Career Milestones</h2>
              </div>
              <div className="p-6">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="space-y-8">
                    <div className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-medium mb-2">2017</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Graduated with BTech in Computer Science and entered the tech industry at Infosys
                      </p>
                    </div>
                    <div className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-medium mb-2">2018 - 2019</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Co-founded Paws and Play, gaining valuable entrepreneurial experience
                      </p>
                    </div>
                    <div className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-medium mb-2">2021 - 2022</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Completed MSc in Computer Science at Trinity College Dublin with focus on Intelligent Systems
                      </p>
                    </div>
                    <div className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-medium mb-2">2022 - Present</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Working as an NLP Engineer at Scorebuddy, building AI-driven SaaS applications for quality assurance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}