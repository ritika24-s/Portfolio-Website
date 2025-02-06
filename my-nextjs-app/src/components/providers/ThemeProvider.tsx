'use client'; // Mark as client component

import { createContext, useContext, useEffect, useState } from 'react';

// Define theme types
type Theme = 'dark' | 'light';

// Define context type
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create context with undefined as initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State to track current theme
  const [theme, setTheme] = useState<Theme>('light');

  // Effect to sync with system theme on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  // Function to toggle between themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}