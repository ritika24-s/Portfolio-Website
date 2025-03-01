/*
 * File: src/components/journey/CareerJourney.tsx
 * Purpose: Visual timeline of professional journey with transitions
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '@/data/journeyData';
import { 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  Calendar, 
  Award, 
  Code
} from 'lucide-react';

export const CareerJourney = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'education':
        return <GraduationCap className="w-6 h-6 text-blue-500" />;
      case 'work':
        return <Briefcase className="w-6 h-6 text-green-500" />;
      case 'entrepreneurship':
        return <Rocket className="w-6 h-6 text-purple-500" />;
      default:
        return <Briefcase className="w-6 h-6 text-gray-500" />;
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'education':
        return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'work':
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      case 'entrepreneurship':
        return 'border-purple-500 bg-purple-50 dark:bg-purple-900/20';
      default:
        return 'border-gray-300 bg-gray-50 dark:bg-gray-700';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Professional Journey</h2>
        <p className="text-blue-100">
          My path from software engineering to specialized NLP expertise
        </p>
      </div>
      
      <div className="p-6">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyData.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Timeline Icon */}
                <div className={`absolute left-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 ${
                  getCategoryColor(step.category).split(' ')[0]
                } bg-white dark:bg-gray-800 z-10`} />
                
                {/* Content Card */}
                <div className="ml-12 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Card Header */}
                    <div 
                      className={`${getCategoryColor(step.category)} p-4 cursor-pointer`}
                      onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {getCategoryIcon(step.category)}
                          <h3 className="ml-2 font-semibold">{step.title}</h3>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{step.period}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {step.organization}
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {expandedStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {step.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {step.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-1" />
                            Skills & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-gray-50 dark:bg-gray-700 p-6 border-t border-gray-200 dark:border-gray-600">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Looking for NLP expertise?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m passionate about building intelligent systems that understand language.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};