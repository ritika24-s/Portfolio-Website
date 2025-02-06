/*
 * File: src/app/interactive/page.tsx
 * Purpose: Page component for the interactive timeline view
 * Route: /interactive
 */
'use client';

import TimelineContainer from '@/components/timeline/TimelineContainer';

export default function InteractivePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <TimelineContainer />
    </div>
  )
}
