import {
  Menu,
  Button,
  MenuItem,
  Icon,
  MenuItemLabel,
  GlobeIcon,
  ButtonText,
} from '@gluestack-ui/themed';
import { SettingsIcon } from 'lucide-react-native';
import React from 'react';

const MenuDemo = () => {
  return (
    <Menu
      isOpen={true}
      placement="bottom"
      offset={6}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Community" textValue="Community" p="$2">
        <Icon as={GlobeIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings" p="$2">
        <Icon as={SettingsIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default MenuDemo;
