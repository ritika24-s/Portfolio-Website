/*
 * File: src/components/common/PageTransition.tsx
 * Purpose: Page transition wrapper component
 */

import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface PageTransitionProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export const PageTransition = ({ children, isLoading }: PageTransitionProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};