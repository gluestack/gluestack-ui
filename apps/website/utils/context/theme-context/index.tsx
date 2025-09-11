'use client';
import { createContext, useState, useEffect } from 'react';

type ThemeMode =
  | 'example'
  | 'dark'
  | 'violet'
  | 'cyan'
  | 'rose'
  | 'bluegray'
  | 'orange'
  | 'blue'
  | 'green'
  | 'fuchsia';

type ThemeContextType = {
  colorMode: 'light' | 'dark' | 'system';
  setColorMode: (mode: 'light' | 'dark' | 'system') => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colorMode: 'dark',
  setColorMode: () => {},
  themeMode: 'example',
  setThemeMode: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system'>(
    'dark'
  );
  const [themeMode, setThemeMode] = useState<ThemeMode>('example');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage after mount
  useEffect(() => {
    const savedColorMode = localStorage.getItem('colorMode') as
      | 'light'
      | 'dark'
      | 'system';
    const savedThemeMode = localStorage.getItem('themeMode') as ThemeMode;

    if (savedColorMode) {
      setColorMode(savedColorMode);
    }
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    }
    setMounted(true);
  }, []);

  const handleColorModeChange = (mode: 'light' | 'dark' | 'system') => {
    setColorMode(mode);
    if (mounted) {
      localStorage.setItem('colorMode', mode);
    }
  };

  const handleThemeModeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    if (mounted) {
      localStorage.setItem('themeMode', mode);
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
        themeMode,
        setThemeMode: handleThemeModeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
