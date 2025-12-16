'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

type ModeContextType = {
  colorMode: ThemeMode;
  setColorMode: (mode: ThemeMode) => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{
  defaultMode?: ThemeMode;
  children: React.ReactNode;
}> = ({ defaultMode = 'dark', children }) => {
  const [colorMode, setColorModeState] = useState<ThemeMode>(defaultMode);

  const setColorMode = async (mode: ThemeMode) => {
    setColorModeState(mode);

    // Update cookie via API route
    try {
      await fetch('/api/theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: mode }),
      });

      // Update html element class immediately for visual feedback
      const htmlElement = document.documentElement;
      htmlElement.classList.remove('dark', 'light');
      htmlElement.classList.add(mode);
    } catch (error) {
      console.error('Failed to update theme cookie:', error);
    }
  };

  const value = useMemo(
    () => ({
      colorMode,
      setColorMode,
    }),
    [colorMode]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export const useMode = () => {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return ctx;
};
