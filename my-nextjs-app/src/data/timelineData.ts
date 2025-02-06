// File: src/data/timelineData.ts
// Purpose: Timeline data and utility functions
// Used by: All timeline components

import { TimelineData } from '@/types/timeline';

export const timelineData: TimelineData = [
  {
    id: 1,
    title: "BTech Computer Science and Engineering",
    date: "2013-2017",
    description: "Graduated from Mody University, India, with a focus on Data Structures and AI.",
    type: "education",
    location: "Mody UniversityRajasthan, India",
    skills: ["Artificial Intelligence", "Python", "Data Structures", "Algorithms",
       "Computer Vision", "Machine Learning", "Data Mining", "Object Oriented Programming"],
    questions: [
      {
        question: "What was your focus area?",
        answer: "AI and Neural Networks, Computer Vision, and Object Oriented Programming"
      },
      {
        question: "Most challenging project?",
        answer: "Building a distributed system for the final year project"
      },
      {
        question: "Key achievements?",
        answer: "Received a scholarship for four years of education for excellence in academics, Led the Programming Club"
      }
    ]
  },
  {
    id: 2,
    title: "Senior Software Engineer - Infosys",
    date: "2017 - 2021",
    description: "Led the migration of a legacy codebase from PL/I to Python and transitioned data from Mainframe to AWS.",
    type: "work",
    location: "San Francisco, CA",
    skills: ["Python", "AWS", "Mainframe", "PL/I", "Data Migration", "Software Development", ""],
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