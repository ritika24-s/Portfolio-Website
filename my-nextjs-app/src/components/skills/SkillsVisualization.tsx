/*
 * File: src/components/skills/SkillsVisualization.tsx
 * Purpose: Visual representation of skills with interactive elements
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  ChevronRight, 
  Code, 
  Database, 
  LineChart, 
  Server, 
  Layout, 
  Globe 
} from 'lucide-react';
import { 
  skillsData, 
  getSkillsByCategory, 
  getCategoryInfo, 
  SkillCategory 
} from '@/data/skillsData';

export const SkillsVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('nlp');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  const categories: { id: SkillCategory; icon: React.ReactNode }[] = [
    { id: 'nlp', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'machine_learning', icon: <LineChart className="w-5 h-5" /> },
    { id: 'programming', icon: <Code className="w-5 h-5" /> },
    { id: 'backend', icon: <Server className="w-5 h-5" /> },
    { id: 'frontend', icon: <Layout className="w-5 h-5" /> },
    { id: 'databases', icon: <Database className="w-5 h-5" /> },
    { id: 'devops', icon: <Globe className="w-5 h-5" /> }
  ];
  
  const categoryInfo = getCategoryInfo(selectedCategory);
  const categorySkills = getSkillsByCategory(selectedCategory);
  
  const getSkillDetails = (skillName: string) => {
    return skillsData.find(skill => skill.name === skillName);
  };
  
  const selectedSkillDetails = selectedSkill ? getSkillDetails(selectedSkill) : null;
  
  // Get proficiency level label
  const getProficiencyLabel = (level: number) => {
    switch(level) {
      case 1: return 'Familiar';
      case 2: return 'Competent';
      case 3: return 'Proficient';
      case 4: return 'Advanced';
      case 5: return 'Expert';
      default: return 'Unknown';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
        <p className="text-blue-100">
          Expertise across NLP, machine learning, and software development
        </p>
      </div>
      
      {/* Categories */}
      <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        <div className="flex p-2 min-w-max">
          {categories.map(category => {
            const info = getCategoryInfo(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center p-4 min-w-[100px] rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className={`p-2 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  {category.icon}
                </div>
                <span className="mt-2 text-sm font-medium">
                  {info.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Category Description */}
        <div className="md:col-span-3">
          <h3 className="text-xl font-semibold mb-2">{categoryInfo.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {categoryInfo.description}
          </p>
        </div>
        
        {/* Skills List */}
        <div className="md:col-span-1">
          <div className="space-y-4">
            {categorySkills.map(skill => (
              <motion.button
                key={skill.name}
                onClick={() => setSelectedSkill(skill.name)}
                whileHover={{ x: 5 }}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  selectedSkill === skill.name
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <div 
                          className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium"
                          style={{
                            backgroundColor: `rgba(59, 130, 246, ${skill.level * 0.2})`,
                            color: skill.level >= 3 ? 'white' : 'inherit'
                          }}
                        >
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 text-left">
                    <h4 className="text-sm font-medium">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {getProficiencyLabel(skill.level)}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 ${
                  selectedSkill === skill.name ? 'text-blue-500' : 'text-gray-400'
                }`} />
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Skill Details */}
        <div className="md:col-span-2">
          {selectedSkillDetails ? (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{selectedSkillDetails.name}</h3>
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-8 rounded-sm ${
                          level <= selectedSkillDetails.level
                            ? 'bg-blue-500'
                            : 'bg-gray-200 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                    {getProficiencyLabel(selectedSkillDetails.level)}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedSkillDetails.description}
              </p>
              
              {selectedSkillDetails.related && selectedSkillDetails.related.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Related Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkillDetails.related.map(related => (
                      <span 
                        key={related}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Select a skill to view details
              </p>
            </div>
          )}
        </div>

        {/* Skill Levels Legend */}
        <div className="md:col-span-3 border-t border-gray-200 dark:border-gray-700 pt-6">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
            Proficiency Levels
          </h4>
          <div className="flex flex-wrap gap-4 justify-between">
            {[
              { level: 1, label: 'Familiar', description: 'Basic understanding and limited practical experience' },
              { level: 2, label: 'Competent', description: 'Working knowledge with some practical application' },
              { level: 3, label: 'Proficient', description: 'Solid understanding and regular practical application' },
              { level: 4, label: 'Advanced', description: 'Deep understanding with extensive practical experience' },
              { level: 5, label: 'Expert', description: 'Comprehensive expertise and mastery through professional work' }
            ].map((item) => (
              <div key={item.level} className="flex items-start space-x-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: `rgba(59, 130, 246, ${item.level * 0.2})`,
                    color: item.level >= 3 ? 'white' : 'inherit'
                  }}
                >
                  {item.level}
                </div>
                <div>
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};