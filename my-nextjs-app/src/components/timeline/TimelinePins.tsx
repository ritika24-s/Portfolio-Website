import React, { useState } from 'react';
import { TimelineItem } from '@/types/timeline';

interface TimelinePinsProps {
  items: TimelineItem[];
}

const TimelinePins = ({ items }: TimelinePinsProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-16 text-center">Professional Journey</h2>
      
      <div className="relative flex flex-col">
        {items.map((item, index) => (
          <div key={item.id} className="mb-20">
            {/* Left or right positioning based on index */}
            <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Content card */}
              <div className="w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative">
                {/* Timeline marker */}
                <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-1/2 -translate-y-1/2 w-8 h-8 rounded-full z-10 flex items-center justify-center cursor-pointer ${
                  item.type === 'education' ? 'bg-blue-500' : 
                  item.type === 'work' ? 'bg-green-500' : 'bg-purple-500'
                }`} onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}>
                  <span className="text-white font-bold">•</span>
                </div>
                
                {/* Zigzag line */}
                {index < items.length - 1 && (
                  <div className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} top-1/2 h-20 w-[70%] border-b-4 border-dashed border-gray-300 dark:border-gray-600 ${
                    index % 2 === 0 ? 'border-r-4 rounded-br-3xl' : 'border-l-4 rounded-bl-3xl'
                  }`} style={{ 
                    marginTop: '10px',
                    transform: `${index % 2 === 0 ? 'translateX(100%)' : 'translateX(-100%)'}` 
                  }}></div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                
                {/* Show details if selected */}
                {selectedItem === item.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {item.skills && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map(skill => (
                            <span key={skill} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {item.location && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-1">Location</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.location}</p>
                      </div>
                    )}
                    
                    {item.links && Object.keys(item.links).length > 0 && (
                      <div className="flex gap-3">
                        {item.links.website && (
                          <a href={item.links.website} target="_blank" rel="noopener noreferrer" 
                             className="text-blue-500 hover:underline">Website</a>
                        )}
                        {item.links.github && (
                          <a href={item.links.github} target="_blank" rel="noopener noreferrer"
                             className="text-blue-500 hover:underline">GitHub</a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePins;