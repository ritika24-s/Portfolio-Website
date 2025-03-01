/*
 * File: src/app/resume/page.tsx
 * Purpose: Resume viewer page
 */

import React from 'react';
import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Resume</h1>
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download</span>
            </a>
          </div>
          
          <div className="p-6">
            <object 
              data="/resume.pdf" 
              type="application/pdf" 
              width="100%" 
              height="600px"
              className="w-full"
            >
              <p>
                Your browser doesn&apos;t support PDF viewing. 
                <a href="/resume.pdf" download>Download the PDF</a> instead.
              </p>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}