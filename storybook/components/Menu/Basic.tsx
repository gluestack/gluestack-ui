import React from 'react';
import { Menu, Button, Center, HamburgerIcon, Text } from '@gluestack/ui';
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
