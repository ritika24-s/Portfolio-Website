/*
 * File: src/components/nav/Header.tsx
 * Purpose: Reusable navigation header component
 * Dependencies: lucide-react icons
 */

'use client'; // Mark as client component since we're using hooks and browser APIs

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import icons from lucide-react library
import { 
  Sun, Moon, 
  FileText, Glasses
} from 'lucide-react';

// Import mobile nav
import { MobileNav } from './MobileNav';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const pathname = usePathname();

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    // Check if dark mode preference exists in localStorage
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkModePreference);
    
    // Apply dark mode class if needed
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
    }
  }, []);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', String(newDarkMode));
    
    // Toggle classes
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark:bg-gray-900');
    document.body.classList.toggle('dark:text-white');
  };

  // Function to increase font size for better readability
  const increaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.min(prev + 0.1, 1.5);
      // Apply font size to the document body
      document.body.style.fontSize = `${newSize}rem`;
      return newSize;
    });
  };

  // Initialize font size on component mount
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}rem`;
    return () => {
      // Cleanup on unmount
      document.body.style.fontSize = '1rem';
    };
  }, []);
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 shadow-md p-4 z-50">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo/Home */}
          <Link 
            href="/" 
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
          >
            Ritika Sharma
          </Link>

          {/* Mobile Menu */}
          <MobileNav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/projects" 
              className={`hover:text-blue-600 transition-colors ${
                isActive('/projects') ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Projects
            </Link>

            <Link 
              href="/skills" 
              className={`hover:text-blue-600 transition-colors ${
                isActive('/skills') ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Skills
            </Link>

            <Link 
              href="/research" 
              className={`hover:text-blue-600 transition-colors ${
                isActive('/research') ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Research
            </Link>

            <Link 
              href="/interactive" 
              className={`hover:text-blue-600 transition-colors ${
                isActive('/interactive') ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Timeline
            </Link>

            <Link 
              href="/journey" 
              className={`hover:text-blue-600 transition-colors ${
                isActive('/journey') ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Journey
            </Link>
          </div>

          {/* Right Side - Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Contact
            </Link>

            {/* Utility Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={increaseFontSize}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Increase font size"
              >
                <Glasses className="w-5 h-5" />
              </button>
              <a
                href="/resume.pdf"
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                download
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;