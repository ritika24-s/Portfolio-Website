/*
 * File: src/components/projects/FeaturedProject.tsx
 * Purpose: Showcase component for the sentiment analyzer project
 * Author: Ritika Sharma
 * Date: 06/02/2025
 * Key Features:
    1. Gradient header
        Feature cards
        Tech stack tags
        Interactive elements
        Responsive design
    2. Content Sections:
        Project overview
        Key features
        Technical stack
        Links to source/demo
    3. Integration:
        Placed above other projects
        Consistent styling
        Smooth animations
        Responsive layout
 */


import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  MessageSquare, 
  Github, 
  ExternalLink, 
  BarChart,
  Code,
  Bot
} from 'lucide-react';

export const FeaturedProject = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      >
        {/* Project Header */}
        <div className="bg-gradient-to-r from-teal-500 to-purple-600 p-8">
          <div className="flex items-center space-x-3">
            <Bot className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold text-white">Sentiment Analyzer</h2>
          </div>
          <p className="mt-2 text-blue-100">
            NLP-powered sentiment analysis tool with real-time processing capabilities
          </p>
        </div>

        <div className="p-8">
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
              <MessageSquare className="w-6 h-6 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">Text Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time sentiment analysis of text with detailed emotional scoring
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
              <Cpu className="w-6 h-6 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-2">ML Model</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced NLP models for accurate sentiment classification
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
              <BarChart className="w-6 h-6 text-green-500 mb-3" />
              <h3 className="font-semibold mb-2">Visualization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Interactive charts and metrics for sentiment insights
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'Flask', 'NLTK', 'scikit-learn', 'React',
                  'Tailwind CSS', 'Node.js', 'Express'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {[
                  'Real-time sentiment analysis',
                  'Multiple sentiment classification categories',
                  'Interactive visualization dashboard',
                  'API endpoints for integration',
                  'Batch processing capabilities',
                  'Detailed sentiment metrics and scoring'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Links */}
            <div className="flex space-x-4 pt-6">
              <a
                href="https://github.com/yourusername/sentiment-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};