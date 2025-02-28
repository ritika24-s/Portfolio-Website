import React, { useEffect, useState } from 'react';

// Function to toggle between light and dark mode
const toggleDarkMode = () => {
  const newDarkMode = !isDarkMode;
  setIsDarkMode(newDarkMode);
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', String(newDarkMode));
  
  // Apply dark mode classes to root elements
  if (newDarkMode) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark:bg-gray-900', 'dark:text-white');
  }
};

// Effect to initialize dark mode from localStorage
useEffect(() => {
  // Check if we're in the browser environment
  if (typeof window !== 'undefined') {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    
    // Apply initial dark mode classes
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900', 'dark:text-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark:bg-gray-900', 'dark:text-white');
    }
  }
}, []); 