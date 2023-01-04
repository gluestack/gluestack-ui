import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {
  Menu,
  Button,
  Center,
  HamburgerIcon,
  Text,
  Divider,
} from '@gluestack/ui';
import Wrapper from '../Wrapper';

// var st = document.createElement('style');
// var st2 = document.createElement('style');

// st.innerHTML = `#story--menu--basic{ height: 400px }`;
// st2.innerHTML = `#story--menu--grouped{ height: 400px }`;

// document.body.append(st);
// document.body.append(st2);

const MenuMeta: ComponentMeta<typeof Menu> = {
  title: 'OVERLAY/Menu',
  component: Menu,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'top',
        'top-end',
        'top-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
      ],
    },
  },
  args: {
    placement: 'bottom',
  },
};

export default MenuMeta;

type MenuStory = ComponentStory<typeof Menu>;
type MenuGroupStory = ComponentStory<typeof Menu>;

export const Basic: MenuStory = ({ placement, ...props }) => {
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
              <Text sx={{ style: { px: '$3' } }}>Arial</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Nunito Sans</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Roboto</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Poppins</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>SF Pro</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Helvetica</Text>
            </Menu.Item>
            <Menu.Item isDisabled>
              <Text sx={{ style: { px: '$3' } }}>Sofia</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Cookie</Text>
            </Menu.Item>
          </Menu.Content>
          <Menu.Backdrop />
        </Menu>
      </Wrapper>
    </>
  );
};
export const Grouped: MenuGroupStory = ({ placement, ...props }) => {
  return (
    <Wrapper>
      <Menu
        placement={placement}
        trigger={(triggerProps: any) => {
          return (
            <Center>
              <Button {...triggerProps}>
                <Button.Text>
                  <HamburgerIcon sx={{ style: { w: 16, h: 16 } }} />
                </Button.Text>
              </Button>
            </Center>
          );
        }}
      >
        <Menu.Backdrop />
        <Menu.Content>
          <Menu.Group>
            <Menu.GroupTitle>
              <Text
                sx={{
                  style: {
                    fontSize: 12,
                    p: '$3',
                    color: '$text600',
                    fontWeight: '$light',
                  },
                }}
              >
                FREE
              </Text>
            </Menu.GroupTitle>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Arial</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Nunito Sans</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Roboto</Text>
            </Menu.Item>
          </Menu.Group>
          <Divider sx={{ style: { mt: '$3' } }} />
          <Menu.Group>
            <Menu.GroupTitle>
              <Text
                sx={{
                  style: {
                    fontSize: 12,
                    p: '$3',
                    color: '$text600',
                    fontWeight: '$light',
                  },
                }}
              >
                PAID
              </Text>
            </Menu.GroupTitle>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>SF Pro</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Helvetica</Text>
            </Menu.Item>
            <Menu.Item isDisabled>
              <Text sx={{ style: { px: '$3' } }}>Sofia</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ style: { px: '$3' } }}>Cookie</Text>
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu>
    </Wrapper>
  );
};
