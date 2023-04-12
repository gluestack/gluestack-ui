import React from 'react';
import { config } from './gluestack-ui.config';
import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { Box, Center, Button, NewMenu as Menu } from 'ui-components';

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
      <Menu
        defaultOpen={true}
        shouldOverlapWithTrigger
        offset={10}
        crossOffset={10}
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Menu</Button.Text>
            </Button>
          );
        }}
      >
        <Menu.Item>
          <Menu.ItemLabel>List Item 1</Menu.ItemLabel>
        </Menu.Item>
      </Menu>
    </Provider>
  );
};

export default App;
