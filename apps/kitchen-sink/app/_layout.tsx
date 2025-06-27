import { Stack, usePathname, useRouter } from 'expo-router';
import '../global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Pressable } from 'react-native';
import { ChevronLeftIcon, SunIcon, MoonIcon } from '@/components/ui/icon';
import { Icon } from '@/components/ui/icon';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Fab } from '@/components/ui/fab';
import { Text } from '@/components/ui/text';
export const ColorModeContext = React.createContext({});

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
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>('light');
  const pathname = usePathname();
  const handleColorMode = () => {
    setColorMode((prevMode: string) =>
      prevMode === 'light' ? 'dark' : 'light'
    );
  };
  return (
    <>
      <StatusBar
        style="auto" //android
        backgroundColor={`${colorMode == 'light' ? '#F6F6F6' : '#272625'}`}
      />
      <ColorModeContext.Provider value={{ colorMode }}>
        <GluestackUIProvider mode={colorMode}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: colorMode === 'light' ? '#FFFFFF' : '#000',
              },
              headerShadowVisible: false,
              contentStyle: {
                borderTopWidth: 1,
                borderTopColor: colorMode === 'light' ? '#E6E6E6' : '#414141',
              },
              headerLeft: ({ canGoBack }) =>
                canGoBack ? <CustomBackButton /> : null,
              headerTitle: (props) => {
                return (
                  <Text className="text-typography-900 text-xl font-bold">
                    {capitalize(pathname.split('/').pop() || '')}
                  </Text>
                );
              },
            }}
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
      </ColorModeContext.Provider>
    </>
  );
}
