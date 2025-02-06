/*
 * File: src/components/common/LoadingSpinner.tsx
 * Purpose: Reusable loading spinner component
 * Key features added:
   1. Loading States:
      - Smooth page transition with loading spinner
      - Fade-in animation for content
      - Loading state management
 */


import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative w-16 h-16">
        {/* Outer circle */}
        <div className="absolute w-full h-full border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
        {/* Spinning circle */}
        <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};