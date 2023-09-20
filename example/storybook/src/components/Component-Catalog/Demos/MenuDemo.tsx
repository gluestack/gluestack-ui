import {
  Menu,
  Button,
  MenuItem,
  Icon,
  MenuItemLabel,
  GlobeIcon,
  ButtonText,
} from '@gluestack-ui/themed';
import { PuzzleIcon, SettingsIcon } from 'lucide-react-native';
import React from 'react';

const MenuDemo = () => {
  return (
    <Menu
      _experimentalOverlay={true}
      isOpen={true}
      placement="bottom"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} mb="$2">
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
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PuzzleIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default MenuDemo;
