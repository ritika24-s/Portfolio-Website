/*
 * File: src/components/about/LanguageToggle.tsx
 * Purpose: Subtle language toggle that fits the existing UI
 * Key Features:
    Non-intrusive
    Easy to access
    Shows flags for visual recognition
    Maintains the minimalist design
 */

import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'en' | 'de' | 'hi';
  onLanguageChange: (lang: 'en' | 'de' | 'hi') => void;
}

export const LanguageToggle = ({ currentLang, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="fixed top-24 right-6 z-10">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-2 ${
              currentLang === 'en'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>English</span>
          </button>
          <button
            onClick={() => onLanguageChange('de')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-2 ${
              currentLang === 'de'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Deutsch</span>
          </button>
          <button
            onClick={() => onLanguageChange('hi')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-2 ${
              currentLang === 'hi'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>हिंदी</span>
          </button>
        </div>
      </div>
    </div>
  );
};