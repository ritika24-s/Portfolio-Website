/*
 * File: src/app/contact/page.tsx
 * Purpose: Complete contact page with animated form and social links
 */

'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = {
    email: 'sharmari@tcd.ie',
    location: 'Dublin, Ireland',
    github: 'https://github.com/ritikasharma',
    linkedin: 'https://linkedin.com/in/ritika-sharma-trinity'
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Have a question or want to work together?
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{contactInfo.email}</span>
                </motion.a>

                <motion.div
                  className="flex items-center text-gray-600 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>{contactInfo.location}</span>
                </motion.div>

                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github className="w-5 h-5 mr-3" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>

                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>

            {/* Additional Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-xl font-semibold mb-4">Response Time</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I typically respond within 24-48 hours during business days.
              </p>

              <h2 className="text-xl font-semibold mb-4">Working Hours</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday<br />
                9:00 AM - 6:00 PM
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What type of projects do you work on?",
                answer: "I specialize in web development projects, particularly using React, Next.js, and modern JavaScript technologies."
              },
              {
                question: "Are you available for freelance work?",
                answer: "Yes, I'm open to freelance opportunities that align with my skills and schedule."
              },
              {
                question: "How do you handle project collaboration?",
                answer: "I use industry-standard tools like Git for version control and maintain clear communication through your preferred channels."
              },
              {
                question: "What's your preferred way of communication?",
                answer: "Email is the best way to reach me initially. We can then move to other platforms based on project needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}