// File: src/data/timelineData.ts
// Purpose: Timeline data and utility functions
// Used by: All timeline components

import { TimelineData } from '@/types/timeline';

export const timelineData: TimelineData = [
    {
      id: 1, // Keeping the original IDs for reference consistency
      title: "NLP Engineer - Scorebuddy",
      date: "October 2022 - Present",
      description: "Leading the development of AI-driven SaaS application for quality assurance, implementing sentiment analysis, speech-to-text processing, and intent classification using transformer-based architectures.",
      type: "work",
      location: "Dublin, Ireland",
      skills: [
        "NLTK",
        "Spacy",
        "PyTorch",
        "Flask",
        "MongoDB",
        "AWS",
        "Docker",
        "Microservices"
      ],
      links: {
        website: "https://scorebuddy.com"
      },
      questions: [
        {
          question: "What are your main responsibilities?",
          answer: "I design end-to-end ML/NLP pipelines for analyzing customer-agent interactions, build AI-driven SaaS applications for quality assurance, lead PoC development for speech-to-text transcription, and design/deploy microservices integrating with helpdesk systems."
        },
        {
          question: "What technologies do you use?",
          answer: "I work with NLTK, Spacy, PyTorch for NLP; Flask and Go for backend services; MongoDB for databases; and AWS (S3, EC2, Lambda) with Docker for deployment."
        },
        {
          question: "What impact have you made?",
          answer: "I've increased sentiment analysis and rule generation accuracy, built applications that analyze thousands of interactions to improve customer experience, and optimized MongoDB queries to significantly reduce UI load times."
        },
        {
          question: "What recognition have you received?",
          answer: "I was recognized by the DDL client and Product Owner for delivering production-ready AI solutions in record time, and appreciated for adding integrations in record time of three days."
        }
      ]
    },
    {
      id: 2,
      title: "MSc Computer Science - Intelligent Systems",
      date: "September 2021 - August 2022",
      description: "Graduated with Distinction (1:1) from Trinity College Dublin. Thesis research on Predicting Big-5 Personality type from Facial Action Units in a multi-modal dataset, combining computer vision with machine learning.",
      type: "education",
      location: "Trinity College Dublin, Ireland",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Python",
        "OpenCV",
        "PyFeat"
      ],
      links: {
        github: "https://github.com/ritika24-s/PredictBIG5"
      },
      questions: [
        {
          question: "What was your thesis about?",
          answer: "I developed machine learning models that demonstrated statistically significant correlations between facial micro-expressions and personality traits. My research highlighted both the promise and limitations of unimodal behavioral analysis."
        },
        {
          question: "What areas did you focus on?",
          answer: "I focused on Machine Learning, Deep Learning, and Artificial Intelligence, with special emphasis on multimodal methodologies combining linguistic, acoustic, and visual information."
        },
        {
          question: "What other research did you work on?",
          answer: "I also worked on emotion classification in social media datasets, refining deep learning-based approaches for analyzing affective states in informal textual discourse."
        }
      ]
    },
    {
      id: 3,
      title: "CTO & Co-founder - Paws and Play",
      date: "August 2018 - June 2019",
      description: "Developed a full-stack application for pet care services ensuring a seamless user experience. Reached final round of Techstars startup accelerator program out of 1000+ applicants.",
      type: "work",
      location: "Bangalore, India",
      skills: [
        "Django",
        "PostgreSQL",
        "React",
        "JavaScript",
        "Product Management"
      ],
      questions: [
        {
          question: "What did you build?",
          answer: "I developed a full-stack application for pet care services, focusing on creating a seamless user experience."
        },
        {
          question: "What was your biggest achievement?",
          answer: "We reached the final round of Techstars startup accelerator program, selected from over 1000 applicants."
        },
        {
          question: "What were your responsibilities as CTO?",
          answer: "I led technical strategy and development, conducted market research to identify user needs, and prepared the roadmap for product development."
        }
      ]
    },
    {
      id: 4,
      title: "Senior Software Engineer - Infosys",
      date: "September 2017 - June 2021",
      description: "Led the migration of a 50-year-old legacy codebase from PL/I to Python, ensuring scalability and maintainability of a mission-critical fintech platform. Optimized mainframe-to-AWS transition, significantly improving performance and system efficiency.",
      type: "work",
      location: "Bangalore, India",
      skills: [
        "Python",
        "AWS",
        "Mainframe",
        "SAS",
        "JCL",
        "DB2",
        "PL/I",
        "Fintech"
      ],
      links: {
        website: "https://www.infosys.com"
      },
      questions: [
        {
          question: "What were your key responsibilities?",
          answer: "I led the migration of legacy codebase from PL/I to Python, optimized mainframe-to-AWS transition, analyzed customer purchase patterns for business insights, and mentored junior engineers."
        },
        {
          question: "What recognition did you receive?",
          answer: "I was recognized as a top performer by the client and appreciated for dedication, commitment, innovation, and planning."
        }
      ]
    },
    {
      id: 5,
      title: "BTech Computer Science and Engineering",
      date: "July 2013 - May 2017",
      description: "Graduated with first-class honors (1:1) from Mody University of Science and Technology, India. Built strong foundations in computer science with focus on data structures and artificial intelligence.",
      type: "education",
      location: "Mody University of Science and Technology, India",
      skills: [
        "Data Structures",
        "Algorithms",
        "Python",
        "Java",
        "Artificial Intelligence",
        "Computer Vision"
      ],
      questions: [
        {
          question: "What was your focus area?",
          answer: "I focused on building strong foundations in computer science fundamentals, with particular interest in data structures, algorithms, and artificial intelligence."
        },
        {
          question: "Key achievements?",
          answer: "Graduated with first-class honors (1:1), placing in the top percentile of my class."
        }
      ]
    }
  ];