import React from 'react';
import { config } from '../gluestack-ui.config';
import { StyledProvider } from '@gluestack-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { Box } from '../ui-components';

import { Center } from '../ui-components';

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
