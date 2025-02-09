/*
 * File: src/components/about/LanguageSwitcher.tsx
 * Purpose: Language switcher with animated transitions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

type Language = 'en' | 'de' | 'hi';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  const languages = [
    { 
      code: 'en', 
      name: 'English',
      flag: '🇬🇧',
      level: 'Native-like Proficiency'
    },
    { 
      code: 'de', 
      name: 'Deutsch',
      flag: '🇩🇪',
      level: 'A1 Level'
    },
    { 
      code: 'hi', 
      name: 'हिंदी',
      flag: '🇮🇳',
      level: 'Native Speaker'
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Globe className="w-5 h-5 text-blue-500" />
        <span className="font-medium">Choose Language</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code as Language)}
            className={`relative px-6 py-3 rounded-xl transition-colors ${
              currentLang === lang.code
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{lang.flag}</span>
              <div className="text-left">
                <div className="font-medium">{lang.name}</div>
                <div className="text-xs opacity-75">{lang.level}</div>
              </div>
            </div>
            {currentLang === lang.code && (
              <motion.div
                className="absolute -bottom-1 left-2 right-2 h-0.5 bg-white"
                layoutId="underline"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};