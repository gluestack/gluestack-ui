import '@/global.css';
import { GluestackUIProvider } from '@repo/components/ui/gluestack-ui-provider';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
    setAppReady(true);
  }, []);

  if (!appReady) return null;

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system'>(
    'system'
  );

  return (
    <ThemeProvider value={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider mode={colorMode}>
        <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
        <Slot />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
