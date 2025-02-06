import { TimelineItem } from "@/types/timeline";

import { timelineData } from "@/data/timelineData";

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