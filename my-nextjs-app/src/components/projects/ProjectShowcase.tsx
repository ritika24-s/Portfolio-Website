/*
 * File: src/components/projects/ProjectShowcase.tsx
 * Purpose: Updated project showcase with links to detailed pages
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types/projects';
import { 
  BookOpen, Briefcase, Code, Server, 
  Database, GitBranch, ChevronRight,
  ExternalLink
} from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
}

export const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'research', label: 'Research' },
    { id: 'nlp', label: 'NLP' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Get icon based on project category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'research':
        return <BookOpen className="w-5 h-5 text-purple-500" />;
      case 'nlp':
        return <Server className="w-5 h-5 text-blue-500" />;
      case 'fullstack':
        return <Code className="w-5 h-5 text-green-500" />;
      default:
        return <Briefcase className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getCategoryIcon(project.category)}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.timeline}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 5).map((tech, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                    +{project.tech.length - 5} more
                  </span>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <GitBranch className="w-5 h-5" />
                    </a>
                  )}
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600"
                >
                  <span className="mr-1">View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <p className="text-gray-500 dark:text-gray-400">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
};