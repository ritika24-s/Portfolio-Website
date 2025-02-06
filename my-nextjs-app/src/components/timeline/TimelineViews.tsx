/*
 * File: src/components/timeline/TimelineViews.tsx
 * Purpose: Different view components for displaying timeline data
 * Dependencies: TimelineItem type, timelineData utilities
 */

import React, { useState } from 'react';
import { TimelineItem } from '@/types/timeline';
import { timelineData } from '@/data/timelineData';
import { groupItemsByYear, getAllUniqueSkills, searchTimelineItems } from '@/utils/TimelineUtils';
import { FileText, Briefcase, Code, Calendar, Tag } from 'lucide-react';


// Grid View Component
export const TimelineGrid = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {items.map(item => (
        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            {item.type === 'education' && <FileText className="w-6 h-6 text-blue-500 mr-2" />}
            {item.type === 'work' && <Briefcase className="w-6 h-6 text-green-500 mr-2" />}
            {item.type === 'project' && <Code className="w-6 h-6 text-purple-500 mr-2" />}
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{item.date}</p>
          <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
          {item.skills && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map(skill => (
                <span key={skill} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Calendar View Component
export const TimelineCalendar = () => {
  const groupedItems = groupItemsByYear();
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {Object.entries(groupedItems).reverse().map(([year, items]) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            {year}
          </h2>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Skills Matrix Component
export const SkillsMatrix = () => {
  const skills = getAllUniqueSkills();
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Tag className="w-6 h-6 mr-2" />
        Skills Overview
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div key={skill} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">{skill}</h3>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Used in {timelineData.filter(item => item.skills?.includes(skill)).length} projects
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Filter Bar Component
export const TimelineFilter = ({ 
  onFilterChange 
}: { 
  onFilterChange: (items: TimelineItem[]) => void 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'education' | 'work' | 'project'>('all');

  const handleFilter = () => {
    let filtered = [...timelineData];
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }
    
    if (searchTerm) {
      filtered = searchTimelineItems(searchTerm);
    }
    
    onFilterChange(filtered);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg flex-grow"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleFilter();
          }}
        />
        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value as 'all' | 'education' | 'work' | 'project');
            handleFilter();
          }}
        >
          <option value="all">All Types</option>
          <option value="education">Education</option>
          <option value="work">Work</option>
          <option value="project">Projects</option>
        </select>
      </div>
    </div>
  );
};

export const TimelineEvent = ({ event }: { event: TimelineEventType }) => {
  return (
    <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg shadow-md border border-blue-100 dark:border-slate-700 mb-4">
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
        {event.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-2">
        {event.description}
      </p>
      <div className="text-sm text-slate-500 dark:text-slate-400">
        {event.date}
      </div>
    </div>
  );
};