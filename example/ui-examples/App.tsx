/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, GluestackUIProvider } from './gluestack-ui-components';
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
import HomestayPage from './kitchensink-components/HomestayPage';
import { useGetMountTime } from './use-get-mount-time';

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

  const [me, setMe] = React.useState(false);

  const { isMounted } = useGetMountTime('App');

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
            {/* <Button onPress={() => console.getPerformanceReport()}>
              <Button.Text>Get performance report</Button.Text>
            </Button> */}
            {/* <ModalExample /> */}
            <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
              <Button
                onPress={() => {
                  console.getPerformanceReport();
                }}
              >
                <Button.Text>Get performance report</Button.Text>
              </Button>
              {/* <Button
                onPress={() => {
                  console.startMount('Actionsheet');
                  setMe(!me);
                }}
              >
                <Button.Text>Click me</Button.Text>
              </Button> */}
              {/* {me && (
                <MobileSidebarActionsheet
                  actionsheetVisible={me}
                  setActionsheetVisible={setMe}
                />
              )} */}
              <HomestayPage />
              {/* <ListYourPlaceModal modalVisible={me} setModalVisible={setMe} /> */}
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
