import React from 'react';
import { config } from './config';
import { StyledProvider } from '@gluestack-ui/themed';
import { createProvider, Center } from '@gluestack-ui/provider';
import { Box } from './Category/Box/Box';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <Provider config={config} {...props}>
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
