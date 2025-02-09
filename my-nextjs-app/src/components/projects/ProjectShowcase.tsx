/*
 * File: src/components/projects/ProjectShowcase.tsx
 * Purpose: Enhanced project showcase with consistent UI
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Github, ExternalLink, Code, 
  Server, Database, Globe, Calendar 
} from 'lucide-react';

interface ProjectShowcaseProps {
  projects: any[];
}

export const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'nlp' | 'ml' | 'fullstack'>('all');

  const filterProjects = () => {
    if (selectedTab === 'all') return projects;
    return projects.filter(project => project.category === selectedTab);
  };

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'nlp', label: 'NLP' },
          { id: 'ml', label: 'Machine Learning' },
          { id: 'fullstack', label: 'Full Stack' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id as any)}
            className={`px-6 py-2 rounded-lg transition-all transform hover:-translate-y-0.5 ${
              selectedTab === tab.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filterProjects().map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
          >
            {/* Project Image/Preview */}
            <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Code className="w-12 h-12 text-gray-400" />
                </div>
              )}
              {/* Tech badges overlay */}
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                {project.skills?.slice(0, 3).map((skill: string) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium bg-black/50 text-white backdrop-blur-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>

              {/* Technical Stack */}
              <div className="mb-6 space-y-2">
                {project.technical?.frontend && (
                  <div className="flex items-center text-sm">
                    <Globe className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.technical.frontend.join(', ')}
                    </span>
                  </div>
                )}
                {project.technical?.backend && (
                  <div className="flex items-center text-sm">
                    <Server className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.technical.backend.join(', ')}
                    </span>
                  </div>
                )}
                {project.technical?.database && (
                  <div className="flex items-center text-sm">
                    <Database className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.technical.database.join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Code</span>
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};