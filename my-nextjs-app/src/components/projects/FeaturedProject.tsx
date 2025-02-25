/*
 * File: src/components/projects/FeaturedProject.tsx
 * Purpose: Enhanced featured research project showcase
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Code, GitBranch, Book, 
  ChartBar, Laptop, FileText, MessageSquare 
} from 'lucide-react';
import { Project } from '@/types/projects';

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-8 h-8" />
          <h2 className="text-2xl font-bold">{project.title}</h2>
        </div>
        <p className="text-blue-100 text-lg max-w-3xl">
          {project.description}
        </p>
      </div>

      <div className="p-8">
        {/* Technical Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <Brain className="w-6 h-6 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Research Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Combining computer vision and ML to predict personality traits from facial expressions
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
            <ChartBar className="w-6 h-6 text-purple-500 mb-3" />
            <h3 className="font-semibold mb-2">Methodology</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Multi-modal analysis using facial action units and behavioral patterns
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
            <Laptop className="w-6 h-6 text-green-500 mb-3" />
            <h3 className="font-semibold mb-2">Implementation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Python-based ML pipeline with computer vision integration
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Research Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="w-5 h-5 mr-2 text-blue-500" />
                Research Details
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 
                                   text-purple-600 dark:text-purple-400 flex items-center 
                                   justify-center mr-2 mt-0.5 text-sm font-medium">
                      {index + 1}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {/* Technical Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-green-500" />
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.tech.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 
                             dark:text-gray-300 text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <ChartBar className="w-5 h-5 mr-2 text-blue-500" />
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {project.achievements?.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 mt-2" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Challenges */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-red-500" />
                Research Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges?.map((challenge, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 mt-2" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        {project.links && (
          <div className="mt-8 pt-8 border-t dark:border-gray-700">
            <div className="flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 
                           rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <GitBranch className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 
                           text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 
                           dark:hover:bg-blue-900/50 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Read Paper
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};