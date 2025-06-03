import React, { createContext, useContext, useState, useEffect } from 'react';

type ModeContextType = {
  colorMode: 'light' | 'dark';
  setColorMode: (mode: 'light' | 'dark') => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{
  children: React.ReactNode;
  initialMode?: 'light' | 'dark';
}> = ({ children, initialMode = 'light' }) => {
  const [colorMode, setColorModeState] = useState<'light' | 'dark'>(
    initialMode
  );

  useEffect(() => {
    // Set the color mode on the document element
    const documentElement = document.documentElement;
    if (documentElement) {
      documentElement.classList.remove('light', 'dark');
      documentElement.classList.add(colorMode);
      documentElement.style.colorScheme = colorMode;
    }
  }, [colorMode]);

  const setColorMode = (mode: 'light' | 'dark') => {
    setColorModeState(mode);
  };

  const contextValue: ModeContextType = {
    colorMode,
    setColorMode,
  };

  return (
    <ModeContext.Provider value={contextValue}>{children}</ModeContext.Provider>
  );
};

export const useMode = (): ModeContextType => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
