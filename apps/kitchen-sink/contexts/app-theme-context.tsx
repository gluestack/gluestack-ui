import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { ColorModeContext } from '@/app/_layout';
import { ThemeName, themes } from '@/constants/themes';

interface AppThemeContextType {
  isDark: boolean;
  toggleColorMode: () => void;
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: typeof themes;
}

const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorMode, toggleColorMode: toggleColorModeFromContext } = useContext(ColorModeContext) as { colorMode: 'light' | 'dark'; toggleColorMode?: () => void };
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('default');
  
  const isDark = colorMode === 'dark';
  
  const toggleColorMode = useCallback(() => {
    if (toggleColorModeFromContext) {
      toggleColorModeFromContext();
    }
  }, [toggleColorModeFromContext]);

  const setTheme = useCallback((theme: ThemeName) => {
    setCurrentTheme(theme);
    // Here you could apply theme-specific styling if needed
  }, []);

  const value = useMemo(
    () => ({
      isDark,
      toggleColorMode,
      currentTheme,
      setTheme,
      availableThemes: themes,
    }),
    [isDark, toggleColorMode, currentTheme, setTheme]
  );

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(AppThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }
  return context;
}
