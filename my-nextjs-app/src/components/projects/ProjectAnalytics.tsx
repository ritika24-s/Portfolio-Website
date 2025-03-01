/*
 * File: src/components/projects/ProjectAnalytics.tsx
 * Purpose: Analytics dashboard for project statistics and metrics
 * Key Features:
    1. Summary Statistics:
        Total projects count
        Technologies used
        Features implemented
        Project complexity metrics
    2. Interactive Charts:
        Technology usage bar chart
        Projects timeline
        Frontend vs Backend distribution
        Project complexity breakdown
    3. Features:
        Responsive design
        Dark mode support
        Interactive tooltips
        Easy toggle between views
    4. Data Analysis:
        Technology trends
        Project complexity metrics
        Development timeline
        Stack distribution
 */

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { ProjectAnalyticsProps, TechUsage, YearlyProjects } from '@/types/project';


export const ProjectAnalytics = ({ projects }: ProjectAnalyticsProps) => {
  // Calculate technology usage across all projects
  const getTechUsage = (): TechUsage[] => {
    const techCount: Record<string, number> = {};
    projects.forEach(project => {
      project.skills.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1;
      });
    });
    return Object.entries(techCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  };

  // Calculate projects per year
  const getYearlyProjects = (): YearlyProjects[] => {
    const yearCount: Record<string, number> = {};
    projects.forEach(project => {
      const year = new Date(project.date).getFullYear().toString(); // Replace with actual project year
      yearCount[year] = (yearCount[year] || 0) + 1;
    });
    return Object.entries(yearCount)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => a.year.localeCompare(b.year));
  };

  // Get total stats
  const getTotalStats = () => {
    const totalTechs = new Set(projects.flatMap(p => p.skills)).size;
    const totalFeatures = projects.reduce((sum, p) => sum + p.features.length, 0);
    const totalChallenges = projects.reduce((sum, p) => sum + (p.challenges?.length || 0), 0);
    
    return { totalTechs, totalFeatures, totalChallenges };
  };

  const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];
  const stats = getTotalStats();
  const techData = getTechUsage();
  const yearlyData = getYearlyProjects();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {projects.length}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {stats.totalTechs}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Features Implemented</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {stats.totalFeatures}
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="space-y-8">
        {/* Technology Usage Chart */}
        <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Technology Usage</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={techData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Projects Timeline */}
        <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Projects Timeline</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ fill: '#8B5CF6', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Technology Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Frontend vs Backend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Frontend', value: projects.filter(p => p.techStack?.frontend).length },
                      { name: 'Backend', value: projects.filter(p => p.techStack?.backend).length }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {[0, 1].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Project Complexity</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'High', value: projects.filter(p => p.features.length > 5).length },
                      { name: 'Medium', value: projects.filter(p => p.features.length >= 3 && p.features.length <= 5).length },
                      { name: 'Low', value: projects.filter(p => p.features.length < 3).length }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {[0, 1, 2].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};