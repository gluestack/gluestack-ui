import React from 'react';
import { Box, Center } from '@gluestack-ui/themed';
import { Provider } from './Provider';

const Wrapper = ({ children, ...props }: any) => {
  return (
    <Provider>
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
    </Provider>
  );
};

export default Wrapper;
