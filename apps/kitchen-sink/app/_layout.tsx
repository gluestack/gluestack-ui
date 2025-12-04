import { Stack, useRouter } from 'expo-router';
import '../global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Pressable } from 'react-native';
import { ChevronLeftIcon, SunIcon, MoonIcon } from '@/components/ui/icon';
import { Icon } from '@/components/ui/icon';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Fab } from '@/components/ui/fab';
import { Text } from '@/components/ui/text';
import { SplashScreen } from '@/components/custom/splash-screen';
import * as SplashScreenExpo from 'expo-splash-screen';
import { AppThemeProvider } from '@/contexts/app-theme-context';

export const ColorModeContext = React.createContext<{ colorMode: 'light' | 'dark'; toggleColorMode?: () => void }>({ colorMode: 'light' });

SplashScreenExpo.preventAutoHideAsync();
const capitalize = (str: string) => {
  return str
    .replace(/components\/(.*?)\/index/, '$1')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};
const CustomBackButton = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      className="web:ml-2 ios:-ml-2 android:mr-4 py-2 pr-4 pl-2"
    >
      <Icon as={ChevronLeftIcon} size="xl" />
    </Pressable>
  );
};

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>('light');
  const handleColorMode = () => {
    setColorMode((prevMode: string) =>
      prevMode === 'light' ? 'dark' : 'light'
    );
  };
  useEffect(() => {
    // Hide the native splash screen immediately
    SplashScreenExpo.hideAsync();

    // Simulate loading time - replace with actual initialization logic
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000); // Show splash screen for 1.8 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }
  return (
    <>
      <StatusBar
        style="auto" //android
        backgroundColor={`${colorMode == 'light' ? '#F6F6F6' : '#272625'}`}
      />
      <ColorModeContext.Provider value={{ colorMode, toggleColorMode: handleColorMode }}>
        <AppThemeProvider>
          <GluestackUIProvider mode={colorMode}>
          <Stack
            screenOptions={({ route }) => ({
              animation: 'none',
              headerStyle: {
                backgroundColor: colorMode === 'light' ? '#FFFFFF' : '#000',
              },
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: colorMode === 'light' ? '#FFFFFF' : '#121212',
              },
              headerLeft: ({ canGoBack }) =>
                canGoBack ? <CustomBackButton /> : null,
              headerTitle: () => {
                const screenName = route.name || '';
                return (
                  <Text className="text-typography-900 text-xl font-bold">
                    {capitalize(screenName)}
                  </Text>
                );
              },
            })}
          >
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
          <Fab
            className="bottom-10 sm:right-10 right-6 p-4 z-0"
            onPress={handleColorMode}
          >
            <Icon
              as={colorMode === 'light' ? SunIcon : MoonIcon}
              className="text-typography-0"
            />
          </Fab>
        </GluestackUIProvider>
        </AppThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
