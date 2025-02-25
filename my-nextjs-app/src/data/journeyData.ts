/*
 * File: src/data/journeyData.ts
 * Purpose: Data for professional journey timeline
 */

export interface JourneyStep {
    id: number;
    title: string;
    organization: string;
    period: string;
    description: string;
    achievements: string[];
    skills: string[];
    category: 'education' | 'work' | 'entrepreneurship';
    icon?: string;
  }
  
  export const journeyData: JourneyStep[] = [
    {
      id: 1,
      title: "BTech Computer Science and Engineering",
      organization: "Mody University of Science and Technology",
      period: "July 2013 - May 2017",
      description: "Built strong foundations in computer science with focus on data structures and artificial intelligence.",
      achievements: [
        "Graduated with first-class honors (8.0/10)",
        "Top 10 percentile of graduating class",
        "Specialized coursework in data structures and AI"
      ],
      skills: ["Data Structures", "Algorithms", "Java", "Python", "Artificial Intelligence"],
      category: "education"
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      organization: "Infosys",
      period: "September 2017 - June 2021",
      description: "Led migration of legacy codebase from PL/I to Python, ensuring scalability and maintainability of mission-critical fintech platform.",
      achievements: [
        "Optimized mainframe-to-AWS transition",
        "Analyzed customer purchase patterns for business insights",
        "Recognized as top performer",
        "Mentored junior engineers"
      ],
      skills: ["Python", "AWS", "Mainframe", "PL/I", "SAS", "DB2", "Fintech"],
      category: "work"
    },
    {
      id: 3,
      title: "CTO, Co-founder",
      organization: "Paws and Play",
      period: "August 2018 - June 2019",
      description: "Led technical strategy and development of a full-stack application for pet care services, reaching final round of Techstars startup accelerator program.",
      achievements: [
        "Developed full-stack application with Django and React",
        "Reached final round of Techstars (top selection from 1000+ applicants)",
        "Conducted market research and roadmap planning"
      ],
      skills: ["Django", "Python", "PostgreSQL", "React", "JavaScript", "Product Management"],
      category: "entrepreneurship"
    },
    {
      id: 4,
      title: "MSc Computer Science - Intelligent Systems",
      organization: "Trinity College Dublin",
      period: "September 2021 - August 2022",
      description: "Specialized in machine learning and artificial intelligence, with thesis on predicting Big-5 personality traits from facial action units.",
      achievements: [
        "Graduated with distinction",
        "Developed novel approach combining computer vision and ML",
        "Created end-to-end multimodal analysis pipeline"
      ],
      skills: ["Machine Learning", "Python", "R", "scikit-learn", "Pandas", "NumPy", "OpenCV", "Research"],
      category: "education"
    },
    {
      id: 5,
      title: "NLP Engineer",
      organization: "Scorebuddy",
      period: "October 2022 - Present",
      description: "Leading the development of AI-driven SaaS application for quality assurance, focusing on NLP pipelines for customer support analytics.",
      achievements: [
        "Built scalable NLP pipeline for text processing and analysis",
        "Developed microservices for helpdesk integration",
        "Implemented sentiment analysis and topic classification",
        "Led ML model research and deployment"
      ],
      skills: ["NLP", "Python", "Flask", "PyTorch", "NLTK", "Spacy", "AWS", "Docker", "Microservices"],
      category: "work"
    }
  ];