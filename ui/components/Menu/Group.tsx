import React from 'react';
import { Menu, Button, Center, HamburgerIcon } from '@gluestack/ui';
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
              <Menu.GroupTitle>Group 1</Menu.GroupTitle>
              <Menu.Item>Arial</Menu.Item>
              <Menu.Item>Nunito Sans</Menu.Item>
              <Menu.Item>Roboto</Menu.Item>
            </Menu.Group>
            <Menu.Group>
              <Menu.GroupTitle>Group 2</Menu.GroupTitle>
              <Menu.Item>Poppins</Menu.Item>
              <Menu.Item>SF Pro</Menu.Item>
              <Menu.Item>Helvetica</Menu.Item>
              <Menu.Item isDisabled>Sofia</Menu.Item>
              <Menu.Item>Cookie</Menu.Item>
            </Menu.Group>
          </Menu.Content>
        </Menu>
      </Wrapper>
    </>
  );
};
