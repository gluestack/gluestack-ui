import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { Slot, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Uniwind } from 'uniwind';
import { SafeAreaListener } from 'react-native-safe-area-context';
import { ThemeSwitcher } from '@/components/custom/ThemeSwitcher';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const pathname = usePathname();
  const [themeLoaded, setThemeLoaded] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('app-theme');
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
          Uniwind.setTheme(savedTheme as 'light' | 'dark' | 'system');
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      } finally {
        setThemeLoaded(true);
      }
    };

    loadTheme();
  }, []);

  // Don't render until theme is loaded to prevent flash
  if (!themeLoaded) {
    return null;
  }

  return (
    <SafeAreaListener
      onChange={({ insets }) => {
        Uniwind.updateInsets(insets);
      }}
    >
      <ThemeProvider value={Uniwind.currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GluestackUIProvider>
          <Slot />
          {pathname === '/' && <ThemeSwitcher />}
        </GluestackUIProvider>
      </ThemeProvider>
    </SafeAreaListener>
  );
}
