import { projectsData } from "@/data/projectData";

export type ProjectCategory = 'research' | 'nlp' | 'fullstack';

export interface ProjectLink {
  github?: string;
  demo?: string;
  paper?: string;
  website?: string;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  ml?: string[];
  devops?: string[];
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  tech: string[];
  techStack?: TechStack;
  links?: ProjectLink;
  images?: string[];
  featured: boolean;
  timeline?: string;
  achievements?: string[];
  challenges?: string[];
  skills: string[];
  features: string[];

}
  
export interface ProjectShowcaseProps {
  projects: ProjectDetails[];
}

export interface TechUsage {
  name: string;
  count: number;
}

  
export interface YearlyProjects {
  year: string;
  count: number;
}


export interface ProjectAnalyticsProps {
  projects: typeof projectsData;
}