import React, { useState } from 'react';
import { MessageCircle, Globe, PlayCircle, MapPin } from 'lucide-react';
import { FaGithub} from 'react-icons/fa';

import { timelineData } from '@/data/timelineData';
import { TimelineItem } from '@/types/timeline';

const InteractiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
          <div className="w-1 h-full bg-blue-200 dark:bg-blue-800 border-dashed border-2 border-blue-300"></div>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center mb-24 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Pin */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 
                  ${item.type === 'education' ? 'bg-blue-500' : 
                    item.type === 'work' ? 'bg-green-500' : 'bg-purple-500'} 
                  rounded-full cursor-pointer shadow-lg
                  hover:scale-110 transition-transform`}
                onClick={() => setSelectedItem(item)}
              />

              {/* Content Card */}
              <div 
                className={`w-5/12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
                  ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{item.date}</p>
                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Timeline Item Details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedItem.date}</p>
            <p className="text-gray-700 dark:text-gray-200 mb-6">{selectedItem.description}</p>

            {/* Questions Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
              {selectedItem.questions.map((q, index) => (
                <div key={index} className="space-y-2">
                  <button
                    onClick={() => setSelectedQuestion(selectedQuestion === q.question ? null : q.question)}
                    className="flex items-center text-left w-full p-2 bg-gray-100 dark:bg-gray-700 rounded"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {q.question}
                  </button>
                  {selectedQuestion === q.question && (
                    <p className="p-3 bg-blue-50 dark:bg-gray-600 rounded">
                      {q.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Not Satisfied Section */}
            <div className="mt-6 pt-4 border-t">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Not finding what you&apos;re looking for?
              </p>
              <div className="flex space-x-4">
                <a 

                  href="mailto:your.email@example.com" 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Email Me
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-blue-500 px-4 py-2 rounded hover:bg-blue-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedItem(null);
                setSelectedQuestion(null);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTimeline;