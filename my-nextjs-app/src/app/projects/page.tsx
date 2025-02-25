/*
 * File: src/app/projects/page.tsx
 * Purpose: Projects page with Featured tab
 */

'use client';

import { useState } from 'react';
import { ProjectShowcase } from '@/components/projects/ProjectShowcase';
import { ProjectAnalytics } from '@/components/projects/ProjectAnalytics';
import { FeaturedProject } from '@/components/projects/FeaturedProject';
import { projectsData } from '@/data/projectData';
import { PageTransition } from '@/components/common/PageTransition';
import { LayoutGrid, ChartBar, Star } from 'lucide-react';


type ViewMode = 'showcase' | 'analytics' | 'featured';

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('showcase');

  const featuredProject = projectsData.find(p => p.category === 'research' && p.featured);

  return (
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-blue-100 mb-8">
              Exploring NLP, Machine Learning, and Software Development
            </p>

            {/* View Toggle */}
            <div className="flex space-x-4">
              <button
                onClick={() => setViewMode('showcase')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'showcase'
                    ? 'bg-white text-blue-600'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <LayoutGrid className="w-5 h-5 mr-2" />
                Projects Showcase
              </button>
              <button
                onClick={() => setViewMode('featured')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'featured'
                    ? 'bg-white text-blue-600'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <Star className="w-5 h-5 mr-2" />
                Featured Research
              </button>
              <button
                onClick={() => setViewMode('analytics')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'analytics'
                    ? 'bg-white text-blue-600'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <ChartBar className="w-5 h-5 mr-2" />
                Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {viewMode === 'showcase' && (
            <ProjectShowcase projects={projectsData} />
          )}
          {viewMode === 'featured' && featuredProject && (
            <FeaturedProject project={featuredProject} />
          )}
          {viewMode === 'analytics' && (
            <ProjectAnalytics projects={projectsData} />
          )}
        </div>
      </div>
  );
}