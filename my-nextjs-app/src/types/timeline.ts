// File: src/types/timeline.ts
// Purpose: Type definitions for timeline data structures
// Used by: TimelineContainer, TimelineViews, and data manipulation functions

// Define the structure for timeline questions
export interface TimelineQuestion {
    question: string;
    answer: string;
  }
  
  // Define the structure for a single timeline item
  export interface TimelineItem {
    id: number;
    title: string;
    date: string;
    description: string;
    type: 'education' | 'work' | 'project';
    questions: TimelineQuestion[];
    location?: string;  // Optional field for location
    skills?: string[];  // Optional field for skills/technologies used
    links?: {          // Optional links related to the item
      website?: string;
      github?: string;
      demo?: string;
    };
  }
  
  // Type for the entire timeline data array
  export type TimelineData = TimelineItem[];