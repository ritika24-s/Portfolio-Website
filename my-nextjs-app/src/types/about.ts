export interface AboutContent {
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
  
  export interface MultilingualContent {
    en: AboutContent;
    de: AboutContent;
    hi: AboutContent;
  }