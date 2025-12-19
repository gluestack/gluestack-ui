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

// Cookie helper functions
const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system'>(
    'dark'
  );

  const [mounted, setMounted] = useState(false);

  // Load theme from cookies after mount
  useEffect(() => {
    const savedColorMode = getCookie('colorMode') as
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
      setCookie('colorMode', mode);
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
