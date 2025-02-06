/*
 * File: src/app/plain/page.tsx
 * Purpose: Plain version of portfolio with sidebar navigation
 * Key features of this plain version:
    1. Clean Layout:
        Sticky sidebar navigation
        Clear section organization
        Easy-to-scan content cards
    2. Functionality:
        Quick section switching
        Smooth transitions
        Responsive design
        Dark mode support
    3. Visual Hierarchy:
        Different color schemes for each section
        Clear headings and dates
        Organized skills tags
        Prominent links to external resources
    4. User Experience:
        No scrolling through unnecessary animations
        All information immediately accessible
        Clear categorization
        Smooth hover effects
 */

'use client';

import React, { useState, useEffect } from 'react';
import { timelineData } from '@/data/timelineData';
import { 
  BookOpen, Briefcase, Code, ChevronRight,
  ExternalLink, Mail, Calendar,
  Printer, QrCode
} from 'lucide-react';
import {FaGithub} from 'react-icons/fa';
import {PrintPreview} from '@/components/print/PrintPreview';
import { TimelineItem } from '@/types/timeline';
import { SearchAndFilter } from '@/components/search/SearchAndFilter';

export default function PlainPage() {
  const [activeSection, setActiveSection] = useState<string>('education');
  const [isSticky, setIsSticky] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [filteredItems, setFilteredItems] = useState<TimelineItem[]>(timelineData);


  // Handle print preview
  const handlePrint = () => {
    setShowPrintPreview(false);
    window.print();
  };

  // Handle scroll for sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate QR Code URL for the portfolio
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;

  // Filter items by type
  const educationItems = timelineData.filter(item => item.type === 'education');
  const workItems = timelineData.filter(item => item.type === 'work');
  const projectItems = timelineData.filter(item => item.type === 'project');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 print:pt-0 print:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search and Filter Component */}
        <div className="mb-8 no-print">
            <SearchAndFilter 
              items={timelineData}
              onFilterChange={setFilteredItems}
            />
          </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden in print */}
          <div className={`lg:w-64 flex-shrink-0 ${
            isSticky ? 'lg:sticky lg:top-20' : ''
          }`}>
            <nav className="space-y-1">
              <button
                onClick={() => setActiveSection('education')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === 'education'
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <BookOpen className="w-5 h-5 mr-3" />
                <span className="flex-1">Education</span>
                <ChevronRight className={`w-5 h-5 transform transition-transform ${
                  activeSection === 'education' ? 'rotate-90' : ''
                }`} />
              </button>

              <button
                onClick={() => setActiveSection('work')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === 'work'
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Briefcase className="w-5 h-5 mr-3" />
                <span className="flex-1">Work Experience</span>
                <ChevronRight className={`w-5 h-5 transform transition-transform ${
                  activeSection === 'work' ? 'rotate-90' : ''
                }`} />
              </button>

              <button
                onClick={() => setActiveSection('projects')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === 'projects'
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Code className="w-5 h-5 mr-3" />
                <span className="flex-1">Projects</span>
                <ChevronRight className={`w-5 h-5 transform transition-transform ${
                  activeSection === 'projects' ? 'rotate-90' : ''
                }`} />
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Show message when no results */}
            {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    No items match your search criteria.
                  </p>
                </div>
            )}

            {/* Education Section */}
            <section className={activeSection === 'education' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Education
              </h2>
              <div className="space-y-6">
                {educationItems.map(item => (
                  <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                    {item.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience Section */}
            <section className={activeSection === 'work' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {workItems.map(item => (
                  <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                    {item.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.links && (
                      <div className="mt-4 flex gap-4">
                        {item.links.website && (
                          <a
                            href={item.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 flex items-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Website
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className={activeSection === 'projects' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Projects
              </h2>
              <div className="space-y-6">
                {projectItems.map(item => (
                  <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                    {item.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.links && (
                      <div className="mt-4 flex gap-4">
                        {item.links.github && (
                          <a
                            href={item.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 flex items-center"
                          >
                            <FaGithub className="w-4 h-4 mr-1" />
                            GitHub
                          </a>

                        )}
                        {item.links.demo && (
                          <a
                            href={item.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 flex items-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        
      </div>
      {/* Print Preview Button */}
      <button
        onClick={() => setShowPrintPreview(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors no-print"
        aria-label="Print portfolio"
      >
        <Printer className="w-6 h-6" />
      </button>

      {/* Print Preview Modal */}
      <PrintPreview
        isOpen={showPrintPreview}
        onClose={() => setShowPrintPreview(false)}
        onPrint={handlePrint}
      />
    </div>
  );
}