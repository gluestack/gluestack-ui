import React from 'react';
import { Box, Center } from '@gluestack-ui/themed';
import { GluestackUIProvider } from './GluestackUIProvider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <Box
      sx={{
        _ios: {
          h: '100%',
        },
      }}
      {...props}
    >
      <GluestackUIProvider>
        <Center height="100%">{children}</Center>
      </GluestackUIProvider>
    </Box>
  );
};

export default Wrapper;
