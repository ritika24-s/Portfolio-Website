/*
 * File: src/components/timeline/TimelineContainer.tsx
 * Purpose: Main container component that manages different timeline views
 * Dependencies: TimelineViews, TimelinePins, timelineData
 */

import React, { useState } from 'react';
import { Layout, Grid, Calendar as CalendarIcon, Hash } from 'lucide-react';
import { timelineData } from '@/data/timelineData';
import { TimelineItem } from '@/types/timeline';
import { 
  TimelineGrid, 
  TimelineCalendar, 
  SkillsMatrix,
  TimelineFilter 
} from './TimelineViews';
import TimelinePins from './TimelinePins';

type ViewType = 'interactive' | 'grid' | 'calendar' | 'skills';

const TimelineContainer = () => {
    const [viewType, setViewType] = useState<ViewType>('interactive');
    const [filteredItems, setFilteredItems] = useState<TimelineItem[]>(timelineData);
  
    const handleFilterChange = (items: TimelineItem[]) => {
      setFilteredItems(items);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* View Toggle Buttons */}
        <div className="bg-white dark:bg-gray-800 p-4 sticky top-0 z-10 shadow-md">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  onClick={() => setViewType('interactive')}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    viewType === 'interactive' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Layout className="w-4 h-4 mr-2" />
                  Interactive
                </button>
                <button
                  onClick={() => setViewType('grid')}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    viewType === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Grid className="w-4 h-4 mr-2" />
                  Grid
                </button>
                <button
                  onClick={() => setViewType('calendar')}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    viewType === 'calendar' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Calendar
                </button>
                <button
                  onClick={() => setViewType('skills')}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    viewType === 'skills' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Hash className="w-4 h-4 mr-2" />
                  Skills
                </button>
              </div>
            </div>
            
            {/* Show filter bar for grid and calendar views */}
            {(viewType === 'grid' || viewType === 'calendar') && (
              <TimelineFilter onFilterChange={handleFilterChange} />
            )}
          </div>
        </div>
  
        {/* Content Area */}
        <div className="max-w-7xl mx-auto py-8">
          {viewType === 'interactive' && <TimelinePins items={timelineData} />}
          {viewType === 'grid' && <TimelineGrid items={filteredItems} />}
          {viewType === 'calendar' && <TimelineCalendar />}
          {viewType === 'skills' && <SkillsMatrix />}
        </div>
      </div>
    );
  };
  
  export default TimelineContainer;