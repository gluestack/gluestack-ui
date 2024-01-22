import React from 'react';
import { StyledProvider, Box, Center } from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <>
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
    </>
  );
};

export default Wrapper;
