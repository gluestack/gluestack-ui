/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { GluestackUIProvider } from './gluestack-ui-components';
import { config } from './gluestack-ui.config';
import { SSRProvider } from '@react-native-aria/utils';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import './styles';
import { styled } from '@gluestack-style/react';
import HomestayPage from './kitchensink-components/HomestayPage';
// import HomestayPage from './kitchensink-components/HomestayPage';

const Box = styled(View, {
  bg: '$red500',
  padding: '$10',
});

type ThemeContextType = {
  colorMode?: 'dark' | 'light';
  toggleColorMode?: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: 'light',
  toggleColorMode: () => {},
});

export default function App() {
  const [colorMode, setColorMode] = React.useState<'dark' | 'light'>('light');

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleColorMode = async () => {
    // colorMode === 'light' ? setColorMode('dark') : setColorMode('light');
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* top SafeAreaView */}
      <SafeAreaView
        style={{
          backgroundColor: colorMode === 'light' ? '#E5E5E5' : '#262626',
        }}
      />
      {/* bottom SafeAreaView */}
      <SafeAreaView
        style={{
          ...styles.container,
          backgroundColor: colorMode === 'light' ? 'white' : '#171717',
        }}
      >
        {/* gluestack-ui provider */}
        <SSRProvider>
          <GluestackUIProvider config={config.theme} colorMode={colorMode}>
            <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
              {/* <BaseButton>Hello Worlddddd</BaseButton>
              <ComposedButton>Hello</ComposedButton> */}
              <Box
                sx={{
                  bg: '$amber500',
                }}
              />
              <HomestayPage />
            </ThemeContext.Provider>
          </GluestackUIProvider>
        </SSRProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
