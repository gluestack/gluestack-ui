import React from 'react';
import { Box, Center, useColorMode } from '@gluestack-ui/themed';
import { GluestackUIProvider } from './gluestack-ui-provider';

const Wrapper = ({ children, ...props }: any) => {
  const colorMode: any = useColorMode();
  return (
    <Box
      sx={{
        _ios: {
          h: '100%',
        },
      }}
      {...props}
    >
      <GluestackUIProvider mode={colorMode}>
        <Center height="100%">{children}</Center>
      </GluestackUIProvider>
    </Box>
  );
};

export default Wrapper;
