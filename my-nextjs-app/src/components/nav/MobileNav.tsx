/*
 * File: src/components/nav/MobileNav.tsx
 * Purpose: Mobile-friendly navigation menu
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Github, Mail, Linkedin, 
  Sun, Moon, FileText, Home, Code,
  Layout, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/interactive', label: 'Timeline', icon: Layout },
    { href: '/projects', label: 'Projects', icon: Code },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-800 shadow-lg p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Links */}
              <nav className="mt-12 space-y-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Social Links */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="flex justify-around mb-4">
                  <a
                    href="https://github.com/ritika24-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:sharmari@tcd.ie"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ritika-sharma-trinity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};