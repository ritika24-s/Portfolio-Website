import type { Config } from "tailwindcss";

export default {
  // Specify which files Tailwind should scan for class names
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Scan pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scan components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scan app directory
  ],
  // Enable dark mode using class strategy (instead of media queries)
  darkMode: 'class',
  theme: {
    extend: {
      // Define custom colors that can be used throughout the application
      colors: {
        background: "var(--background)", // CSS variable for background color
        foreground: "var(--foreground)", // CSS variable for foreground color
      },
    },
  },
  plugins: [], // Any Tailwind plugins would go here
} satisfies Config; // TypeScript type checking for the config