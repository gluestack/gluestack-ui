import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { View, ActivityIndicator, useColorScheme } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Theme base names (without -light/-dark suffix)
export type ThemeBase =
  | 'default'
  | 'vercel'
  | 'violet'
  | 'supabase'
  | 'claude'
  | 'twitter';

export type ColorMode = 'light' | 'dark';

// Full theme name as registered in metro.config.js
export type FullThemeName =
  | 'default-light'
  | 'default-dark'
  | 'vercel-light'
  | 'vercel-dark'
  | 'violet-light'
  | 'violet-dark'
  | 'supabase-light'
  | 'supabase-dark'
  | 'claude-light'
  | 'claude-dark'
  | 'twitter-light'
  | 'twitter-dark'
  | 'light'
  | 'dark';

// Theme configuration with display info
export interface ThemeConfig {
  base: ThemeBase;
  displayName: string;
  description: string;
  colors: {
    light: string;
    dark: string;
  };
}

export const THEME_CONFIGS: Record<ThemeBase, ThemeConfig> = {
  default: {
    base: 'default',
    displayName: 'Default',
    description: 'Gluestack UI default theme',
    colors: {
      light: '#3b82f6',
      dark: '#8b5cf6',
    },
  },
  vercel: {
    base: 'vercel',
    displayName: 'Vercel',
    description: 'Minimalist black and white',
    colors: {
      light: '#000000',
      dark: '#ffffff',
    },
  },
  violet: {
    base: 'violet',
    displayName: 'Violet',
    description: 'Purple and violet tones',
    colors: {
      light: '#7033ff',
      dark: '#8c5cff',
    },
  },
  supabase: {
    base: 'supabase',
    displayName: 'Supabase',
    description: 'Fresh green accent colors',
    colors: {
      light: '#3ecf8e',
      dark: '#00623a',
    },
  },
  claude: {
    base: 'claude',
    displayName: 'Claude',
    description: 'Warm terracotta and earthy tones',
    colors: {
      light: '#c96442',
      dark: '#d97757',
    },
  },
  twitter: {
    base: 'twitter',
    displayName: 'Twitter',
    description: 'Classic Twitter blue',
    colors: {
      light: '#1e9df1',
      dark: '#1da1f2',
    },
  },
};

export const THEME_BASES: ThemeBase[] = Object.keys(
  THEME_CONFIGS
) as ThemeBase[];

interface AppThemeContextType {
  // Current theme base (e.g., 'vercel')
  themeBase: ThemeBase;
  // Current color mode
  colorMode: ColorMode;
  // Full theme name for Uniwind (e.g., 'vercel-light')
  fullThemeName: FullThemeName;
  // Convenience booleans
  isLight: boolean;
  isDark: boolean;
  // Theme setters
  setThemeBase: (theme: ThemeBase) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  // Available themes
  availableThemes: ThemeConfig[];
  // Current theme config
  currentThemeConfig: ThemeConfig;
}

const AppThemeContext = createContext<AppThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = '@app_theme_base';
const COLOR_MODE_STORAGE_KEY = '@app_color_mode';

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [themeBase, setThemeBaseState] = useState<ThemeBase>('default');
  const [colorMode, setColorModeState] = useState<ColorMode>(
    systemColorScheme === 'dark' ? 'dark' : 'light'
  );
  const [isLoaded, setIsLoaded] = useState(false);

  // Compute the full theme name
  const fullThemeName = useMemo(
    () => `${themeBase}-${colorMode}` as FullThemeName,
    [themeBase, colorMode]
  );

  // Apply theme to Uniwind whenever it changes
  useEffect(() => {
    if (isLoaded) {
      Uniwind.setTheme(fullThemeName);
    }
  }, [fullThemeName, isLoaded]);

  // Load saved theme on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const [savedTheme, savedMode] = await Promise.all([
          AsyncStorage.getItem(THEME_STORAGE_KEY),
          AsyncStorage.getItem(COLOR_MODE_STORAGE_KEY),
        ]);

        if (savedTheme && THEME_BASES.includes(savedTheme as ThemeBase)) {
          setThemeBaseState(savedTheme as ThemeBase);
        }

        if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
          setColorModeState(savedMode as ColorMode);
        } else if (systemColorScheme) {
          setColorModeState(systemColorScheme === 'dark' ? 'dark' : 'light');
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadTheme();
  }, [systemColorScheme]);

  const isLight = colorMode === 'light';
  const isDark = colorMode === 'dark';

  const setThemeBase = useCallback(async (newTheme: ThemeBase) => {
    setThemeBaseState(newTheme);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  }, []);

  const setColorMode = useCallback(async (newMode: ColorMode) => {
    setColorModeState(newMode);
    try {
      await AsyncStorage.setItem(COLOR_MODE_STORAGE_KEY, newMode);
    } catch (error) {
      console.error('Error saving color mode:', error);
    }
  }, []);

  const toggleColorMode = useCallback(() => {
    const newMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newMode);
  }, [colorMode, setColorMode]);

  const availableThemes = useMemo(() => Object.values(THEME_CONFIGS), []);

  const currentThemeConfig = useMemo(
    () => THEME_CONFIGS[themeBase],
    [themeBase]
  );

  const value = useMemo(
    () => ({
      themeBase,
      colorMode,
      fullThemeName,
      isLight,
      isDark,
      setThemeBase,
      setColorMode,
      toggleColorMode,
      availableThemes,
      currentThemeConfig,
    }),
    [
      themeBase,
      colorMode,
      fullThemeName,
      isLight,
      isDark,
      setThemeBase,
      setColorMode,
      toggleColorMode,
      availableThemes,
      currentThemeConfig,
    ]
  );

  // Show loading state while initializing
  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }
  return context;
};

// Re-export Uniwind hook for direct access if needed
export { useUniwind };
