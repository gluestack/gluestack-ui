import React from 'react';
import { config } from './gluestack-ui.config';
import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { Box, Center } from 'ui-components';

const TempProvider = createProvider({ StyledProvider }) as any;
TempProvider.displayName = 'Provider';

export const Provider = ({ children }: any) => {
  return (
    <TempProvider config={config.theme}>
      <Box
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
        flex={1}
      >
        <Center flex={1}>{children}</Center>
      </Box>
    </TempProvider>
  );
};

const App = () => {
  return (
    <Provider>
      <Box w={100} h={100} bg="$red500" />
    </Provider>
  );
};

export default App;
