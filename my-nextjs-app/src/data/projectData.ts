/*
 * File: src/data/projectData.ts
 * Purpose: Complete project showcase data
 */

export const projectData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    longDescription: `A comprehensive e-commerce solution built with Next.js and Node.js. Features include real-time inventory tracking, secure payment processing, and an intuitive admin dashboard for product management.`,
    skills: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "TypeScript"],
    images: ["/api/placeholder/800/400", "/api/placeholder/800/400", "/api/placeholder/800/400"],
    links: {
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.example.com",
      website: "https://ecommerce.example.com"
    },
    technical: {
      frontend: [
        "Next.js for server-side rendering",
        "TypeScript for type safety",
        "Tailwind CSS for styling",
        "Redux Toolkit for state management",
        "React Query for data fetching"
      ],
      backend: [
        "Node.js with Express",
        "JWT authentication",
        "WebSocket for real-time updates",
        "Rate limiting and security measures"
      ],
      database: [
        "MongoDB for main database",
        "Redis for caching",
        "Elasticsearch for search functionality"
      ],
      deployment: [
        "Docker containerization",
        "AWS infrastructure",
        "CI/CD with GitHub Actions"
      ]
    },
    features: [
      "Real-time inventory tracking with WebSocket integration",
      "Secure payment processing with Stripe",
      "Advanced search with filters and sorting",
      "User authentication and authorization",
      "Admin dashboard for product management",
      "Order tracking and history"
    ],
    challenges: [
      "Implemented optimistic updates for real-time inventory changes",
      "Built a robust caching system to handle high traffic",
      "Developed a scalable search solution with Elasticsearch",
      "Created a secure payment flow with proper error handling"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description: "Smart task management app with AI-driven prioritization",
    longDescription: `An intelligent task management application that uses machine learning to help users prioritize tasks and manage their time more effectively.`,
    skills: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    images: ["/api/placeholder/800/400", "/api/placeholder/800/400"],
    links: {
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://ai-tasks.example.com"
    },
    technical: {
      frontend: [
        "React with TypeScript",
        "Material-UI components",
        "React DnD for drag-and-drop",
        "Chart.js for analytics"
      ],
      backend: [
        "FastAPI for high-performance API",
        "Python ML pipeline",
        "Celery for background tasks",
        "Docker containerization"
      ],
      database: [
        "PostgreSQL with TimescaleDB",
        "Redis for caching",
        "Vector embeddings for ML"
      ]
    },
    features: [
      "AI-powered task prioritization",
      "Smart deadline suggestions",
      "Productivity analytics dashboard",
      "Team collaboration features",
      "Integration with calendar apps"
    ],
    challenges: [
      "Developed custom ML model for task prioritization",
      "Implemented real-time collaboration features",
      "Optimized performance for large task lists",
      "Created intuitive UI for complex features"
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Interactive developer portfolio with unique visualizations",
    longDescription: `A modern portfolio website built with Next.js and Tailwind CSS, featuring interactive timeline visualization and detailed project showcases.`,
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    images: ["/api/placeholder/800/400"],
    links: {
      github: "https://github.com/yourusername/portfolio",
      website: "https://yourportfolio.com"
    },
    technical: {
      frontend: [
        "Next.js 13 with App Router",
        "Tailwind CSS for styling",
        "Framer Motion animations",
        "Responsive design principles"
      ],
      deployment: [
        "Vercel deployment",
        "Continuous deployment with GitHub"
      ]
    },
    features: [
      "Interactive timeline visualization",
      "Dark mode support",
      "Print-friendly version",
      "Responsive design",
      "Project showcase with filters"
    ],
    challenges: [
      "Created smooth animations for timeline",
      "Implemented accessible design",
      "Optimized performance metrics",
      "Designed mobile-first experience"
    ]
  }
];