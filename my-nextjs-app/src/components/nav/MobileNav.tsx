/*
 * File: src/components/nav/MobileNav.tsx
 * Purpose: Mobile-friendly navigation menu
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Mail, 
  Sun, Moon, FileText, Home, Code,
  Layout, Phone, BookOpen, LineChart, Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface MobileNavProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const MobileNav = ({ isDarkMode, toggleDarkMode }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects', icon: Code },
    { href: '/skills', label: 'Skills', icon: LineChart },
    { href: '/research', label: 'Research', icon: BookOpen },
    { href: '/interactive', label: 'Timeline', icon: Layout },
    { href: '/journey', label: 'Career Journey', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mobile-tap-target"
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
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-800 shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mobile-tap-target"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Links */}
              <nav className="mt-16 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center p-4 rounded-lg transition-colors mobile-tap-target ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="text-base font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Dark Mode Toggle */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleDarkMode}
                  className="flex w-full items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mobile-tap-target"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-5 h-5 mr-3" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-3" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="flex justify-around mb-6">
                  <a
                    href="https://github.com/ritika24-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mobile-tap-target"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:sharmari@tcd.ie"
                    className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mobile-tap-target"
                    aria-label="Email Contact"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ritika-sharma-trinity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mobile-tap-target"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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