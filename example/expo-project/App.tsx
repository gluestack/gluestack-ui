import React from 'react';
import { config } from './gluestack-ui.config';
import { StyledProvider } from '@gluestack-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { Box, Center, Button, Menu } from 'ui-components';

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
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <Provider>
      <Menu
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        placement="bottom"
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Menu</Button.Text>
            </Button>
          );
        }}
      >
        <Menu.Item key="Item1">
          <Menu.ItemLabel>Item1</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Roboto">
          <Menu.ItemLabel>Roboto</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Poppins">
          <Menu.ItemLabel>Poppins</Menu.ItemLabel>
        </Menu.Item>
      </Menu>
    </Provider>
  );
};

export default App;
