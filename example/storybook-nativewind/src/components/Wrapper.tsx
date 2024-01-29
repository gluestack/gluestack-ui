import React from 'react';
import { StyledProvider, Box, Center } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
import { ThemeProvider } from '../nativewind-components/core/ThemeProvider';
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <ThemeProvider mode="light" style={{ flex: 1, height: '100%' }}>
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
    </ThemeProvider>
  );
};

export default Wrapper;
