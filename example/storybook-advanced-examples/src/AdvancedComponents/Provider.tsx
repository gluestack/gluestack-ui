import React from 'react';

import { config } from '@gluestack-ui/config';
import { StyledProvider } from '@gluestack-ui/themed';
import { createProvider, Center } from '@gluestack-ui/themed';

import { Box } from './Category/Box/Box';

const TempProvider = createProvider({ StyledProvider }) as any;
TempProvider.displayName = 'Provider';

export const Provider = ({ children }: any) => {
  return (
    <TempProvider config={config}>
      <Box
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        <Center>{children}</Center>
      </Box>
    </TempProvider>
  );
};
