import React from 'react';
import { createMenu } from '@gluestack-ui/menu';
import {
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
} from '../styled-components/menu';

export const Menu = createMenu({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
}) as any;

import Wrapper from '../Wrapper';
import { Center } from '../Center/Center';
import { Button } from '../Button/Button';
import { HamburgerIcon } from '../Icons/Icons';
import { Text } from '../Text/Text';

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
