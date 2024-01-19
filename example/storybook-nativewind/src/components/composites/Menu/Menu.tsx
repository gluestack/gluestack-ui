import React from 'react';

import {
  Box,
  Button,
  ButtonText,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  Center,
} from '@custom-ui/themed';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuBasic = ({ placement = 'bottom' }: any) => {
  return (
    <Center>
      <Menu
        isOpen={true}
        placement={placement}
        disabledKeys={['Settings']}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Menu</ButtonText>
            </Button>
          );
        }}
      >
        <MenuItem key="Community" textValue="Community" gap="$2">
          <Icon as={GlobeIcon} size="sm" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins" gap="$2">
          <Icon
            as={PuzzleIcon}
            // @ts-ignore
            size={16}
          />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Theme" textValue="Theme" gap="$2">
          <Icon
            as={PaintBucket}
            // @ts-ignore
            size={16}
          />
          <MenuItemLabel size="sm">Theme</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings" gap="$2">
          <Icon as={SettingsIcon} size="sm" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Add account" textValue="Add account" gap="$2">
          <Icon as={AddIcon} size="sm" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
      </Menu>
    </Center>
  );
};

const FigmaMenuStory = ({ ...props }) => {
  return (
    <Menu
      {...props}
      // @ts-ignore
      // @ts-ignore
      _experimentalOverlay={true}
      isOpen={true}
      placement="bottom"
      offset={30}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <Menu.Item key="Community" textValue="Community" gap="$2">
        <Icon as={GlobeIcon} size="sm" />
        <Menu.ItemLabel size="sm">Community</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Plugins" textValue="Plugins" gap="$2">
        <Icon as={PuzzleIcon} size="sm" />
        <Menu.ItemLabel size="sm">Plugins</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Theme" textValue="Theme" gap="$2">
        <Icon as={PaintBucket} size="sm" />
        <Menu.ItemLabel size="sm">Theme</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Settings" textValue="Settings" gap="$2">
        <Icon as={SettingsIcon} size="sm" />
        <Menu.ItemLabel size="sm">Settings</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Add account" textValue="Add account" gap="$2">
        <Icon as={AddIcon} size="sm" />
        <Menu.ItemLabel size="sm">Add account</Menu.ItemLabel>
      </Menu.Item>
    </Menu>
  );
};

MenuBasic.description =
  'This is a basic Menu component example.The Menu component creates a user-friendly dropdown interface that can be utilized to present a range of options or actions. This feature ensures accessibility and ease of use for the user.';

export default MenuBasic;

export {
  FigmaMenuStory,
  Button,
  ButtonText,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  PuzzleIcon,
  Box,
};
