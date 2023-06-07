import React from 'react';
import { config } from '../gluestack-ui.config';
import { StyledProvider } from '@gluestack-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { useDarkMode } from '../hooks/useDarkMode';
import { Platform } from 'react-native';
import { Box } from '../ui-components';

import { Center } from '../ui-components';

// import { View } from 'react-native';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  let value = false;
  if (Platform.OS === 'web') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    value = useDarkMode();
  }
  const [isDark] = React.useState(false);

  function getColorMode() {
    //@ts-ignore
    if (true) {
      return undefined;
    }
    //@ts-ignore
    if (Platform.OS === 'web') {
      return value ? 'dark' : 'light';
    } else {
      return isDark ? 'dark' : 'light';
    }
  }

  return (
    // <Text>jhbjbk</Text>
    <Provider config={config.theme} {...props} colorMode={getColorMode()}>
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
          // _dark: {
          //   bg: '$backgroundDark950',
          // },
        }}
        {...props}
      >
        {Platform.OS !== 'web' ? (
          <></>
        ) : (
          // <Box zIndex={1} position="absolute" top="$2" right="$2">
          //   {isDark ? (
          //     <Button
          //       p="$4"
          //       // sx={{ backgroundColor: 'transparent' }}
          //       onPress={() => setIsDark(!isDark)}
          //     >
          //       <SunIcon color="$white" />
          //     </Button>
          //   ) : (
          //     <Button
          //       onPress={() => setIsDark(!isDark)}
          //       p="$4"
          //       // sx={{ backgroundColor: 'transparent' }}
          //     >
          //       <MoonIcon color="$black" />
          //     </Button>
          //   )}
          // </Box>
          <></>
        )}
        <Center h="100%">{children}</Center>
      </Box>
    </Provider>
  );
};

export default Wrapper;
