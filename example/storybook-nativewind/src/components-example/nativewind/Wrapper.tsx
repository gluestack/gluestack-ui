import React from 'react';
import { Box, Center } from '@gluestack-ui/themed';
import { GluestackUIProvider } from './GluestackUIProvider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <GluestackUIProvider>
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
    </GluestackUIProvider>
  );
};

export default Wrapper;
