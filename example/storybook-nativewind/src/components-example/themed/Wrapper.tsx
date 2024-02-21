import React from 'react';
import { Box, Center } from '@gluestack-ui/themed';
import { StyledProvider, useColorMode } from '@gluestack-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { config } from './GluestackUIProvider/config';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  const colorMode = useColorMode();
  return (
    // @ts-ignore
    <Box dataSet={{ 'theme-id': `withGluestackStyle_${colorMode}` }}>
      <Provider
        colorMode="light"
        config={config}
        style={{ flex: 1, height: '100%' }}
      >
        <Box
          sx={{
            _ios: {
              h: '100%',
            },
          }}
          {...props}
        >
          <Center height="100%">{children}</Center>
        </Box>
      </Provider>
    </Box>
  );
};

export default Wrapper;
