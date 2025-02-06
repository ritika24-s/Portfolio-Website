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
    <div className="min-h-screen bg-blue-50 dark:bg-slate-900">
      <main className="pt-24 container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            NLP Engineer with a passion for building intelligent systems and solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <LinkComponent
            href="/interactive"
            title="Interactive Timeline"
            description="Explore my journey through an interactive timeline"
          />
          <LinkComponent
            href="/plain"
            title="Plain View"
            description="A simple, straightforward view of my experience"
          />
          {/* Add more cards as needed */}
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

const LinkComponent = ({ href, title, description }: { href: string; title: string; description: string }) => {
  return (
    <Link href={href} className="group relative">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default LandingPage;