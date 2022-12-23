import React from 'react';
import {
  Menu,
  Button,
  Center,
  HamburgerIcon,
  Text,
  Divider,
} from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const MenuComponent = ({ placement, ...props }: any) => {
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
    </>
  );
};
