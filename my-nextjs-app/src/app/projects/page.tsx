/*
 * File: src/app/projects/page.tsx
 * Purpose: Projects page with showcase and analytics
 */

'use client';

import { useState } from 'react';
import { ProjectShowcase } from '@/components/projects/ProjectShowcase';
import { ProjectAnalytics } from '@/app/projects/ProjectAnalytics';
import { projectData } from '@/data/projectData';
import { LayoutGrid, ChartBar } from 'lucide-react';


type ViewMode = 'showcase' | 'analytics';

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('showcase');

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-blue-100 mb-8">
            Explore my latest projects and technical work
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
              Showcase
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
        {viewMode === 'showcase' ? (
          <ProjectShowcase projects={projectData} />
        ) : (
          <ProjectAnalytics projects={projectData} />
        )}
      </div>
    </div>
  );
}