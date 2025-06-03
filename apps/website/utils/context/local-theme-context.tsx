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
type ThemeVars = {
  [key: `--color-primary-${number}`]: string;
};

const themeVars: Record<ThemeMode, ThemeVars> = {
  orange: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '128 128 128',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '249 115 22',
    '--color-primary-600': '234 88 12',
    '--color-primary-700': '194 65 12',
    '--color-primary-800': '154 52 18',
    '--color-primary-900': '124 45 18',
    '--color-primary-950': '8 8 8',
  },
  blue: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '128 128 128',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '14 165 233',
    '--color-primary-600': '2 132 199',
    '--color-primary-700': '3 105 161',
    '--color-primary-800': '7 89 133',
    '--color-primary-900': '12 74 110',
    '--color-primary-950': '8 8 8',
  },
  green: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '128 128 128',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '16 185 129',
    '--color-primary-600': '5 150 105',
    '--color-primary-700': '4 120 131',
    '--color-primary-800': '6 95 70',
    '--color-primary-900': '6 78 59',
    '--color-primary-950': '8 8 8',
  },
  violet: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '237 233 254',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '139 92 246',
    '--color-primary-600': '124 58 237',
    '--color-primary-700': '109 40 217',
    '--color-primary-800': '91 33 182',
    '--color-primary-900': '76 29 149',
    '--color-primary-950': '8 8 8',
  },
  cyan: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '207 250 254',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '6 182 212',
    '--color-primary-600': '8 145 178',
    '--color-primary-700': '14 116 144',
    '--color-primary-800': '21 94 117',
    '--color-primary-950': '8 8 8',
  },
  rose: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '255 228 230',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '244 63 94',
    '--color-primary-600': '225 29 72',
    '--color-primary-700': '190 18 60',
    '--color-primary-800': '159 18 57',
    '--color-primary-950': '8 8 8',
  },
  bluegray: {
    '--color-primary-0': '179 179 179',
    '--color-primary-50': '153 153 153',
    '--color-primary-100': '241 245 249',
    '--color-primary-200': '115 115 115',
    '--color-primary-300': '102 102 102',
    '--color-primary-400': '82 82 82',
    '--color-primary-500': '100 116 139',
    '--color-primary-600': '71 85 105',
    '--color-primary-700': '51 65 85',
    '--color-primary-800': '30 41 59',
    '--color-primary-900': '10 10 10',
    '--color-primary-950': '8 8 8',
  },
  default: {
    '--color-primary-900': '0 0 0',
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
