import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, AddIcon, GlobeIcon, SettingsIcon } from '@/components/ui/icon';
import { Center } from '@/components/ui/center';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuBasic = ({ placement = 'bottom' }: any) => {
  return (
    <Center>
      <Menu
        // isOpen={true}
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
        <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <Icon as={PuzzleIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Theme</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
      </Menu>
    </Center>
  );
};

MenuBasic.description =
  'This is a basic Menu component example.The Menu component creates a user-friendly dropdown interface that can be utilized to present a range of options or actions. This feature ensures accessibility and ease of use for the user.';

export default MenuBasic;

export {
  Button,
  ButtonText,
  GlobeIcon,
  HStack,
  Menu,
  // MenuIcon,
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
