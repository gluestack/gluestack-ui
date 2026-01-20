import {
  ColorMode,
  getThemeFontSans,
  getThemeVars,
  themeConfigs,
  ThemeName,
} from '@/constants/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { View } from 'react-native';

interface AppThemeContextType {
  currentTheme: ThemeName;
  colorMode: ColorMode;
  isLight: boolean;
  isDark: boolean;
  setTheme: (theme: ThemeName) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  availableThemes: { name: ThemeName; display: string; description: string }[];
  fontSans: string;
}

const AppThemeContext = createContext<AppThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = '@app_theme';
const COLOR_MODE_STORAGE_KEY = '@app_color_mode';

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('default');
  // Ensure colorMode is always a valid ColorMode, defaulting to colorScheme or 'light'
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const scheme = colorScheme as ColorMode;
    return scheme === 'light' || scheme === 'dark' ? scheme : 'light';
  });
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Initialize theme from storage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        const savedMode = await AsyncStorage.getItem(COLOR_MODE_STORAGE_KEY);

        if (savedTheme) {
          setCurrentTheme(savedTheme as ThemeName);
        }
        if (savedMode) {
          setColorMode(savedMode as ColorMode);
          setColorScheme(savedMode as ColorMode);
        } else if (colorScheme) {
          setColorMode(colorScheme as ColorMode);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      } finally {
        setIsThemeLoaded(true);
      }
    };

    loadTheme();
  }, []);
 

  const isLight = useMemo(() => colorMode === 'light', [colorMode]);
  const isDark = useMemo(() => colorMode === 'dark', [colorMode]);

  const setTheme = useCallback(async (newTheme: ThemeName) => {
    setCurrentTheme(newTheme);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  }, []);

  const handleSetColorMode = useCallback(
    async (newMode: ColorMode) => {
      setColorMode(newMode);
      setColorScheme(newMode);
      try {
        await AsyncStorage.setItem(COLOR_MODE_STORAGE_KEY, newMode);
      } catch (error) {
        console.error('Error saving color mode:', error);
      }
    },
    [setColorScheme]
  );

  const toggleColorMode = useCallback(async () => {
    const newMode: ColorMode = colorMode === 'light' ? 'dark' : 'light';
    handleSetColorMode(newMode);
  }, [colorMode, handleSetColorMode]);

  const availableThemes = useMemo(() => {
    return Object.entries(themeConfigs).map(([key, config]) => ({
      name: key as ThemeName,
      display: config.name,
      description: config.description,
    }));
  }, []);

  const themeVars = useMemo(() => {
    return getThemeVars(currentTheme, colorMode);
  }, [currentTheme, colorMode]);

  const fontSans = useMemo(() => {
    return getThemeFontSans(currentTheme, colorMode);
  }, [currentTheme, colorMode]);

  const value = useMemo(
    () => ({
      currentTheme,
      colorMode,
      isLight,
      isDark,
      setTheme,
      setColorMode: handleSetColorMode,
      toggleColorMode,
      availableThemes,
      fontSans,
    }),
    [
      currentTheme,
      colorMode,
      isLight,
      isDark,
      setTheme,
      handleSetColorMode,
      toggleColorMode,
      availableThemes,
      fontSans,
    ]
  );
  if (!isThemeLoaded) {
    return null;
  }

  return (
    <AppThemeContext.Provider value={value}>
      <View style={themeVars} className="flex-1">
        {children}
      </View>
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
