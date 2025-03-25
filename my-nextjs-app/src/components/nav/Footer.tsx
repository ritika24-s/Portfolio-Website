/*
 * File: src/components/nav/Footer.tsx
 * Purpose: Footer component of the website
*/

import Link from 'next/link';
import React from 'react';
import { 
  Github, Linkedin, Mail, Home, Code, 
  Layout, Phone, BookOpen, LineChart, Briefcase,
  FileText, FileText as ArticleIcon
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              NLP Engineer & Full Stack Developer with 6+ years of experience, 
              specializing in production-ready NLP solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ritika24-s" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ritika-sharma-trinity" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sharmari@tcd.ie" 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link 
                href="/" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              <Link 
                href="/projects" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Code className="w-4 h-4 mr-2" />
                Projects
              </Link>
              <Link 
                href="/skills" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <LineChart className="w-4 h-4 mr-2" />
                Skills
              </Link>
              <Link 
                href="/research" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Research
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Explore</h3>
            <nav className="space-y-3">
              <Link 
                href="/interactive" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Layout className="w-4 h-4 mr-2" />
                Timeline
              </Link>
              <Link 
                href="/journey" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Career Journey
              </Link>
              <Link 
                href="/blog" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ArticleIcon className="w-4 h-4 mr-2" />
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-gray-600 dark:text-gray-300">
              <p>Ritika Sharma</p>
              <p>Dublin, Ireland</p>
              <p>Email: sharmari@tcd.ie</p>
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Ritika Sharma. All rights reserved.</p>
          <p className="text-sm mt-2">
            NLP Engineer | Full Stack Developer | MSc Computer Science - Trinity College Dublin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;