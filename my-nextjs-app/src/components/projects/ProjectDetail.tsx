/*
 * File: src/components/projects/ProjectDetail.tsx
 * Purpose: Enhanced project details with technical depth
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, GitBranch, ChevronDown, ChevronUp, 
  Server, Database, Layout, BarChart2, Award, 
  AlertCircle, CheckCircle, BookOpen, 
  Play, PauseCircle, LineChart, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types/projects';

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Helper function to render various tech stacks with appropriate icons
  const renderTechStack = (title: string, icon: React.ReactNode, items?: string[]) => {
    if (!items || items.length === 0) return null;
    
    return (
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </h4>
        <ul className="mt-2 ml-6 space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Project Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-blue-100 mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.slice(0, 5).map((tech, idx) => (
            <span 
              key={idx}
              className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="p-6">
        {/* Project Overview */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
          <button
            onClick={() => toggleSection('overview')}
            className="w-full flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
              Project Overview
            </h3>
            {expandedSection === 'overview' ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSection === 'overview' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 text-gray-600 dark:text-gray-300 space-y-4"
            >
              <p>{project.longDescription}</p>
              
              {project.timeline && (
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Play className="w-4 h-4 mr-1" />
                  <span>Timeline: {project.timeline}</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
        
        {/* Technical Architecture */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
          <button
            onClick={() => toggleSection('architecture')}
            className="w-full flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold flex items-center">
              <Server className="w-5 h-5 mr-2 text-green-500" />
              Technical Architecture
            </h3>
            {expandedSection === 'architecture' ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSection === 'architecture' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {renderTechStack("Frontend Technologies", <Layout className="w-4 h-4 text-blue-500" />, project.techStack?.frontend)}
                  {renderTechStack("Backend Technologies", <Server className="w-4 h-4 text-green-500" />, project.techStack?.backend)}
                </div>
                <div>
                  {renderTechStack("Database Technologies", <Database className="w-4 h-4 text-purple-500" />, project.techStack?.database)}
                  {renderTechStack("ML & AI", <BarChart2 className="w-4 h-4 text-red-500" />, project.techStack?.ml)}
                  {renderTechStack("DevOps & Deployment", <Code className="w-4 h-4 text-gray-500" />, project.techStack?.devops)}
                </div>
              </div>
              
              {project.category === 'nlp' && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">NLP Pipeline Details</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Text preprocessing using custom tokenization and normalization techniques
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Multi-stage processing with parallel execution for improved performance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Domain-specific adaptations for customer support conversations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Optimized model inference with caching for real-time analysis
                      </span>
                    </li>
                  </ul>
                </div>
              )}
              
              {project.category === 'research' && (
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Research Methodology</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Multi-modal data collection and preprocessing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Feature extraction from facial action units using computer vision
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Model training and cross-validation approach
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Evaluation metrics and statistical analysis of results
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </div>
        
        {/* Key Features */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
          <button
            onClick={() => toggleSection('features')}
            className="w-full flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
              Key Features
            </h3>
            {expandedSection === 'features' ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSection === 'features' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        
        {/* Achievements & Metrics */}
        {project.achievements && (
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
            <button
              onClick={() => toggleSection('achievements')}
              className="w-full flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Achievements & Metrics
              </h3>
              {expandedSection === 'achievements' ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedSection === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <ul className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <Award className="w-5 h-5 text-yellow-500 mr-2 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                {project.category === 'nlp' && (
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold flex items-center mb-3">
                      <LineChart className="w-4 h-4 mr-2 text-blue-500" />
                      Performance Metrics
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Sentiment Analysis Accuracy</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Topic Classification F1 Score</span>
                          <span className="font-medium">0.89</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Latency (avg response time)</span>
                          <span className="font-medium">230ms</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                          <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}
        
        {/* Challenges & Solutions */}
        {project.challenges && (
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
            <button
              onClick={() => toggleSection('challenges')}
              className="w-full flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                Challenges & Solutions
              </h3>
              {expandedSection === 'challenges' ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedSection === 'challenges' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 shrink-0" />
                        <span>{challenge}</span>
                      </p>
                      <p className="mt-2 ml-7 text-sm text-gray-600 dark:text-gray-400">
                        {/* This would ideally come from your data, adding sample solution */}
                        {project.category === 'nlp' && idx === 0 && (
                          "Implemented a component-based architecture with isolated services for different NLP tasks."
                        )}
                        {project.category === 'nlp' && idx === 1 && (
                          "Optimized the preprocessing pipeline and implemented async processing with caching."
                        )}
                        {project.category === 'nlp' && idx === 2 && (
                          "Developed custom corpus and fine-tuned models on domain-specific data."
                        )}
                        {project.category === 'research' && idx === 0 && (
                          "Implemented efficient data loading and processing techniques with chunking."
                        )}
                        {project.category === 'research' && idx === 1 && (
                          "Used OpenCV with optimized configurations for faster processing of facial features."
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}
        
        {/* Links */}
        {project.links && Object.keys(project.links).length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 
                         text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <GitBranch className="w-5 h-5 mr-2" />
                GitHub Repository
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 
                         text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            )}
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-500 
                         text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Research Paper
              </a>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 
                         text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Website
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};