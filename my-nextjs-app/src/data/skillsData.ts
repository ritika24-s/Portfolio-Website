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
      description: 'Extensive experience implementing NLP pipelines using NLTK',
      related: ['Python', 'Text Processing', 'Sentiment Analysis']
    },
    {
      name: 'Spacy',
      level: 5,
      category: 'nlp',
      description: 'Built production-ready NLP systems with Spacy',
      related: ['NER', 'Python', 'Text Processing']
    },
    {
      name: 'PyTorch',
      level: 4,
      category: 'nlp',
      description: 'Implemented deep learning models for text analysis',
      related: ['Deep Learning', 'Python', 'Machine Learning']
    },
    {
      name: 'Sentiment Analysis',
      level: 5,
      category: 'nlp',
      description: 'Expertise in sentiment analysis for customer-support conversations',
      related: ['NLTK', 'Spacy', 'Machine Learning']
    },
    {
      name: 'Topic Classification',
      level: 5,
      category: 'nlp',
      description: 'Developed topic classification systems for business insights',
      related: ['Machine Learning', 'Text Processing']
    },
    {
      name: 'Named Entity Recognition',
      level: 4,
      category: 'nlp',
      description: 'Implemented NER for various domains and applications',
      related: ['Spacy', 'NLTK', 'Information Extraction']
    },
    {
      name: 'Text Preprocessing',
      level: 5,
      category: 'nlp',
      description: 'Expert in building robust text preprocessing pipelines',
      related: ['Python', 'Regular Expressions', 'NLTK', 'Spacy']
    },
  
    // Machine Learning
    {
      name: 'scikit-learn',
      level: 5,
      category: 'machine_learning',
      description: 'Extensive experience with ML pipelines using scikit-learn',
      related: ['Python', 'Data Analysis', 'Classification']
    },
    {
      name: 'Deep Learning',
      level: 4,
      category: 'machine_learning',
      description: 'Experience building neural networks for various applications',
      related: ['PyTorch', 'Python', 'Data Science']
    },
    {
      name: 'Computer Vision',
      level: 3,
      category: 'machine_learning',
      description: 'Implemented facial action unit detection for thesis research',
      related: ['OpenCV', 'Python', 'Research']
    },
    {
      name: 'Pandas',
      level: 5,
      category: 'machine_learning',
      description: 'Expert in data manipulation and analysis with Pandas',
      related: ['Python', 'Data Analysis', 'NumPy']
    },
    {
      name: 'NumPy',
      level: 5,
      category: 'machine_learning',
      description: 'Proficient in numerical computing with NumPy',
      related: ['Python', 'Data Analysis', 'Pandas']
    },
  
    // Programming Languages
    {
      name: 'Python',
      level: 5,
      category: 'programming',
      description: 'Primary language for development and ML implementation',
      related: ['Flask', 'Django', 'FastAPI', 'ML Libraries']
    },
    {
      name: 'JavaScript',
      level: 4,
      category: 'programming',
      description: 'Used for frontend and Node.js backend development',
      related: ['React', 'AngularJS', 'Node.js']
    },
    {
      name: 'TypeScript',
      level: 3,
      category: 'programming',
      description: 'Experience using TypeScript for stronger type safety',
      related: ['JavaScript', 'React', 'Node.js']
    },
  
    // Backend
    {
      name: 'Flask',
      level: 5,
      category: 'backend',
      description: 'Built microservices and APIs with Flask',
      related: ['Python', 'REST API', 'Microservices']
    },
    {
      name: 'Django',
      level: 4,
      category: 'backend',
      description: 'Created full-stack applications with Django',
      related: ['Python', 'ORM', 'Web Development']
    },
    {
      name: 'FastAPI',
      level: 4,
      category: 'backend',
      description: 'Implemented high-performance APIs with FastAPI',
      related: ['Python', 'REST API', 'Microservices']
    },
    {
      name: 'Node.js',
      level: 3,
      category: 'backend',
      description: 'Experience with server-side JavaScript development',
      related: ['JavaScript', 'Express', 'Web Development']
    },
    {
      name: 'Microservices',
      level: 4,
      category: 'backend',
      description: 'Designed and implemented microservice architectures',
      related: ['AWS', 'Docker', 'API Design']
    },
  
    // Frontend
    {
      name: 'React',
      level: 3,
      category: 'frontend',
      description: 'Built interactive user interfaces with React',
      related: ['JavaScript', 'Frontend', 'Web Development']
    },
    {
      name: 'AngularJS',
      level: 4,
      category: 'frontend',
      description: 'Developed SaaS applications using AngularJS',
      related: ['JavaScript', 'Frontend', 'Web Development']
    },
  
    // Databases
    {
      name: 'MongoDB',
      level: 4,
      category: 'databases',
      description: 'Experience with NoSQL database design and implementation',
      related: ['Database Design', 'MEAN Stack', 'Backend']
    },
    {
      name: 'PostgreSQL',
      level: 4,
      category: 'databases',
      description: 'Implemented relational database systems with PostgreSQL',
      related: ['SQL', 'Database Design', 'ORM']
    },
    {
      name: 'MySQL',
      level: 3,
      category: 'databases',
      description: 'Experience with MySQL database development',
      related: ['SQL', 'Database Design']
    },
  
    // DevOps
    {
      name: 'AWS',
      level: 4,
      category: 'devops',
      description: 'Deployed and managed applications on AWS cloud',
      related: ['S3', 'EC2', 'Lambda', 'Docker']
    },
    {
      name: 'Docker',
      level: 4,
      category: 'devops',
      description: 'Containerized applications for deployment',
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