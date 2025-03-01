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
  FileText, Glasses,
  X, Menu,
} from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  }, [fontSize]);
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 w-full bg-pink-50 dark:bg-slate-800 shadow-md p-4 z-50">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo/Home */}
          <Link 
            href="/" 
            className="text-xl font-bold text-violet-600 dark:text-violet-300 hover:text-violet-700 transition-colors"
          >
            Portfolio
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 dark:hover:bg-slate-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/interactive" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/interactive') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Interactive
            </Link>

            <Link 
              href="/plain" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/plain') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Plain
            </Link>

            <Link 
              href="/projects" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/projects') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/research" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/projects') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Research
            </Link>
            {/* <Link 
              href="/demos" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/demos') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Demos
            </Link>
            <Link 
              href="/blog" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/blog') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Blogs 
            </Link> */}
            {/* <Link 
              href="/journey" 
              className={`hover:text-violet-600 transition-colors ${
                isActive('/journey') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Journey 
            </Link> */}
            <Link
              href="/skills" 
                className={`hover:text-violet-600 transition-colors ${
                  isActive('/skills') ? 'text-violet-600' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
              Skills 
            </Link>
          </div>


          {/* Right Side - Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            {/* <div className="flex space-x-2">
              <a 
                href="https://github.com/ritika24-s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sharmari@tcd.ie" 
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ritika-sharma-trinity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div> */}
            <Link 
              href="/contact" 
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-slate-700 transition-colors"
            >
              Get in Touch
            </Link>

            {/* Utility Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={increaseFontSize}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Increase font size"
              >
                <Glasses className="w-5 h-5" />
              </button>
              <a
                href="/resume.pdf"
                className="flex items-center space-x-2 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600 transition-colors"
                download
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-pink-50 dark:bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/interactive"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/interactive') 
                    ? 'bg-violet-500 text-white' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Interactive
              </Link>

              <Link
                href="/plain"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/plain') 
                    ? 'bg-violet-500 text-white' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Plain
              </Link>

              <Link
                href="/projects"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/projects') 
                    ? 'bg-violet-500 text-white' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-pink-100 dark:hover:bg-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              
              {/* Mobile Social Links */}
              <div className="flex space-x-4 px-3 py-2">
                {/* <a href="https://github.com/ritika24-s" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-slate-600 dark:text-slate-300 hover:text-violet-600"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="mailto:sharmari@tcd.ie"
                   className="text-slate-600 dark:text-slate-300 hover:text-violet-600"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ritika-sharma-trinity" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-slate-600 dark:text-slate-300 hover:text-violet-600"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a> */}
                <Link 
                  href="/contact" 
                  className="text-slate-600 dark:text-slate-300 hover:bg-blue-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header; 