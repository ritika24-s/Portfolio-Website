/*
 * File: src/app/interactive/page.tsx
 * Purpose: Interactive timeline page with proper spacing
 */

'use client';

import TimelinePins from '@/components/timeline/TimelinePins';
import { timelineData } from '@/data/timelineData';

export default function InteractivePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-16"> {/* Added pb-16 for bottom padding */}
      <TimelinePins items={timelineData} />
    </div>
  );
}