/*
 * File: src/data/skillsData.ts
 * Purpose: Structured data for skills visualization
 */

export interface Skill {
    name: string;
    level: number; // 1-5 scale
    category: SkillCategory;
    description?: string;
    related?: string[];
  }
  
  export type SkillCategory = 
    | 'nlp'
    | 'machine_learning'
    | 'programming'
    | 'backend'
    | 'frontend'
    | 'databases'
    | 'devops';
  
  export const skillsData: Skill[] = [
    // NLP Skills
  {
    name: 'NLTK',
    level: 5,
    category: 'nlp',
    description: 'Extensive experience implementing NLP pipelines using NLTK at Scorebuddy',
    related: ['Python', 'Text Processing', 'Sentiment Analysis']
  },
  {
    name: 'Spacy',
    level: 5,
    category: 'nlp',
    description: 'Built production-ready NLP systems with Spacy for customer-agent interaction analysis',
    related: ['Named Entity Recognition', 'Python', 'Text Processing']
  },
  {
    name: 'PyTorch',
    level: 4,
    category: 'nlp',
    description: 'Implemented deep learning models for text analysis and intent classification',
    related: ['Deep Learning', 'Python', 'Machine Learning']
  },
  {
    name: 'Sentiment Analysis',
    level: 5,
    category: 'nlp',
    description: 'Developed sentiment analysis systems to map conversational transitions from frustration to resolution',
    related: ['NLTK', 'Spacy', 'Machine Learning']
  },
  {
    name: 'Topic Classification',
    level: 5,
    category: 'nlp',
    description: 'Developed topic classification systems for business insights from customer interactions',
    related: ['Machine Learning', 'Text Processing']
  },
  {
    name: 'Named Entity Recognition',
    level: 4,
    category: 'nlp',
    description: 'Implemented NER for various domains and applications in customer support analytics',
    related: ['Spacy', 'NLTK', 'Information Extraction']
  },
  {
    name: 'Text Preprocessing',
    level: 5,
    category: 'nlp',
    description: 'Expert in building robust text preprocessing pipelines for production systems',
    related: ['Python', 'Regular Expressions', 'NLTK', 'Spacy']
  },
  {
    name: 'Speech-to-Text Processing',
    level: 4,
    category: 'nlp',
    description: 'Led PoC development to optimize speech-to-text transcription models at Scorebuddy',
    related: ['Audio Processing', 'PyTorch', 'Deep Learning']
  },
  
  // Machine Learning
  {
    name: 'scikit-learn',
    level: 5,
    category: 'machine_learning',
    description: 'Extensive experience with ML pipelines using scikit-learn for various classification tasks',
    related: ['Python', 'Data Analysis', 'Classification']
  },
  {
    name: 'Deep Learning',
    level: 4,
    category: 'machine_learning',
    description: 'Experience building neural networks for NLP and computer vision applications',
    related: ['PyTorch', 'TensorFlow', 'Python']
  },
  {
    name: 'Computer Vision',
    level: 4,
    category: 'machine_learning',
    description: 'Implemented facial action unit detection for thesis research on personality prediction',
    related: ['OpenCV', 'PyFeat', 'Python']
  },
  {
    name: 'Pandas',
    level: 5,
    category: 'machine_learning',
    description: 'Expert in data manipulation and analysis with Pandas for ML pipelines',
    related: ['Python', 'Data Analysis', 'NumPy']
  },
  {
    name: 'TensorFlow',
    level: 4,
    category: 'machine_learning',
    description: 'Used for building deep learning models in research projects',
    related: ['Python', 'Deep Learning', 'Neural Networks']
  },
  {
    name: 'NumPy',
    level: 5,
    category: 'machine_learning',
    description: 'Proficient in numerical computing with NumPy for data processing and analysis',
    related: ['Python', 'Data Analysis', 'Pandas']
  },
  
  // Programming Languages
  {
    name: 'Python',
    level: 5,
    category: 'programming',
    description: 'Primary language for development and ML implementation at Scorebuddy and in research',
    related: ['Flask', 'Django', 'FastAPI', 'ML Libraries']
  },
  {
    name: 'JavaScript',
    level: 4,
    category: 'programming',
    description: 'Used for frontend and Node.js backend development in various projects',
    related: ['React', 'AngularJS', 'Node.js']
  },
  {
    name: 'Go',
    level: 3,
    category: 'programming',
    description: 'Used for building microservices at Scorebuddy',
    related: ['Microservices', 'Backend Development']
  },
  {
    name: 'PL/I',
    level: 3,
    category: 'programming',
    description: 'Experience with legacy mainframe language during migration at Infosys',
    related: ['Mainframe', 'Legacy Systems']
  },
  
  // Backend
  {
    name: 'Flask',
    level: 5,
    category: 'backend',
    description: 'Built microservices and APIs with Flask at Scorebuddy',
    related: ['Python', 'REST API', 'Microservices']
  },
  {
    name: 'Django',
    level: 4,
    category: 'backend',
    description: 'Created full-stack applications with Django at Paws and Play',
    related: ['Python', 'ORM', 'Web Development']
  },
  {
    name: 'Microservices',
    level: 5,
    category: 'backend',
    description: 'Designed and implemented microservice architectures for NLP systems at Scorebuddy',
    related: ['AWS', 'Docker', 'API Design']
  },
  {
    name: 'Node.js',
    level: 3,
    category: 'backend',
    description: 'Experience with server-side JavaScript development',
    related: ['JavaScript', 'Express', 'Web Development']
  },
  
  // Frontend
  {
    name: 'React',
    level: 4,
    category: 'frontend',
    description: 'Built interactive user interfaces with React for pet care application',
    related: ['JavaScript', 'Frontend', 'Web Development']
  },
  {
    name: 'AngularJS',
    level: 4,
    category: 'frontend',
    description: 'Developed SaaS applications using AngularJS at Scorebuddy',
    related: ['JavaScript', 'Frontend', 'Web Development']
  },
  
  // Databases
  {
    name: 'MongoDB',
    level: 5,
    category: 'databases',
    description: 'Primary database for NLP applications at Scorebuddy, optimized queries for performance',
    related: ['NoSQL', 'Database Design', 'Backend']
  },
  {
    name: 'PostgreSQL',
    level: 4,
    category: 'databases',
    description: 'Implemented relational database systems with PostgreSQL at Paws and Play',
    related: ['SQL', 'Database Design', 'ORM']
  },
  {
    name: 'DB2',
    level: 3,
    category: 'databases',
    description: 'Experience with IBM DB2 database during mainframe work at Infosys',
    related: ['SQL', 'Mainframe', 'Legacy Systems']
  },
  
  // DevOps
  {
    name: 'AWS',
    level: 4,
    category: 'devops',
    description: 'Deployed and managed applications on AWS cloud at Scorebuddy',
    related: ['S3', 'EC2', 'Lambda', 'Docker']
  },
  {
    name: 'Docker',
    level: 4,
    category: 'devops',
    description: 'Containerized NLP applications for deployment at Scorebuddy',
    related: ['DevOps', 'Microservices', 'AWS']
  },
  {
    name: 'Git',
    level: 5,
    category: 'devops',
    description: 'Expert in version control and collaborative development',
    related: ['GitHub', 'CI/CD', 'Development Workflow']
  }
];
  
  export const getSkillsByCategory = (category: SkillCategory) => {
    return skillsData.filter(skill => skill.category === category);
  };
  
  export const getTopSkills = (count: number = 10) => {
    return [...skillsData]
      .sort((a, b) => b.level - a.level)
      .slice(0, count);
  };
  
  export const getCategoryInfo = (category: SkillCategory) => {
    const categoryMap: Record<SkillCategory, { title: string, description: string }> = {
      nlp: {
        title: 'Natural Language Processing',
        description: 'Building systems that understand, interpret, and generate human language'
      },
      machine_learning: {
        title: 'Machine Learning',
        description: 'Developing algorithms and models that learn from data'
      },
      programming: {
        title: 'Programming Languages',
        description: 'Core languages used for development'
      },
      backend: {
        title: 'Backend Development',
        description: 'Building server-side applications and APIs'
      },
      frontend: {
        title: 'Frontend Development',
        description: 'Creating user interfaces and experiences'
      },
      databases: {
        title: 'Database Systems',
        description: 'Storing, retrieving, and managing data'
      },
      devops: {
        title: 'DevOps & Cloud',
        description: 'Deploying, scaling, and managing applications'
      }
    };
    
    return categoryMap[category] || { title: category, description: '' };
  };