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
                      pb: '$2',
                      color: '$text600',
                      fontWeight: '$light',
                    },
                  }}
                >
                  FREE
                </Text>
              </Menu.GroupTitle>
              <Menu.Item>
                <Text>Arial</Text>
              </Menu.Item>
              <Menu.Item>
                <Text>Nunito Sans</Text>
              </Menu.Item>
              <Menu.Item>
                <Text>Roboto</Text>
              </Menu.Item>
            </Menu.Group>
            <Divider />
            <Menu.Group>
              <Menu.GroupTitle>
                <Text
                  sx={{
                    style: {
                      fontSize: 12,
                      pb: '$2',
                      color: '$text600',
                      fontWeight: '$light',
                    },
                  }}
                >
                  PAID
                </Text>
              </Menu.GroupTitle>
              <Menu.Item>
                <Text>SF Pro</Text>
              </Menu.Item>
              <Menu.Item>
                <Text>Helvetica</Text>
              </Menu.Item>
              <Menu.Item isDisabled>
                <Text>Sofia</Text>
              </Menu.Item>
              <Menu.Item>
                <Text>Cookie</Text>
              </Menu.Item>
            </Menu.Group>
          </Menu.Content>
        </Menu>
      </Wrapper>
    </>
  );
};
