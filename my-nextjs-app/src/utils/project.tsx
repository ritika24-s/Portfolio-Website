import { projectsData } from '@/data/projectData';

// Helper functions


export const getProjectsByCategory = (category: string) => {
    if (category === 'all') return projectsData;
    return projectsData.filter(project => project.category === category);
  };

  
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};
  
export const getProjectById = (id: number) => {
  return projectsData.find(project => project.id === id);
};

export const getProjectsBySkill = (skill: string) => {
  return projectsData.filter(project => 
    project.skills.includes(skill) || project.tech.includes(skill)
  );
};

export const getAllSkills = () => {
  const skillSet = new Set<string>();
  projectsData.forEach(project => {
    project.skills.forEach(skill => skillSet.add(skill));
    project.tech.forEach(tech => skillSet.add(tech));
  });
  return Array.from(skillSet).sort();
};

export const getProjectTimeline = () => {
  return projectsData.map(project => ({
    id: project.id,
    title: project.title,
    timeline: project.timeline
  })).sort((a, b) => (b.timeline || '').localeCompare(a.timeline || ''));
};