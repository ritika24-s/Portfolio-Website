/*
 * File: src/app/interactive/page.tsx
 * Purpose: Interactive timeline page with proper spacing
 */

'use client';

import TimelinePins from '@/components/timeline/TimelinePins';
import { timelineData } from '@/data/timelineData';

export default function InteractivePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16"> {/* Added pt-16 for header */}
      <TimelinePins items={timelineData} />
    </div>
  );
}