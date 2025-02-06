/*
 * File: src/components/projects/ProjectShowcase.tsx
 * Purpose: Detailed project showcase with gallery and technical details
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, Code, Layout, 
  ChevronLeft, ChevronRight, Maximize, 
  Terminal, Database, Server, Mail,
  X
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectShowcaseProps, ProjectDetails } from '@/types/project';



export const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Card */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                    +{project.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
            // onClick={(e) => {
            //   if (e.target === e.currentTarget) setSelectedProject(null);
            // }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="min-h-screen px-4 py-8">
              <div 
                className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button - Add this button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                {/* Image Gallery */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setShowFullImage(true)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white"
                  >
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                    <div className="flex gap-4">
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <FaGithub className="w-6 h-6" />
                        </a>

                      )}
                      {selectedProject.links.demo && (
                        <a
                          href={selectedProject.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technical Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {selectedProject.technical.frontend && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Layout className="w-5 h-5 mr-2" />
                          Frontend
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.technical.frontend.map((tech) => (
                            <li key={tech} className="flex items-center">
                              <Code className="w-4 h-4 mr-2 text-blue-500" />
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProject.technical.backend && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Server className="w-5 h-5 mr-2" />
                          Backend
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.technical.backend.map((tech) => (
                            <li key={tech} className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-green-500" />
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProject.technical.database && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Database className="w-5 h-5 mr-2" />
                          Database
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.technical.database.map((tech) => (
                            <li key={tech} className="flex items-center">
                              <Database className="w-4 h-4 mr-2 text-purple-500" />
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Features and Challenges */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-2 mt-0.5">
                              {index + 1}
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-2 mt-0.5">
                              {index + 1}
                            </span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Image Modal */}
      <AnimatePresence>
        {showFullImage && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={() => setShowFullImage(false)}
          >
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-center mt-16 pb-12">
  <h3 className="text-xl mb-4">Interested in working together?</h3>
  <Link 
    href="/contact"
    className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg 
               hover:bg-blue-600 transition-all transform hover:-translate-y-1"
  >
    <Mail className="w-5 h-5 mr-2" />
    Let&apos;s Talk
  </Link>
</div>
    </div>

  );
};