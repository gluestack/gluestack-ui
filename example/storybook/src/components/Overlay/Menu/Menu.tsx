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
  Center,
  Box,
} from '../../../ui-components';
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
              <Button.Text>Menu</Button.Text>
            </Button>
          );
        }}
      >
        <Menu.Item key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Community</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Plugins" textValue="Plugins">
          <Icon as={PuzzleIcon} size={16} mr="$2" />
          <Menu.ItemLabel size="sm">Plugins</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size={16} mr="$2" />
          <Menu.ItemLabel size="sm">Theme</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Settings</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Add account</Menu.ItemLabel>
        </Menu.Item>
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
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={({ ...triggerProps }) => {
        return (
          <Box w={1200} pt={300} pb={20} alignItems="center">
            <Button {...triggerProps}>
              <Button.Text>Menu</Button.Text>
            </Button>
          </Box>
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
