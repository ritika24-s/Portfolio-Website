/*
 * File: src/components/landing/LandingPage.tsx
 * Purpose: Main landing page with navigation options
 * Dependencies: next/router, lucide-react icons
 */

'use client';

import React, { useState } from 'react';
import { Sun, Moon, GraduationCap, Github, Mail, Linkedin, FileText, Glasses, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 0.1, 1.5));
  };

  // Function to handle random choice
  const getRandomChoice = () => {
    return Math.random() < 0.5 ? 'interactive' : 'plain';
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'}`}
         style={{ fontSize: `${fontSize}rem` }}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Social Links */}
          <div className="flex space-x-4">
            <Github className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Right Side - Utility Buttons */}
          <div className="flex space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={increaseFontSize} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Glasses className="w-6 h-6" />
            </button>
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Welcome to My Portfolio
          </h1>
          
          <p className="text-xl text-center max-w-2xl">
            Choose your preferred way to explore my journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Interactive Option */}
            <Link href="/interactive" className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Interactive</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience my journey through an interactive timeline
                </p>
              </div>
            </Link>

            {/* Plain Option */}
            <Link href="/plain" className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Plain</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View my portfolio in a simple, clean layout
                </p>
              </div>
            </Link>

            {/* Random Option */}
            <Link 
              href={`/${getRandomChoice()}`}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-purple-500">🎲</div>
                <h3 className="text-xl font-semibold mb-2">Surprise Me!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Let fate decide how you explore
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LandingPage;