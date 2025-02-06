/*
 * File: src/components/search/SearchAndFilter.tsx
 * Purpose: Search and filter functionality for portfolio items
 * Key features added:
    1. Search Functionality:
        Real-time search across all content
        Search in titles, descriptions, and skills
        Clear visual feedback
        Keyboard accessible
    2. Skill Filtering:
        Toggle filter visibility
        Multi-select skill filters
        Visual feedback for active filters
        Easy filter removal
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { TimelineItem } from '@/types/timeline';
import { getAllUniqueSkills } from '@/utils/TimelineUtils';
import { trackSearchAnalytics, trackFilterAnalytics } from '@/utils/analytics';

// Add debounce utility
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

interface SearchAndFilterProps {
  onFilterChange: (filteredItems: TimelineItem[]) => void;
  items: TimelineItem[];
}

interface FilterPreset {
  id: string;
  label: string;
  filter: (items: TimelineItem[]) => TimelineItem[];
}

export const SearchAndFilter = ({ onFilterChange, items }: SearchAndFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const uniqueSkills = getAllUniqueSkills();
  const [activePreset, setActivePreset] = useState<string | null>(null);

  // Track search with debounce
  const trackSearch = useCallback(
    debounce((term: string, resultCount: number) => {
      trackSearchAnalytics({
        term,
        resultCount,
        timestamp: new Date().toISOString()
      });
    }, 1000),
    []
  );

  // Track filter usage
  const trackFilter = useCallback((filterType: string, value: string | string[]) => {
    trackFilterAnalytics({
      filterType,
      value,
      timestamp: new Date().toISOString()
    });
  }, []);

  // Define filter presets
  const filterPresets: FilterPreset[] = [
    {
      id: 'technical',
      label: 'Technical Skills',
      filter: (items) => items.filter(item => 
        item.skills?.some(skill => 
          ['Python', 'JavaScript', 'React', 'Node.js', 'Machine Learning'].includes(skill)
        )
      )
    },
    {
      id: 'recent',
      label: 'Recent (Last 2 Years)',
      filter: (items) => {
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
        return items.filter(item => new Date(item.date) >= twoYearsAgo);
      }
    },
    {
      id: 'projects',
      label: 'All Projects',
      filter: (items) => items.filter(item => item.type === 'project')
    },
    {
      id: 'nlp',
      label: 'NLP Related',
      filter: (items) => items.filter(item => 
        item.skills?.some(skill => 
          ['NLP', 'Machine Learning', 'Python', 'Transformers', 'BERT'].includes(skill)
        ) || 
        item.description.toLowerCase().includes('nlp') ||
        item.description.toLowerCase().includes('natural language')
      )
    }
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setActivePreset(null);
    
    let filtered = items;
    
    if (term.trim()) {
      const searchTerms = term.toLowerCase().split(' ');
      filtered = items.filter(item => {
        const searchableText = `
          ${item.title} 
          ${item.description} 
          ${item.type} 
          ${item.skills?.join(' ') || ''}
        `.toLowerCase();
        
        return searchTerms.every(term => searchableText.includes(term));
      });
    }

    // Track search analytics
    trackSearch(term, filtered.length);
    onFilterChange(filtered);
  };

  const toggleSkill = (skill: string) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    
    setSelectedSkills(updatedSkills);
    
    // Track skill filter usage
    trackFilter('skill', skill);
    
    filterItems(searchTerm, updatedSkills);
  };

  const filterItems = (term: string, skills: string[]) => {
    let filtered = [...items];

    // Search term filter
    if (term) {
      const searchLower = term.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.skills?.some(skill => skill.toLowerCase().includes(searchLower))
      );
    }

    // Skills filter
    if (skills.length > 0) {
      filtered = filtered.filter(item =>
        item.skills?.some(skill => skills.includes(skill))
      );
    }

    onFilterChange(filtered);
  };

  // Apply filter preset
  const applyPreset = (presetId: string) => {
    const preset = filterPresets.find(p => p.id === presetId);
    if (!preset) return;

    setActivePreset(presetId);
    setSearchTerm('');
    
    const filtered = preset.filter(items);
    
    // Track preset filter usage
    trackFilter('preset', presetId);
    
    onFilterChange(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setActivePreset(null);
    onFilterChange(items);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by title, skills, or description..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {(searchTerm || activePreset) && (
          <button
            onClick={clearFilters}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Presets */}
      <div className="flex flex-wrap gap-2">
        {filterPresets.map(preset => (
          <button
            key={preset.id}
            onClick={() => applyPreset(preset.id)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              activePreset === preset.id
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center">
              <Filter className="w-3 h-3 mr-1" />
              {preset.label}
            </span>
          </button>
        ))}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 
                   dark:hover:text-blue-400 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>Filter by Skills</span>
        </button>
        {(searchTerm || selectedSkills.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center space-x-1"
          >
            <X className="w-4 h-4" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Skills Filter */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {uniqueSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedSkills.includes(skill)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map(skill => (
            <span
              key={skill}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 
                       dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
            >
              {skill}
              <button
                onClick={() => toggleSkill(skill)}
                className="ml-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};