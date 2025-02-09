/*
 * File: src/data/aboutContent.ts
 * Purpose: Multilingual content for about page
 */

interface AboutContent {
  title: string;
  description: string;
  stats: {
    experience: string;
    projects: string;
    publications: string;
    languages: string;
  };
  languages: {
    english: string;
    hindi: string;
    german: string;
  };
  hobbies: {
    traveling: string;
    music: string;
    reading: string;
    photography: string;
  };
  research: {
    nlp: {
      title: string;
      description: string;
    };
    ml: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
  };
}

interface MultilingualContent {
  en: AboutContent;
  de: AboutContent;
  hi: AboutContent;
}

export const aboutContent: MultilingualContent = {
  en: {
    title: "Hi, I'm Ritika Sharma",
    description: "NLP Engineer & Full Stack Developer with 6+ years of experience, based in Dublin, Ireland. I'm passionate about building AI-powered applications that make a difference in people's lives.",
    stats: {
      experience: "Years Experience",
      projects: "Projects",
      publications: "Publications",
      languages: "Languages"
    },
    languages: {
      english: "Fluent",
      hindi: "Native",
      german: "Basic"
    },
    hobbies: {
      traveling: "Traveling",
      music: "Music",
      reading: "Reading",
      photography: "Photography"
    },
    research: {
      nlp: {
        title: "Natural Language Processing",
        description: "Focusing on transformer architectures and multilingual models"
      },
      ml: {
        title: "Machine Learning",
        description: "Deep learning and neural networks for real-world applications"
      },
      web: {
        title: "Web Technologies",
        description: "Modern web frameworks and serverless architectures"
      }
    }
  },
  de: {
    title: "Hallo, ich bin Ritika Sharma",
    description: "NLP-Ingenieurin & Full-Stack-Entwicklerin mit über 6 Jahren Erfahrung in Dublin, Irland. Ich entwickle leidenschaftlich gerne KI-gestützte Anwendungen, die das Leben der Menschen positiv beeinflussen.",
    stats: {
      experience: "Jahre Erfahrung",
      projects: "Projekte",
      publications: "Publikationen",
      languages: "Sprachen"
    },
    languages: {
      english: "Fließend",
      hindi: "Muttersprache",
      german: "Grundkenntnisse"
    },
    hobbies: {
      traveling: "Reisen",
      music: "Musik",
      reading: "Lesen",
      photography: "Fotografie"
    },
    research: {
      nlp: {
        title: "Naturliche Sprachverarbeitung",
        description: "Fokus auf Transformer-Architekturen und mehrsprachigen Modellen"
      },
      ml: {
        title: "Maschinelles Lernen",
        description: "Deep Learning und neuronale Netze für praktische Anwendungen"
      },
      web: {
        title: "Web-Technologien",
        description: "Moderne Web-Frameworks und serverlose Architekturen"
      }
    }
  },
  hi: {
    title: "नमस्ते, मैं रितिका शर्मा हूं",
    description: "डबलिन, आयरलैंड में स्थित 6+ वर्षों के अनुभव के साथ NLP इंजीनियर और फुल स्टैक डेवलपर। मैं AI-संचालित एप्लिकेशन बनाने के लिए उत्साहित हूं जो लोगों के जीवन में बदलाव लाते हैं।",
    stats: {
      experience: "वर्षों का अनुभव",
      projects: "प्रोजेक्ट्स",
      publications: "प्रकाशन",
      languages: "भाषाएं"
    },
    languages: {
      english: "धाराप्रवाह",
      hindi: "मातृभाषा",
      german: "बुनियादी"
    },
    hobbies: {
      traveling: "यात्रा",
      music: "संगीत",
      reading: "पढ़ना",
      photography: "फोटोग्राफी"
    },
    research: {
      nlp: {
        title: "प्राकृतिक भाषा प्रसंस्करण",
        description: "ट्रांसफॉर्मर आर्किटेक्चर और बहुभाषी मॉडल पर ध्यान केंद्रित"
      },
      ml: {
        title: "मशीन लर्निंग",
        description: "वास्तविक अनुप्रयोगों के लिए डीप लर्निंग और न्यूरल नेटवर्क"
      },
      web: {
        title: "वेब टेक्नोलॉजीज",
        description: "आधुनिक वेब फ्रेमवर्क और सर्वरलेस आर्किटेक्चर"
      }
    }
  }
};