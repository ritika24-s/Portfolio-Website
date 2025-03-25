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
  Globe,
  Info
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
  const [showProficiencyInfo, setShowProficiencyInfo] = useState(false);
  
  const categories: { id: SkillCategory; icon: React.ReactNode; color: string }[] = [
    { id: 'nlp', icon: <BrainCircuit className="w-5 h-5" />, color: 'from-blue-500 to-blue-600' },
    { id: 'machine_learning', icon: <LineChart className="w-5 h-5" />, color: 'from-purple-500 to-purple-600' },
    { id: 'programming', icon: <Code className="w-5 h-5" />, color: 'from-green-500 to-green-600' },
    { id: 'backend', icon: <Server className="w-5 h-5" />, color: 'from-indigo-500 to-indigo-600' },
    { id: 'frontend', icon: <Layout className="w-5 h-5" />, color: 'from-pink-500 to-pink-600' },
    { id: 'databases', icon: <Database className="w-5 h-5" />, color: 'from-yellow-500 to-yellow-600' },
    { id: 'devops', icon: <Globe className="w-5 h-5" />, color: 'from-red-500 to-red-600' }
  ];
  
  const categoryInfo = getCategoryInfo(selectedCategory);
  const categorySkills = getSkillsByCategory(selectedCategory);
  const currentCategory = categories.find(c => c.id === selectedCategory);
  
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

  // Get color for proficiency level
  const getProficiencyColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-blue-100 dark:bg-blue-900/20 text-blue-500';
      case 2: return 'bg-green-100 dark:bg-green-900/20 text-green-500';
      case 3: return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-500';
      case 4: return 'bg-purple-100 dark:bg-purple-900/20 text-purple-500';
      case 5: return 'bg-red-100 dark:bg-red-900/20 text-red-500';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentCategory?.color || 'from-blue-500 to-purple-600'} p-6 text-white`}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
            <p className="text-blue-100">
              Expertise across NLP, machine learning, and software development
            </p>
          </div>
          <button
            onClick={() => setShowProficiencyInfo(!showProficiencyInfo)}
            className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
            aria-label="Show proficiency level information"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Proficiency Information Modal */}
      {showProficiencyInfo && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold mb-2">Proficiency Levels Explained</h3>
            <button
              onClick={() => setShowProficiencyInfo(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
              <span className="font-semibold">1 - Familiar:</span> Basic understanding
            </div>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">
              <span className="font-semibold">2 - Competent:</span> Working knowledge
            </div>
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
              <span className="font-semibold">3 - Proficient:</span> Regular application
            </div>
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
              <span className="font-semibold">4 - Advanced:</span> Deep understanding
            </div>
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">
              <span className="font-semibold">5 - Expert:</span> Comprehensive mastery
            </div>
          </div>
        </div>
      )}
      
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
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${getProficiencyColor(skill.level)}`}>
                        {skill.level}
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
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getProficiencyColor(selectedSkillDetails.level)}`}>
                    {getProficiencyLabel(selectedSkillDetails.level)} ({selectedSkillDetails.level}/5)
                  </div>
                </div>
              </div>
              
              {/* Skill meter */}
              <div className="mb-6">
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedSkillDetails.level / 5) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      selectedSkillDetails.level === 5 ? 'bg-red-500' :
                      selectedSkillDetails.level === 4 ? 'bg-purple-500' :
                      selectedSkillDetails.level === 3 ? 'bg-yellow-500' :
                      selectedSkillDetails.level === 2 ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}
                  />
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
              
              {/* Projects using this skill */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Where I&apos;ve Applied This Skill
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {selectedSkillDetails.category === 'nlp' ? 
                        "Built sentiment analysis and topic classification systems at Scorebuddy" :
                        selectedSkillDetails.category === 'machine_learning' ?
                        "Developed personality prediction models for my MSc thesis at Trinity College Dublin" :
                        selectedSkillDetails.category === 'programming' ?
                        "Created scalable applications across various projects and professional roles" :
                        selectedSkillDetails.category === 'backend' ?
                        "Designed microservices architecture for NLP pipelines at Scorebuddy" :
                        selectedSkillDetails.category === 'frontend' ?
                        "Built interactive user interfaces for SaaS applications" :
                        selectedSkillDetails.category === 'databases' ?
                        "Implemented database systems for data storage and retrieval in various projects" :
                        "Deployed and managed applications in cloud environments"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Select a skill to view details
              </p>
            </div>
          )}
        </div>

        {/* Category Skills Overview */}
        <div className="md:col-span-3 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">
            {categoryInfo.title} Skill Distribution
          </h3>
          <div className="relative h-10 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
            {[5, 4, 3, 2, 1].map(level => {
              // Count skills at this level in this category
              const skillsAtLevel = categorySkills.filter(s => s.level === level);
              const percentage = (skillsAtLevel.length / categorySkills.length) * 100;
              
              return (
                <motion.div
                  key={level}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5, delay: (5 - level) * 0.1 }}
                  className={`absolute h-full ${
                    level === 5 ? 'bg-red-500 left-0' :
                    level === 4 ? 'bg-purple-500' :
                    level === 3 ? 'bg-yellow-500' :
                    level === 2 ? 'bg-green-500' :
                    'bg-blue-500'
                  }`}
                  style={{ 
                    left: `${[5, 4, 3, 2, 1].slice(0, 5-level).reduce((acc, l) => {
                      return acc + (categorySkills.filter(s => s.level === l).length / categorySkills.length) * 100;
                    }, 0)}%` 
                  }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Familiar</span>
            <span>Competent</span>
            <span>Proficient</span>
            <span>Advanced</span>
            <span>Expert</span>
          </div>
        </div>
      </div>
    </div>
  );
};