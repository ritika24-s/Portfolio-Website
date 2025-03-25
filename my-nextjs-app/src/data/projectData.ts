/*
 * File: src/data/projectData.ts
 * Purpose: Centralized project data matching your interface
 */

import { Project } from '@/types/projects';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Predicting Big-5 Personality from Facial Action Units",
    category: "research",
    date: "2021-2022",
    description: "MSc thesis project at Trinity College Dublin combining computer vision and machine learning to predict personality traits from facial expressions.",
    longDescription: `
      Research project focused on developing a novel approach to personality prediction
      using facial action units. The system processes facial expressions through computer
      vision and correlates them with Big-5 personality traits using machine learning models.
      Successfully implemented and validated the approach with multi-modal datasets.
    `,
    tech: ["Python", "OpenCV", "Py-Feat", "scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    techStack: {
      ml: [
        "TensorFlow for deep learning models",
        "OpenCV and Py-Feat for facial action unit detection",
        "scikit-learn for machine learning pipeline",
        "Pandas & NumPy for data processing"
      ],
      backend: ["Python"],
      devops: ["Git", "Docker"]
    },
    links: {
      github: "https://github.com/ritika24-s/PredictBIG5",
      // paper: "thesis_link_here" // Add if available
    },
    images: ["/api/placeholder/800/400"], // Add actual images
    featured: true,
    timeline: "2021-2022",
    achievements: [
      "Achieved high accuracy in personality trait prediction",
      "Developed novel approach combining visual and behavioral data",
      "Successfully defended thesis with distinction at Trinity College Dublin",
      "Scored the highest grade under my supervisor",
      "Created scalable machine learning pipeline for personality prediction"

    ],
    challenges: [
      "Implementing real-time facial action unit detection",
      "Developing accurate personality prediction models",
      "Recognizing subtle facial expressions"
    ],

    skills: [
      "Computer Vision",
      "Machine Learning",
      "Data Analysis",
      "Python Programming",
      "Research Methodology",
      "Facial Action Units", 
      "Big-5 Personality Traits",
      "Academic Writing",
      "Multi-modal data processing",
    ],
    features: [
      "Multi-modal data processing pipeline",
      "Real-time facial action unit detection",
      "Personality trait prediction model",
      "Research methodology implementation",
      "Comprehensive data analysis"
    ]
  },

  {
    id: 2,
    title: "NLP-Powered Customer Support Quality Assurance Analytics",
    category: "nlp",
    date: "2022-Present",
    description: "Developed AI-driven SaaS platform for analyzing customer-agent interactions using advanced NLP techniques to provide enhanced quality assurance at Scorebuddy.",
    longDescription: `
      Developed and deployed a comprehensive NLP solution at Scorebuddy for analyzing 
      customer support interactions. The system integrates with various helpdesk platforms 
      and provides automated quality assurance through advanced natural language processing.
      
      Implemented microservices architecture for scalability and created sophisticated NLP 
      pipelines for tasks including sentiment analysis, topic classification, and automated 
      QA rule generation.
    `,
    tech: ["Python", "Flask", "NLTK", "Spacy", "PyTorch", "AWS", "Docker", "MongoDB"],
    techStack: {
      frontend: ["AngularJS", "Node.js"],
      backend: ["Python", "Flask", "Microservices"],
      ml: ["NLTK", "Spacy", "PyTorch"],
      devops: ["AWS", "Docker", "Lambda"]
    },
    links: {
      website: "https://scorebuddy.com"
    },
    images: ["/api/placeholder/800/400"],
    featured: true,
    timeline: "2022-Present",
    achievements: [
      "Successfully integrated multiple helpdesk platforms",
      "Improved customer support efficiency by 40%",
      "Implemented scalable NLP pipeline"
    ],
    challenges: [
      "Building scalable microservices architecture",
      "Handling real-time data processing",
      "Implementing complex NLP pipelines"
    ],
    skills: [
      "Natural Language Processing",
      "Machine Learning",
      "Microservices Architecture",
      "Full Stack Development",
      "Cloud Computing"
    ],
    features: [
      "Automated QA rule generation",
      "Keyword identification system",
      "Topic classification",
      "Entity recognition",
      "Real-time analytics dashboard"
    ]
  },
  {
    id: 3,
    title: "Product Management System",
    category: "fullstack",
    date: "2021",
    description: "Full-stack application for efficient product management and inventory tracking.",
    longDescription: `
      Developed a comprehensive product management system with real-time updates,
      inventory tracking, and user management. Implemented using modern web
      technologies and best practices in software development.
    `,
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      devops: ["Git", "CI/CD"]
    },
    links: {
      github: "https://github.com/ritika24-s/Product-Management-System",
      // demo: "demo_link_here" // Add if available
    },
    images: ["/api/placeholder/800/400"],
    featured: false,
    timeline: "2021",
    achievements: [
      "Implemented real-time inventory tracking",
      "Developed responsive user interface",
      "Created efficient database schema"
    ],
    challenges: [
      "Handling real-time updates",
      "Implementing efficient data structures",
      "Creating scalable architecture"
    ],
    skills: [
      "Full Stack Development",
      "Database Design",
      "UI/UX Development",
      "RESTful APIs",
      "TypeScript"
    ],
    features: [
      "Real-time inventory tracking",
      "User management system",
      "Product categorization",
      "Search and filter functionality",
      "Responsive design"
    ]
  }
];

