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
} from '@gluestack-ui/themed';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({ placement = 'bottom' }: any) => {
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
        <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <Icon as={PuzzleIcon} size={16} mr="$2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size={16} mr="$2" />
          <MenuItemLabel size="sm">Theme</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" mr="$2" />
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
      _experimentalOverlay={false}
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
      <Menu.Item key="Community" textValue="Community">
        <Icon
          as={GlobeIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'GlobeIcon',
              'size': 'sm',
            }),
          }}
          size="sm"
          mr="$2"
        />
        <Menu.ItemLabel size="sm">Community</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Plugins" textValue="Plugins">
        <Icon
          as={PuzzleIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'PuzzleIcon',
              'size': 'sm',
            }),
          }}
          size="sm"
          mr="$2"
        />
        <Menu.ItemLabel size="sm">Plugins</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Theme" textValue="Theme">
        <Icon
          as={PaintBucket}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'PaintBucket',
              'size': 'sm',
            }),
          }}
          size="sm"
          mr="$2"
        />
        <Menu.ItemLabel size="sm">Theme</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Settings" textValue="Settings">
        <Icon
          as={SettingsIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'SettingsIcon',
              'size': 'sm',
            }),
          }}
          size="sm"
          mr="$2"
        />
        <Menu.ItemLabel size="sm">Settings</Menu.ItemLabel>
      </Menu.Item>
      <Menu.Item key="Add account" textValue="Add account">
        <Icon
          as={AddIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'AddIcon',
              'size': 'sm',
            }),
          }}
          size="sm"
          mr="$2"
        />
        <Menu.ItemLabel size="sm">Add account</Menu.ItemLabel>
      </Menu.Item>
    </Menu>
  );
};

export default FigmaMenuStory;

export {
  MenuStory,
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
