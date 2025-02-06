'use client'; // Mark as client component since we're using hooks and browser APIs

import React from 'react';
import Link from 'next/link';
// Import icons from lucide-react library

import { 
  GraduationCap, 
  FileText, ArrowUp 
} from 'lucide-react';


const LandingPage = () => {
  // Function to handle random choice
  const getRandomChoice = () => {
    return Math.random() < 0.5 ? 'interactive' : 'plain';
  };

  return (
    // Main container with dynamic dark mode classes
    <div className={`min-h-screen`}>
      {/* Main Content Area */}
      <main className="pt-24 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-12">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Welcome to My Portfolio
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-center max-w-2xl">
            Choose your preferred way to explore my journey
          </p>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Interactive Option Card */}
            <Link 
            href="/interactive" 
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Interactive</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience my journey through an interactive timeline
                </p>
              </div>
            </Link>


            {/* Plain Option Card */}
            <Link 
              href="/plain" 
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-center">

                <FileText className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Plain</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View my portfolio in a simple, clean layout
                </p>
              </div>
            </Link>


            {/* Random Option Card */}
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

      {/* Scroll to Top Button - Fixed at bottom right */}
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