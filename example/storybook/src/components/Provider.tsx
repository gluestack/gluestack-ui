import React from 'react';

import { config } from '@gluestack-ui/config';
import { StyledProvider } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/themed';

import { Box } from './Layout/Box/Box';
import { Center } from './Layout/Center/Center';

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
