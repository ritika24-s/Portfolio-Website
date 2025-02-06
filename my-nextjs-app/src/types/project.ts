import { projectData } from "@/data/projectData";

export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  skills: string[];
  images: string[];

  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
  technical: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
  };
  features: string[];
  challenges: string[];
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
  projects: typeof projectData;
}