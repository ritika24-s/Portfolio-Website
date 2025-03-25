/*
 * File: src/app/interactive/page.tsx
 * Purpose: Interactive timeline page with proper spacing
 */

'use client';

import { useState } from 'react';
import TimelinePins from '@/components/timeline/TimelinePins';
import { timelineData } from '@/data/timelineData';
import { motion } from 'framer-motion';

export default function InteractivePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Introduction Section */}
      {showIntro && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 max-w-4xl mx-auto my-8 rounded-xl shadow-lg p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-3">Professional & Educational Timeline</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This interactive timeline presents my professional journey, education, and key projects.
                Click on any pin to explore details about that phase of my career.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span>Education</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span>Work Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span>Projects</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowIntro(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>Pro tip:</strong> Click on any timeline pin to reveal detailed information and frequently asked questions about that period. 
              The connecting lines show the progression of my career journey.
            </p>
          </div>
        </motion.div>
      )}

      {/* Timeline Component */}
      <TimelinePins items={timelineData} />

      {/* Show intro button (if hidden) */}
      {!showIntro && (
        <div className="fixed bottom-6 left-6 z-10">
          <button
            onClick={() => setShowIntro(true)}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Show timeline information"
          >
            ?
          </button>
        </div>
      )}
    </div>
  );
}