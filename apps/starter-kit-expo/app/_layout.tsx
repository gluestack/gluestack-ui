import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { Slot, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { SafeAreaListener } from 'react-native-safe-area-context';
import { Uniwind } from 'uniwind';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [styleLoaded, setStyleLoaded] = useState(false);
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
      <GluestackUIProvider>
        <Slot />
        {pathname === '/' && <ThemeSwitcher />}
      </GluestackUIProvider>
    </SafeAreaListener>
  );
}
