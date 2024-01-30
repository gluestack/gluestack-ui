import React from 'react';
import { StyledProvider, Box, Center } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
// import { Provider as ThemeProvider } from '../components/nativewind/core/Provider';
const Provider = createProvider({ StyledProvider }) as any;
import { config } from './themed/core/config';
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <StyledProvider
      colorMode="light"
      config={config}
      styles={{ flex: 1, height: '100%' }}
    >
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
        }}
        {...props}
      >
        <Center h="100%">{children}</Center>
      </Box>
    </StyledProvider>
  );
};

export default Wrapper;
