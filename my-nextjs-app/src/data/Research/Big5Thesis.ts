import { Brain, Code, ChartBar} from 'lucide-react';

export const big5thesis = {
    title: "Predicting Big-5 Personality from Facial Action Units",
    institute: "Trinity College Dublin",
    githubLink: "https://github.com/ritika24-s/PredictBIG5",
    description: `

      Research project focused on predicting personality traits using computer vision 
      and machine learning techniques. Implemented a multi-modal approach combining 
      facial action units analysis with behavioral patterns.
    `,
    keyFeatures: [
      {
        icon: Brain,
        title: "Multi-modal Analysis",
        description: "Combined visual data processing with behavioral pattern analysis"
      },
      {
        icon: Code,
        title: "Technical Implementation",
        description: "Built using Python, OpenCV, and advanced ML libraries"
      },
      {
        icon: ChartBar,
        title: "Data Analysis",
        description: "Comprehensive analysis of facial action units and their correlation with personality traits"
      }
    ],
    technicalDetails: {
      architecture: [
        "Computer Vision pipeline for facial action unit detection",
        "Machine Learning models for personality prediction",
        "Data preprocessing and feature extraction modules"
      ],
      technologies: [
        "Python", "OpenCV", "scikit-learn", "TensorFlow",
        "Pandas", "NumPy", "Matplotlib"
      ],
      methodology: [
        "Data collection and preprocessing",
        "Feature extraction from facial action units",
        "Model training and validation",
        "Performance evaluation and analysis"
      ]
    }
};