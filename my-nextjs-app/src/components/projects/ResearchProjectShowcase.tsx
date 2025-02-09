/*
 * File: src/components/projects/ResearchProjectShowcase.tsx
 * Purpose: Showcase for your thesis and research work
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Book, Laptop } from 'lucide-react';
import { big5thesis } from '@/data/Research/Big5Thesis';

export const ResearchProjectShowcase = () => {
  const researchDetails = big5thesis;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{researchDetails.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{researchDetails.institute}</p>
          </div>
          <a
            href={researchDetails.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            View Code
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {researchDetails.description}
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {researchDetails.keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              >
                <Icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Laptop className="w-5 h-5 mr-2 text-blue-500" />
              Technical Architecture
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchDetails.technicalDetails.architecture.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-500" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {researchDetails.technicalDetails.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-purple-500" />
              Research Methodology
            </h3>
            <ul className="space-y-2">
              {researchDetails.technicalDetails.methodology.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};