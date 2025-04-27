import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update document classes and localStorage when theme changes
  useEffect(() => {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      document.body.classList.add('bg-[#0f1219]', 'text-gray-200');
      document.body.classList.remove('bg-gray-100', 'text-gray-800');
    } else {
      html.classList.remove('dark');
      document.body.classList.remove('bg-[#0f1219]', 'text-gray-200');
      document.body.classList.add('bg-gray-100', 'text-gray-800');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};