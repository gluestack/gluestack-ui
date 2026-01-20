import React, { createContext, useContext, useState, useMemo } from 'react';

type ThemeMode =
  | 'orange'
  | 'blue'
  | 'green'
  | 'violet'
  | 'cyan'
  | 'rose'
  | 'bluegray'
  | 'default';

type LocalThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

const LocalThemeContext = createContext<LocalThemeContextType | undefined>(
  undefined
);

// Define a type for our CSS variables
type ThemeVars = Partial<Record<`--primary`, string>>;

const themeVars: Record<ThemeMode, ThemeVars> = {
  default: {}, // Default mode doesn't override primary color
  orange: {
    '--primary': '249 115 22', // #F97316
  },
  blue: {
    '--primary': '14 165 233', // #0EA5E9
  },
  green: {
    '--primary': '16 185 129', // #10B981
  },
  violet: {
    '--primary': '139 92 246', // #8B5CF6
  },
  cyan: {
    '--primary': '6 182 212', // #06B6D4
  },
  rose: {
    '--primary': '244 63 94', // #F43F5E
  },
  bluegray: {
    '--primary': '100 116 139', // #64748B
  },
};

export const LocalThemeProvider: React.FC<{
  initialTheme?: ThemeMode;
  children: React.ReactNode;
}> = ({ initialTheme = 'default', children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialTheme);

  const style = useMemo(() => {
    const vars = themeVars[themeMode];
    return Object.fromEntries(
      Object.entries(vars).map(([k, v]) => [k, v])
    ) as React.CSSProperties;
  }, [themeMode]);

  return (
    <LocalThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <div style={style}>{children}</div>
    </LocalThemeContext.Provider>
  );
};

export const useLocalTheme = () => {
  const ctx = useContext(LocalThemeContext);
  if (!ctx)
    throw new Error('useLocalTheme must be used within a LocalThemeProvider');
  return ctx;
};
