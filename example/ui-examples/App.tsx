/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
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
import { styled, Theme } from '@gluestack-style/react';

// const orderedSXResolved = [
//   {
//     meta: {
//       path: ['baseStyle'],
//       weight: 101,
//       cssId: '14kw9po-go7kdf',
//       cssRuleset:
//         '.gs [data-style~="14kw9po-go7kdf"] {background-color:rgba(239,68,68,1.00);height:80px;width:80px;}',
//     },
//     original: {
//       bg: '$red500',
//       h: '$10',
//       w: '$10',
//     },
//     resolved: {
//       backgroundColor: '#ef4444',
//       height: '40px',
//       width: '40px',
//     },
//   },
// ];

// const sxHash = '14kw9po';

// function injectBuildTimeSx() {
//   injectComponentAndDescendantStyles(orderedSXResolved, sxHash, 'inline');
// }

// const styledIds = {
//   component: {
//     baseStyle: {
//       ids: ['14kw9po-go7kdf'],
//       props: {},
//     },
//     compoundVariants: [],
//     variants: [],
//   },
//   decendant: {},
// };

// injectBuildTimeSx();

// const Box = styled(View, {});

const Box = styled(View, {
  bg: '$primary100',
  h: '$10',
  w: '$10',
});

// const ComposedButton = styled(BaseButton, {
//   bg: '$red500',
// });

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
          <GluestackUIProvider config={config.theme} colorMode={'light'}>
            {/* <ThemeContext.Provider value={{ colorMode, toggleColorMode }}> */}
            <Theme name="x">
              <Box bg="$amber800"></Box>
              <Box></Box>
            </Theme>
            <Box bg="$amber50"></Box>
            <Box></Box>
            {/* <BaseButton>Hello Worlddddd</BaseButton>
              <ComposedButton>Hello</ComposedButton> */}
            {/* <HomestayPage /> */}
            {/* </ThemeContext.Provider> */}
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
