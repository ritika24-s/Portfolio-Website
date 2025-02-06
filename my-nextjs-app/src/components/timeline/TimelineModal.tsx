/*
 * File: src/components/timeline/TimelineModal.tsx
 * Purpose: Enhanced modal component for timeline items with animations
 * Dependencies: TimelineItem type, lucide-react icons
 */

import React, { useState } from 'react';
import { 
  X, MessageCircle, Globe, PlayCircle, MapPin, 
  Send, Calendar, Share2 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { TimelineItem } from '@/types/timeline';

interface TimelineModalProps {
  item: TimelineItem;
  onClose: () => void;
  isOpen: boolean;
}

const TimelineModal = ({ item, onClose, isOpen }: TimelineModalProps) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [customQuestion, setCustomQuestion] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentView, setCurrentView] = useState<'details' | 'questions'>('details');
  const [copied, setCopied] = useState(false);

  // Share functionality
  const handleShare = async () => {
    const shareText = `Check out my experience: ${item.title} (${item.date})`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative animate-scaleIn">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4" />
            <span>{item.date}</span>
            {item.location && (
              <>
                <MapPin className="w-4 h-4 ml-2" />
                <span>{item.location}</span>
              </>
            )}
          </div>
          {copied && (
            <div className="absolute top-16 right-6 bg-black text-white px-3 py-1 rounded text-sm animate-fadeInOut">
              Copied to clipboard!
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setCurrentView('details')}
            className={`flex-1 p-4 text-center transition-colors ${
              currentView === 'details' 
                ? 'border-b-2 border-blue-500 text-blue-500' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setCurrentView('questions')}
            className={`flex-1 p-4 text-center transition-colors ${
              currentView === 'questions' 
                ? 'border-b-2 border-blue-500 text-blue-500' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Q&A
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className={`transition-opacity duration-300 ${
            currentView === 'details' ? 'opacity-100' : 'opacity-0 hidden'
          }`}>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-200 mb-6">{item.description}</p>

              {/* Skills */}
              {item.skills && (
                <div className="mb-6 animate-slideInUp">
                  <h3 className="font-semibold mb-2">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, index) => (
                      <span
                        key={skill}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 
                                 px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {item.links && Object.keys(item.links).length > 0 && (
                <div className="mb-6 animate-slideInUp" style={{ animationDelay: '200ms' }}>
                  <h3 className="font-semibold mb-2">Related Links</h3>
                  <div className="flex gap-4">
                    {item.links.website && (
                      <a
                        href={item.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-1" />
                        Website
                      </a>
                    )}
                    {item.links.github && (
                      <a
                        href={item.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <FaGithub className="w-4 h-4 mr-1" />
                        Github
                      </a>

                    )}
                    {item.links.demo && (
                      <a
                        href={item.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`transition-opacity duration-300 ${
            currentView === 'questions' ? 'opacity-100' : 'opacity-0 hidden'
          }`}>
            <div className="p-6">
              <div className="space-y-4">
                {item.questions.map((q, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden animate-slideInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => setSelectedQuestion(selectedQuestion === q.question ? null : q.question)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 
                               hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <span className="flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {q.question}
                      </span>
                      <span className="transform transition-transform duration-200">
                        {selectedQuestion === q.question ? '−' : '+'}
                      </span>
                    </button>
                    {selectedQuestion === q.question && (
                      <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-600 animate-slideInDown">
                        {q.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Not Satisfied Section */}
              <div className="mt-8 pt-6 border-t dark:border-gray-700">
                {!showContactForm ? (
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="text-blue-500 hover:text-blue-600 flex items-center transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Not finding what you&apos;re looking for? Ask a question
                  </button>

                ) : (
                  <div className="space-y-4 animate-slideInUp">
                    <h4 className="font-semibold">Ask Your Question</h4>
                    <textarea
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Type your question here..."
                    />
                    <div className="flex justify-end gap-4">
                      <button
                        onClick={() => {
                          setShowContactForm(false);
                          setCustomQuestion('');
                        }}
                        className="px-4 py-2 text-gray-600 hover:text-gray-700 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          window.location.href = `mailto:your@email.com?subject=Question about ${item.title}&body=${customQuestion}`;
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg
                                 hover:bg-blue-600 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        Send Question
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineModal;