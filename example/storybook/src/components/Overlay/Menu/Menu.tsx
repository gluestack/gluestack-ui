import React from 'react';
import Wrapper from '../../Wrapper';
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

export const MenuStory = ({ placement }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Wrapper>
        <Menu
          isOpen={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
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
          <Menu.Item key="Community" textValue="Community">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={GlobeIcon} size="sm" />
              <Menu.ItemLabel>Community</Menu.ItemLabel>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Plugins" textValue="Plugins">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={PuzzleIcon} size="sm" />
              <Menu.ItemLabel>Plugins</Menu.ItemLabel>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Theme" textValue="Theme">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={PaintBucket} size="sm" />
              <Menu.ItemLabel>Theme</Menu.ItemLabel>
            </HStack>
          </Menu.Item>
          <Menu.Item key="Settings" textValue="Settings">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={SettingsIcon} size="sm" />
              <Menu.ItemLabel>Settings</Menu.ItemLabel>
            </HStack>
          </Menu.Item>
          <Menu.Item key=">Add account" textValue=">Add account">
            <HStack space="sm" px="$3" alignItems="center" py="$2">
              <Icon as={AddIcon} size="sm" />
              <Menu.ItemLabel>Add account</Menu.ItemLabel>
            </HStack>
          </Menu.Item>
        </Menu>
      </Wrapper>
    </>
  );
};

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
