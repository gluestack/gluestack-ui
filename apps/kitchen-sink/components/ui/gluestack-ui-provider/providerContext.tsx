import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'nativewind';

type ModeContextType = {
  colorMode: 'light' | 'dark';
  setColorMode: (mode: 'light' | 'dark') => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const contextValue: ModeContextType = {
    colorMode: (colorScheme as 'light' | 'dark') || 'light',
    setColorMode: (mode: 'light' | 'dark') => setColorScheme(mode),
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
