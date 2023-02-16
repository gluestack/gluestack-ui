import React from 'react';
import { Menu } from '@gluestack/ui-compiled';
import { Button } from '@gluestack/ui-compiled';
import { Center } from '@gluestack/ui-compiled';
// @ts-ignore
import { HamburgerIcon } from '@gluestack/ui-compiled';
import { Text } from '@gluestack/ui-compiled';
import { Divider } from '@gluestack/ui-compiled';

import Wrapper from '../Wrapper';

export const MenuGroupStory = ({ placement }: any) => {
  return (
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
          <Menu.Group>
            <Menu.GroupTitle>
              <Text
                sx={{
                  fontSize: 12,
                  p: '$3',
                  color: '$text600',
                  fontWeight: '$light',
                }}
              >
                FREE
              </Text>
            </Menu.GroupTitle>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Arial</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Nunito Sans</Text>
            </Menu.Item>
            <Menu.Item>
              <Text sx={{ px: '$3' }}>Roboto</Text>
            </Menu.Item>
          </Menu.Group>
          <Divider sx={{ mt: '$3' }} />
          <Menu.Group>
            <Menu.GroupTitle>
              <Text
                sx={{
                  fontSize: 12,
                  p: '$3',
                  color: '$text600',
                  fontWeight: '$light',
                }}
              >
                PAID
              </Text>
            </Menu.GroupTitle>
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
          </Menu.Group>
        </Menu.Content>
      </Menu>
    </Wrapper>
  );
};
