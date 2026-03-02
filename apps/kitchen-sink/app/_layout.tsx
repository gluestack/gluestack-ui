import { customFonts } from '@/app/fonts';
import { SplashScreen } from '@/components/custom/splash-screen';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreenExpo from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import { AppThemeProvider, useAppTheme } from '../contexts/app-theme-context';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

function AppContent() {
  const { colorMode } = useAppTheme();
  return (
    <>
      <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
      <GluestackUIProvider mode={colorMode}>
        <Slot />
      </GluestackUIProvider>
    </>
  );
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts(customFonts);

  useEffect(() => {
    // Hide the native splash screen immediately
    SplashScreenExpo.hideAsync();

    // Simulate loading time - replace with actual initialization logic
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000); // Show splash screen for 1 second

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <AppThemeProvider>
          <AppContent />
        </AppThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
