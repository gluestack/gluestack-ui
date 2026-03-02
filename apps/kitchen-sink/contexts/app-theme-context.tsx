import {
  ColorMode,
  getThemeFontSans,
  getThemeVars,
  themeConfigs,
  ThemeName,
} from '@/constants/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, VariableContextProvider } from 'nativewind';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Platform, View } from 'react-native';

interface AppThemeContextType {
  currentTheme: ThemeName;
  colorMode: ColorMode;
  resolvedColorMode: 'light' | 'dark';
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

/** On web, dark mode is controlled by the `dark` class on <html>.
 *  Calling nativewind's setColorScheme on web fails because
 *  react-native-web's Appearance doesn't implement setColorScheme. */
function applyColorModeToWeb(mode: ColorMode) {
  if (Platform.OS === 'web' && typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }
}

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('default');
  const [colorMode, setColorMode] = useState<ColorMode>('system');
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
        if (
          savedMode &&
          (savedMode === 'light' ||
            savedMode === 'dark' ||
            savedMode === 'system')
        ) {
          setColorMode(savedMode as ColorMode);
          if (savedMode !== 'system') {
            const mode = savedMode as 'light' | 'dark';
            if (Platform.OS === 'web') {
              applyColorModeToWeb(mode);
            } else {
              setColorScheme(mode);
            }
          } else {
            // For system mode, let the device decide
            if (Platform.OS === 'web') {
              applyColorModeToWeb(colorScheme === 'dark' ? 'dark' : 'light');
            }
          }
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      } finally {
        setIsThemeLoaded(true);
      }
    };

    loadTheme();
  }, [colorScheme]);

  const resolvedColorMode = useMemo<'light' | 'dark'>(() => {
    if (colorMode === 'system') {
      return colorScheme === 'dark' ? 'dark' : 'light';
    }
    return colorMode;
  }, [colorMode, colorScheme]);

  const isLight = useMemo(
    () => resolvedColorMode === 'light',
    [resolvedColorMode]
  );
  const isDark = useMemo(
    () => resolvedColorMode === 'dark',
    [resolvedColorMode]
  );

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
      if (newMode !== 'system') {
        if (Platform.OS === 'web') {
          applyColorModeToWeb(newMode);
        } else {
          setColorScheme(newMode);
        }
      } else {
        // For system mode, let the device decide
        if (Platform.OS === 'web') {
          applyColorModeToWeb(colorScheme === 'dark' ? 'dark' : 'light');
        } else {
          setColorScheme('light'); // Reset to light, nativewind will follow system
        }
      }
      try {
        await AsyncStorage.setItem(COLOR_MODE_STORAGE_KEY, newMode);
      } catch (error) {
        console.error('Error saving color mode:', error);
      }
    },
    [setColorScheme, colorScheme]
  );

  const toggleColorMode = useCallback(async () => {
    let newMode: ColorMode;
    if (colorMode === 'system') {
      newMode = resolvedColorMode === 'light' ? 'dark' : 'light';
    } else {
      newMode = colorMode === 'light' ? 'dark' : 'light';
    }
    handleSetColorMode(newMode);
  }, [colorMode, resolvedColorMode, handleSetColorMode]);

  const availableThemes = useMemo(() => {
    return Object.entries(themeConfigs).map(([key, config]) => ({
      name: key as ThemeName,
      display: config.name,
      description: config.description,
    }));
  }, []);

  const themeVars = useMemo(() => {
    return getThemeVars(currentTheme, colorMode, colorScheme);
  }, [currentTheme, colorMode, colorScheme]);

  const fontSans = useMemo(() => {
    return getThemeFontSans(currentTheme, colorMode, colorScheme);
  }, [currentTheme, colorMode, colorScheme]);

  const value = useMemo(
    () => ({
      currentTheme,
      colorMode,
      resolvedColorMode,
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
      resolvedColorMode,
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
      <VariableContextProvider value={themeVars}>
        <View className="flex-1">{children}</View>
      </VariableContextProvider>
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
