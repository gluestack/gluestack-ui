import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Pressable, Text, View } from 'react-native';
import { Button, GluestackUIProvider } from './gluestack-ui-components';
import { styled, resolveBuildTimeSx } from '@gluestack-style/react';

import { propertyTokenMap } from '@gluestack-style/react/propertyTokenMap';
import { deepMerge } from '@gluestack-style/react/utils';
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

const Box = styled(View, {
  bg: '$red500',
  p: '$3',
  m: '$0.5',
});
console.RNstart = new Date().getTime();
console.GUIStart = new Date().getTime();

const useGUIStyledComp = (Comp: any) => {
  const NewComp = () => {
    useEffect(() => {
      console.log(
        'GUIStyledComp Mount Time',
        new Date().getTime() - console.GUIStart
      );
    }, []);
    return <Comp />;
  };
  return NewComp;
};

const useRnStyledComp = (Comp: any) => {
  const NewComp = () => {
    useEffect(() => {
      console.log(
        'RNStyledComp Mount Time',
        new Date().getTime() - console.RNstart
      );
    }, []);
    return <Comp />;
  };
  return NewComp;
};

// const CONFIG = {
//   ...config.theme,
//   propertyTokenMap,
// };
// const componentExtendedConfig = deepMerge(CONFIG, {});
// const BuildOrderResolvedSX = resolveBuildTimeSx(
//   {
//     '@md': {
//       backgroundColor: 'red',
//     },
//     'bg': '$yellow500',
//   },
//   {},
//   {},
//   componentExtendedConfig
// );
const S = StyleSheet.create({
  box: { backgroundColor: 'red', padding: 10, margin: 2 },
});
const TestRNComp = () => {
  return (
    <View>
      {Array.from({ length: 1000 }).map((_, i) => (
        <View key={i} style={S.box} />
      ))}
    </View>
  );
};
const TestGUIComp = () => {
  return (
    <>
      {Array.from({ length: 1000 }).map((_, i) => (
        <Box key={i} bg="$red500" p="$3" m="$0.5" />
      ))}
    </>
  );
};
const TestGUICompBoot = () => {
  return (
    <>
      {Array.from({ length: 1000 }).map((_, i) => (
        <Box key={i} />
      ))}
    </>
  );
};
// console.log(JSON.stringify(BuildOrderResolvedSX, null, 2));
export default function App() {
  const [colorMode, setColorMode] = React.useState('light');
  const [me, setMe] = React.useState(false);
  const TestGUI = useGUIStyledComp(TestGUIComp);
  const TestGUIBoot = useGUIStyledComp(TestGUICompBoot);
  const TestRN = useRnStyledComp(TestRNComp);
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
        <Pressable onPress={() => console.getPerformanceReport()}>
          <Text>Log Perf Report</Text>
        </Pressable>
        <SSRProvider>
          <GluestackUIProvider config={config.theme} colorMode={colorMode}>
            {/* <button onClick={() => console.getPerformanceReport()}>
              Click me
            </button>
            <button onClick={() => setMe(!me)}>dfvlnjdf {`${me}`}</button> */}
            {/* main app page */}
            {/* <HomestayPage
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            /> */}
            {/* <Box BUILD_verbosedSx={BuildOrderResolvedSX}>
              <Text>Hello</Text>
            </Box> */}

            {/* <TestGUIBoot /> */}
            {/* <TestGUI /> */}
            {/* <TestRN /> */}
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
