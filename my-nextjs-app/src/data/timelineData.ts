// File: src/data/timelineData.ts
// Purpose: Timeline data and utility functions
// Used by: All timeline components

import { TimelineData, TimelineItem } from '@/types/timeline';

export const timelineData: TimelineData = [
  {
    id: 1,
    title: "Bachelor's Degree",
    date: "2018-2022",
    description: "Computer Science at Example University",
    type: "education",
    location: "New York, USA",
    skills: ["Java", "Python", "Data Structures", "Algorithms"],
    questions: [
      {
        question: "What were your favorite courses?",
        answer: "Data Structures, Algorithms, and Web Development"
      },
      {
        question: "Most challenging project?",
        answer: "Building a distributed system for the final year project"
      },
      {
        question: "Key achievements?",
        answer: "Dean's List all semesters, Led the Programming Club"
      }
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    date: "Summer 2021",
    description: "Worked on the frontend team developing new features",
    type: "work",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js"],
    links: {
      website: "https://company.example.com",
    },
    questions: [
      {
        question: "What was your main project?",
        answer: "Developed a new dashboard interface using React and TypeScript"
      },
      {
        question: "What did you learn?",
        answer: "Gained experience in agile development and team collaboration"
      }
    ]
  },
  {
    id: 3,
    title: "Personal Portfolio Project",
    date: "2023",
    description: "Developed a personal portfolio website using Next.js",
    type: "project",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    links: {
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com"
    },
    questions: [
      {
        question: "Why did you choose Next.js?",
        answer: "For its excellent SEO capabilities and server-side rendering features"
      },
      {
        question: "What was the biggest challenge?",
        answer: "Implementing the interactive timeline feature with smooth animations"
      }
    ]
  }
];

// export specific timeline filters or utilities
export const getTimelineItemsByType = (type: 'education' | 'work' | 'project') => {
  return timelineData.filter(item => item.type === type);
};

export const getTimelineItemById = (id: number) => {
  return timelineData.find(item => item.id === id);
};

// Get items within a date range
export const getTimelineItemsByDateRange = (startDate: string, endDate: string): TimelineItem[] => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return timelineData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
  };
  
  // Get all unique skills from timeline
  export const getAllUniqueSkills = (): string[] => {
    const skillsSet = new Set<string>();
    timelineData.forEach(item => {
      item.skills?.forEach(skill => skillsSet.add(skill));
    });
    return Array.from(skillsSet).sort();
  };
  
  // Get items by skill
  export const getItemsBySkill = (skill: string): TimelineItem[] => {
    return timelineData.filter(item => item.skills?.includes(skill));
  };
  
  // Group items by year
  export const groupItemsByYear = (): Record<string, TimelineItem[]> => {
    return timelineData.reduce((acc, item) => {
      const year = new Date(item.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(item);
      return acc;
    }, {} as Record<string, TimelineItem[]>);
  };
  
  // Get next and previous items
  export const getAdjacentItems = (currentId: number): { next?: TimelineItem; prev?: TimelineItem } => {
    const currentIndex = timelineData.findIndex(item => item.id === currentId);
    return {
      prev: currentIndex > 0 ? timelineData[currentIndex - 1] : undefined,
      next: currentIndex < timelineData.length - 1 ? timelineData[currentIndex + 1] : undefined,
    };
  };
  
  // Get items with specific links (github, website, etc)
  export const getItemsWithLinks = (linkType: 'github' | 'website' | 'demo'): TimelineItem[] => {
    return timelineData.filter(item => item.links?.[linkType]);
  };
  
  // Search timeline items
  export const searchTimelineItems = (query: string): TimelineItem[] => {
    const searchTerm = query.toLowerCase();
    return timelineData.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.skills?.some(skill => skill.toLowerCase().includes(searchTerm))
    );
  };