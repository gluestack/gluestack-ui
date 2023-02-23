import React from 'react';

import { config } from '../gluestack.config';
import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@gluestack-ui/provider';

import { Box } from './Box/Box';
import { Center } from './Center/Center';

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
