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
import { Item } from 'react-stately';

export const MenuStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Button>
          <Button.Text>Button</Button.Text>
        </Button>
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
          {/* <Menu.Content> */}

          <Item key="copy">Copy</Item>
          <Item key="cut">Cut</Item>
          <Item key="paste">Paste</Item>

          {/* <Menu.Item>
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
          </Menu.Item> */}
          {/* </Menu.Content> */}
          {/* <Menu.Backdrop /> */}
        </Menu>
        <Button>
          <Button.Text>Button</Button.Text>
        </Button>
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
