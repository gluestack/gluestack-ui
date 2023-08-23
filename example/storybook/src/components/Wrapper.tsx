import React from 'react';
import { config } from '@gluestack-ui/themed';
import { StyledProvider } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
import { Box } from './Layout/Box/Box';

import { Center } from './Layout/Center/Center';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <Provider config={config.theme} {...props}>
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
    </Provider>
  );
};

export default Wrapper;
