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
                    <HamburgerIcon />
                  </Button.Text>
                </Button>
              </Center>
            );
          }}
        >
          <Menu.Backdrop />
          <Menu.Content>
            <Menu.Item>Arial</Menu.Item>
            <Menu.Item>Nunito Sans</Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
            <Menu.Item>Poppins</Menu.Item>
            <Menu.Item>SF Pro</Menu.Item>
            <Menu.Item>Helvetica</Menu.Item>
            <Menu.Item isDisabled>Sofia</Menu.Item>
            <Menu.Item>Cookie</Menu.Item>
          </Menu.Content>
        </Menu>
      </Wrapper>
    </>
  );
};

// import { View, Text } from 'react-native';
