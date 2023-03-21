import React from 'react';
import Wrapper from '../../Wrapper';
import { Center } from '../../../ui-components';
import {
  Button,
  HamburgerIcon,
  Menu,
  Text,
  GlobeIcon,
  PluginIcon,
  ThemeIcon,
  SettingsIcon,
  PlusIcon,
  Box,
  Badge,
  Pressable,
  Avatar,
  Divider,
} from '../../../ui-components';

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Menu
          placement={placement}
          trigger={(triggerProps: any) => {
            return (
              <Center>
                <Button {...triggerProps}>
                  <Button.Text>
                    <HamburgerIcon />
                  </Button.Text>
                </Button>
              </Center>
            );
          }}
        >
          <Menu.Content>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Arial</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Nunito Sans</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Roboto</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Poppins</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>SF Pro</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Helvetica</Text>
            </Menu.Item>
            <Menu.Item isDisabled>
              <Text sx={{ px: '$3' }}>Sofia</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Cookie</Text>
            </Menu.Item>
          </Menu.Content>
          <Menu.Backdrop />
        </Menu>
      </Wrapper>
    </>
  );
};

export {
  Button,
  HamburgerIcon,
  Menu,
  Text,
  Center,
  GlobeIcon,
  PluginIcon,
  ThemeIcon,
  SettingsIcon,
  PlusIcon,
  Box,
  Badge,
  Pressable,
  Avatar,
  Divider,
};
