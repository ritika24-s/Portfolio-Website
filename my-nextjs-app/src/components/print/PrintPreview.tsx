/*
 * File: src/components/print/PrintPreview.tsx
 * Purpose: Modal component showing print preview with customization options
 */

import React from 'react';
import { X, Printer, Settings, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '@/data/timelineData';

interface PrintPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
}

export const PrintPreview = ({ isOpen, onClose, onPrint }: PrintPreviewProps) => {
  const [activeTab, setActiveTab] = React.useState<'preview' | 'settings'>('preview');
  const [printOptions, setPrintOptions] = React.useState({
    skills: true,
    links: true,
    qr: true
  });

  // Get QR Code URL
  const qrCodeUrl = typeof window !== 'undefined' 
    ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`
    : '';

  if (!isOpen) return null;

  const educationItems = timelineData.filter(item => item.type === 'education');
  const workItems = timelineData.filter(item => item.type === 'work');
  const projectItems = timelineData.filter(item => item.type === 'project');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-6xl h-[90vh] flex flex-col shadow-xl"
      >
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                activeTab === 'preview'
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                activeTab === 'settings'
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onPrint}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'preview' ? (
            <div className="h-full overflow-y-auto p-8 bg-gray-100 dark:bg-gray-900">
              <div className="bg-white dark:bg-gray-800 shadow-lg max-w-[21cm] mx-auto p-8 min-h-[29.7cm]">
                {/* Header with QR Code */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Your Name</h1>
                    <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                    <p className="text-gray-600 dark:text-gray-400">your@email.com</p>
                    <p className="text-gray-600 dark:text-gray-400">github.com/yourusername</p>
                  </div>
                  {printOptions.qr && (
                    <img 
                      src={qrCodeUrl} 
                      alt="Portfolio QR Code" 
                      className="w-24 h-24"
                    />
                  )}
                </div>

                {/* Education Section */}
                {printOptions.skills && (
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    {educationItems.map(item => (
                      <div key={item.id} className="mb-6">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.date}</p>
                        <p className="mt-2">{item.description}</p>
                        {item.skills && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.skills.map(skill => (
                              <span key={skill} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </section>
                )}

                {/* Work Experience Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                  {workItems.map(item => (
                    <div key={item.id} className="mb-6">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.date}</p>
                      <p className="mt-2">{item.description}</p>
                      {printOptions.skills && item.skills && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.skills.map(skill => (
                            <span key={skill} className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </section>

                {/* Projects Section */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Projects</h2>
                  {projectItems.map(item => (
                    <div key={item.id} className="mb-6">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.date}</p>
                      <p className="mt-2">{item.description}</p>
                      {printOptions.skills && item.skills && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.skills.map(skill => (
                            <span key={skill} className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </section>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-gray-500">
                  <p>View interactive version at: {typeof window !== 'undefined' ? window.location.href : ''}</p>
                  <p>Generated on: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full overflow-y-auto p-6">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-lg font-semibold mb-4">Print Settings</h3>
                {Object.entries(printOptions).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="capitalize">{key}</span>
                    <button
                      onClick={() => setPrintOptions(prev => ({ ...prev, [key]: !value }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};