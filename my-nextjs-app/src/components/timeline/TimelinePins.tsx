/*
 * File: src/components/timeline/TimelinePins.tsx
 * Purpose: Interactive pins visualization with animated connecting paths
 * Dependencies: TimelineItem type, framer-motion
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineItem } from '@/types/timeline';
import TimelineModal from './TimelineModal';

interface TimelinePinsProps {
  items: TimelineItem[];
}

const TimelinePins = ({ items }: TimelinePinsProps) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const calculatePaths = () => {
      const pins = containerRef.current?.querySelectorAll('.timeline-pin');
      if (!pins) return;

      const newPaths: string[] = [];
      for (let i = 0; i < pins.length - 1; i++) {
        const pin1 = pins[i].getBoundingClientRect();
        const pin2 = pins[i + 1].getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();

        const x1 = pin1.left + pin1.width / 2 - containerRect.left;
        const y1 = pin1.top + pin1.height / 2 - containerRect.top;
        const x2 = pin2.left + pin2.width / 2 - containerRect.left;
        const y2 = pin2.top + pin2.height / 2 - containerRect.top;

        const midY = (y1 + y2) / 2;
        const cp1x = x1;
        const cp1y = midY;
        const cp2x = x2;
        const cp2y = midY;

        const path = `M ${x1} ${y1} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x2} ${y2}`;
        newPaths.push(path);
      }
      setPaths(newPaths);
    };

    calculatePaths();
    window.addEventListener('resize', calculatePaths);
    return () => window.removeEventListener('resize', calculatePaths);
  }, [items]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
        <div className="relative min-h-[800px]" ref={containerRef}>
          {/* SVG Layer for Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {paths.map((path, index) => (
              <motion.path
                key={index}
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8,8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Pins */}
          <div className="relative">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className={`timeline-pin absolute transform -translate-x-1/2 -translate-y-1/2
                  ${index % 2 === 0 ? 'left-1/3' : 'left-2/3'}`}
                style={{ top: `${(index + 1) * 150}px` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Pin Button */}
                <motion.button
                  onClick={() => setSelectedItem(item)}
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center
                    relative z-10 transition-colors
                    ${item.type === 'education' ? 'bg-blue-500' : 
                      item.type === 'work' ? 'bg-green-500' : 'bg-purple-500'}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.span
                    className="absolute w-full h-full rounded-full bg-current"
                    initial={{ scale: 1, opacity: 0.35 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut"
                    }}
                  />
                  <span className="text-white text-xl">•</span>
                </motion.button>

                {/* Label */}
                <motion.div
                  className={`absolute top-14 whitespace-nowrap
                    ${index % 2 === 0 ? 'left-0' : 'right-0'}
                    ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.date}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <TimelineModal
            item={selectedItem}
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelinePins;