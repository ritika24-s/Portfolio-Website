'use client';

import React, { useState, useEffect } from 'react';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { getProjectById } from '@/utils/project';
import { projectsData } from '@/data/projectData';
import { PageTransition } from '@/components/common/PageTransition';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Tag } from 'lucide-react';

interface ClientProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ClientProjectDetail({ params }: ClientProjectDetailProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const router = useRouter();
  
  const projectId = parseInt(params.id);
  const project = getProjectById(projectId);

  useEffect(() => {
    // Set up loading state
    const timer = setTimeout(() => setIsLoading(false), 500);
    
    // Get related projects with similar skills or technologies
    if (project) {
      const related = projectsData
        .filter(p => p.id !== project.id)
        .filter(p => {
          // Find projects with at least one common skill or technology
          const projectSkills = new Set([...project.skills, ...project.tech]);
          const hasCommonSkill = p.skills.some(skill => projectSkills.has(skill));
          const hasCommonTech = p.tech.some(tech => projectSkills.has(tech));
          return hasCommonSkill || hasCommonTech;
        })
        .slice(0, 2); // Show at most 2 related projects
      
      setRelatedProjects(related);
    }
    
    return () => clearTimeout(timer);
  }, [project]);

  // Redirect to projects page if project not found
  useEffect(() => {
    if (!isLoading && !project) {
      router.push('/projects');
    }
  }, [isLoading, project, router]);

  if (!project) {
    return null;
  }

  return (
    <PageTransition isLoading={isLoading}>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back link */}
          <div className="mb-6">
            <Link 
              href="/projects"
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to projects
            </Link>
          </div>
          
          {/* Main project details */}
          <ProjectDetail project={project} />
          
          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map(relatedProject => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="block">
                    <div className="h-full bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold mb-2">{relatedProject.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {relatedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProject.tech.slice(0, 3).map((tech: string) => (
                          <span 
                            key={tech}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 
                                      dark:bg-gray-600 text-xs rounded-full"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}