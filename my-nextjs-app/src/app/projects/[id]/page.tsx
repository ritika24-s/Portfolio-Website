'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { PageTransition } from '@/components/common/PageTransition';
import { projectsData } from '@/data/projectData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  // Get project by ID
  const projectId = params?.id ? parseInt(params.id as string) : 0;
  const project = projectsData.find(p => p.id === projectId);
  
  // Similar projects (same category, excluding current project)
  const similarProjects = projectsData
    .filter(p => p.category === project?.category && p.id !== projectId)
    .slice(0, 2);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Redirect if project not found
  useEffect(() => {
    if (!isLoading && !project) {
      router.push('/projects');
    }
  }, [isLoading, project, router]);

  if (!project) {
    return null; // Will redirect in the useEffect
  }

  return (
    <PageTransition isLoading={isLoading}>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          {/* Project Details */}
          <ProjectDetail project={project} />
          
          {/* Similar Projects */}
          {similarProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Similar Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {similarProjects.map((similarProject) => (
                  <div
                    key={similarProject.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
                      {similarProject.images && similarProject.images.length > 0 ? (
                        <img
                          src={similarProject.images[0]}
                          alt={similarProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{similarProject.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {similarProject.description}
                      </p>
                      <Link
                        href={`/projects/${similarProject.id}`}
                        className="inline-flex items-center text-blue-500 hover:text-blue-600"
                      >
                        View Project <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}