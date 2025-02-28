/*
 * File: src/app/projects/[id]/page.tsx
 * Purpose: Project detail page component
 */

'use client';

import React, { useState, useEffect } from 'react';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { getProjectById } from '@/utils/project';
import { PageTransition } from '@/components/common/PageTransition';
import { useRouter } from 'next/navigation';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const projectId = parseInt(params.id);
  const project = getProjectById(projectId);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
          <ProjectDetail project={project} />
        </div>
      </div>
    </PageTransition>
  );
}