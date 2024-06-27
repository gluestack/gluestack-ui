import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon, AddIcon, GlobeIcon, SettingsIcon } from '@/components/ui/icon';
import { Center } from '@/components/ui/center';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuBasic = ({ placement = 'bottom', activateOnHover = false }: any) => {
  return (
    <Center>
      <Menu
        placement={placement}
        activateOnHover={activateOnHover}
        // isOpen={true}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Menu</ButtonText>
            </Button>
          );
        }}
      >
        <MenuItem key="Community1" textValue="Community1">
          <Icon as={GlobeIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Community 1</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community2" textValue="Community2">
          <Icon as={GlobeIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Community 2</MenuItemLabel>
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
