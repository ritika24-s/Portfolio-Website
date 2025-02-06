import Link from 'next/link';
import React from 'react';
import { ContactForm } from '../contact/ContactForm';

const Footer = () => {
  return (
    <footer className="bg-pink-50 dark:bg-slate-800 shadow-md mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-300 mb-3">Portfolio Of</h3>
            <Link 
              href="/about"
              className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Ritika Sharma <br />
              NLP Engineer
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-300 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/interactive" 
                  className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  Interactive Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-300 mb-3">Contact</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>Email: sharmari@tcd.ie</li>
              <li>Phone: +353-894832042</li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                Send a query
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-pink-100 dark:border-slate-700 mt-8 pt-8 text-center text-slate-600 dark:text-slate-300">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 