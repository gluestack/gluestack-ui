import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, GluestackUIProvider } from './gluestack-ui-components';
import { config } from './gluestack-ui.config';
import HomestayPage from './kitchensink-components/HomestayPage';
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

export default function App() {
  const [colorMode, setColorMode] = React.useState('light');
  const [me, setMe] = React.useState(false);

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
            {/* <button onClick={() => console.getPerformanceReport()}>
              Click me
            </button>
            <button onClick={() => setMe(!me)}>dfvlnjdf {`${me}`}</button> */}
            {/* main app page */}
            <HomestayPage
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
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
