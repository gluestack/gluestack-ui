import React from 'react';

import {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
} from '../../../ui-components';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({
  placement = 'bottom',
  showMenu: showMenuProp = true,
}: any) => {
  return (
    <Menu
      offset={10}
      isOpen={showMenuProp}
      placement={placement}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <Button.Text>Menu</Button.Text>
          </Button>
        );
      }}
    >
      <Menu.Item key="Item1" textValue="Item1">
        <HStack space="sm" px="$3" alignItems="center" py="$2">
          <Icon as={GlobeIcon} size="sm" />
          <Text fontSize="$sm" lineHeight="$md">
            Community
          </Text>
        </HStack>
      </Menu.Item>
      <Menu.Item key="Roboto" textValue="Roboto">
        <HStack space="sm" px="$3" alignItems="center" py="$2">
          <Icon as={PuzzleIcon} size="sm" />
          <Text fontSize="$sm" lineHeight="$md">
            Plugins
          </Text>
        </HStack>
      </Menu.Item>
      <Menu.Item key="Poppins" textValue="Poppins">
        <HStack space="sm" px="$3" alignItems="center" py="$2">
          <Icon as={PaintBucket} size="sm" />
          <Text fontSize="$sm" lineHeight="$md">
            Theme
          </Text>
        </HStack>
      </Menu.Item>
      <Menu.Item key="Poppins" textValue="Poppins">
        <HStack space="sm" px="$3" alignItems="center" py="$2">
          <Icon as={SettingsIcon} size="sm" />
          <Text fontSize="$sm" lineHeight="$md">
            Settings
          </Text>
        </HStack>
      </Menu.Item>
      <Menu.Item key="Poppins" textValue="Poppins">
        <HStack space="sm" px="$3" alignItems="center" py="$2">
          <Icon as={AddIcon} size="sm" />
          <Text fontSize="$sm" lineHeight="$md">
            Add account
          </Text>
        </HStack>
      </Menu.Item>
    </Menu>
  );
};

export default MenuStory;

export {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  PuzzleIcon,
};
