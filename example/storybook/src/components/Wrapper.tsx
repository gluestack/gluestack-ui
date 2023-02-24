import React from 'react';

// import { Platform } from 'react-native';
// import { useDarkMode } from '../hooks/useDarkMode';

// window['setTheme'] = set;
// window['getTheme'] = get;
// const Wrapper = ({ children, ...props }: any) => {
// let value = false;
// // if (Platform.OS === 'web') {
// value = useDarkMode();
// // }
// // set(value ? 'dark' : 'light');
// // useEffect(() => {
// //   set('light');
// //   onChange((colorMode) => {
// //     setIsDark(colorMode == 'dark' ? true : false);
// //   });
// // }, []);
// const [isDark, setIsDark] = React.useState(false);

// function getColorMode() {
//   if (Platform.OS === 'web') {
//     return value ? 'dark' : 'light';
//   } else {
//     return isDark ? 'dark' : 'light';
//   }
// }

// return <>hello</>;
// return (
//   <AppProvider {...props} colorMode={getColorMode()}>
//     {/* <Center>{children}</Center> */}
//   </AppProvider>
// );
// };

// Wrapper.displayName = 'GluestackUIProvider';

import { config } from '../gluestack.config';
import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@gluestack-ui/provider';
// import { useDarkMode } from '../hooks/useDarkMode';
import { Platform } from 'react-native';
import { Box } from './Box/Box';
import { IconButton } from './IconButton/IconButton';
import { MoonIcon, SunIcon } from './Icons/Icons';
import { Center } from './Center/Center';

// import { View } from 'react-native';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children }: any) => {
  // let value = false;
  // if (Platform.OS === 'web') {
  // value = useDarkMode();
  const [isDark, setIsDark] = React.useState(false);

  // function getColorMode() {
  //   if (Platform.OS === 'web') {
  //     return value ? 'dark' : 'light';
  //   } else {
  //     return isDark ? 'dark' : 'light';
  //   }
  // }

  return (
    <Provider config={config}>
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        {Platform.OS !== 'web' ? (
          <Box zIndex={1} position="absolute" top="$2" right="$2">
            {isDark ? (
              <IconButton
                p="$4"
                // sx={{ backgroundColor: 'transparent' }}
                onPress={() => setIsDark(!isDark)}
              >
                <SunIcon color="$white" />
              </IconButton>
            ) : (
              <IconButton
                onPress={() => setIsDark(!isDark)}
                p="$4"
                // sx={{ backgroundColor: 'transparent' }}
              >
                <MoonIcon color="$black" />
              </IconButton>
            )}
          </Box>
        ) : (
          <></>
        )}
        <Center h="100%">{children}</Center>
      </Box>
    </Provider>
  );
};

export default Wrapper;
