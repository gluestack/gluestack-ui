'use client';
import { createContext, useState, useEffect } from 'react';



type ThemeContextType = {
  colorMode: 'light' | 'dark' | 'system';
  setColorMode: (mode: 'light' | 'dark' | 'system') => void;

};

const ThemeContext = createContext<ThemeContextType>({
  colorMode: 'dark',
  setColorMode: () => {},
 
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system'>(
    'dark'
  );

  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage after mount
  useEffect(() => {
    const savedColorMode = localStorage.getItem('colorMode') as
      | 'light'
      | 'dark'
      | 'system';
   

    if (savedColorMode) {
      setColorMode(savedColorMode);
    }
  
    setMounted(true);
  }, []);

  const handleColorModeChange = (mode: 'light' | 'dark' | 'system') => {
    setColorMode(mode);
    if (mounted) {
      localStorage.setItem('colorMode', mode);
    }
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode: handleColorModeChange,
     
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
