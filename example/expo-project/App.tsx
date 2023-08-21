import React from 'react';
import { config } from './gluestack-ui.config';
import { StyledProvider } from '@gluestack-style/react';
import { createProvider } from '@gluestack-ui/provider';
import {
  Box,
  Center,
  Button,
  ButtonText,
  Menu,
  MenuItem,
  MenuItemLabel,
} from 'ui-components';

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
              <ButtonText>Menu</ButtonText>
            </Button>
          );
        }}
      >
        <MenuItem key="Item1">
          <MenuItemLabel>Item1</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Roboto">
          <MenuItemLabel>Roboto</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Poppins">
          <MenuItemLabel>Poppins</MenuItemLabel>
        </MenuItem>
      </Menu>
    </Provider>
  );
};

export default App;
