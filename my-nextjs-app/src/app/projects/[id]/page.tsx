/*
 * File: src/app/projects/[id]/page.tsx
 * Purpose: Project detail page server component
 */

import React from 'react';
import { Metadata } from 'next';
import { projectsData } from '@/data/projectData';
import ClientProjectDetail from './client-page';

// Define types for the params
interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: ProjectDetailPageProps): Promise<Metadata> {
  const projectId = parseInt(params.id);
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }
  
  return {
    title: project.title,
    description: project.description,
    keywords: project.skills.join(', '),
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article'
    }
  };
}

// Server Component
export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return <ClientProjectDetail params={params} />;
}