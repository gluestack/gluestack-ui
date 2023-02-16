import React from 'react';
import {
  AppProvider,
  IconButton,
  Box,
  // Button,
  Center,
  MoonIcon,
  SunIcon,
} from '@gluestack/design-system';
// import { StyledProvider } from '@gluestack/ui-styled';
// import { set, get } from '@dank-style/color-mode';
import { Platform } from 'react-native';
import { useDarkMode } from '../hooks/useDarkMode';
// import { Button } from './Button/Button.stories';

// window['setTheme'] = set;
// window['getTheme'] = get;
const Wrapper = ({ children, ...props }: any) => {
  let value = false;
  // if (Platform.OS === 'web') {
  value = useDarkMode();
  // }
  // set(value ? 'dark' : 'light');
  // useEffect(() => {
  //   set('light');
  //   onChange((colorMode) => {
  //     setIsDark(colorMode == 'dark' ? true : false);
  //   });
  // }, []);
  const [isDark, setIsDark] = React.useState(false);

  function getColorMode() {
    if (Platform.OS === 'web') {
      return value ? 'dark' : 'light';
    } else {
      return isDark ? 'dark' : 'light';
    }
  }

  return (
    <AppProvider {...props} colorMode={getColorMode()}>
      <Box
        h="100%"
        sx={{
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
      {/* <Center>{children}</Center> */}
    </AppProvider>
  );
};

Wrapper.displayName = 'GluestackUIProvider';

export default Wrapper;
