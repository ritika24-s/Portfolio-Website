'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Music, Book, Code, Camera, Languages } from 'lucide-react';
import { LanguageToggle } from '@/components/about/LanguageToggle';
import { aboutContent } from '@/data/aboutContent';

type Language = 'en' | 'de' | 'hi';

const AboutPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const content = aboutContent[currentLang];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <LanguageToggle 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 relative">
              <div className="h-64 md:h-full">
                <Image
                  src="/profile.jpg"
                  alt="Ritika Sharma"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
            </div>

            {/* Intro Section */}
            <div className="md:w-2/3 p-8">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold mb-4"
              >
                {content.title}
              </motion.h1>
              {/* <p className="text-gray-600 dark:text-gray-300 mb-6">
                {content.intro}

                
              </p> */}
              {/* Description */}
              <div className="prose dark:prose-invert max-w-none mb-12">
                <p>{content.description}</p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{content.stats.experience}</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <div className="font-bold text-2xl text-green-600 dark:text-green-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{content.stats.projects}</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div className="font-bold text-2xl text-purple-600 dark:text-purple-400">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{content.stats.publications}</div>
                </div>
                <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                  <div className="font-bold text-2xl text-pink-600 dark:text-pink-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{content.stats.languages}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Sections */}
          <div className="grid md:grid-cols-2 gap-8 p-8 bg-gray-50 dark:bg-gray-900">
            {/* Languages */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Languages className="w-6 h-6 mr-2 text-blue-500" />
                Languages
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-sm text-gray-500">{content.languages.english}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Hindi</span>
                  <span className="text-sm text-gray-500">{content.languages.hindi}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>German</span>
                  <span className="text-sm text-gray-500">{content.languages.german}</span>
                </li>
              </ul>
            </motion.div>

            {/* Hobbies & Interests */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4">Hobbies & Interests</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span>{content.hobbies.traveling}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Music className="w-5 h-5 text-purple-500" />
                  <span>{content.hobbies.music}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="w-5 h-5 text-blue-500" />
                  <span>{content.hobbies.reading}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-pink-500" />
                  <span>{content.hobbies.photography}</span>
                </div>
              </div>
            </motion.div>

            {/* Research Interests */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md md:col-span-2"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-violet-500" />
                Research Interests
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-violet-50 dark:bg-violet-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{content.research.nlp.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {content.research.nlp.description}
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{content.research.ml.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {content.research.ml.description}
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{content.research.web.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {content.research.web.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;