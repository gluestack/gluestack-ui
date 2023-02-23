import React from 'react';
import { Center } from '../Center/Center';
import { Button } from '../Button/Button';
import { HamburgerIcon } from '../Icons/Icons';
import { Text } from '../Text/Text';
import Wrapper from '../Wrapper';

import { createMenu } from '@gluestack-ui/menu';
import {
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
} from '../styled-components/menu';
import { Divider } from '../Divider/Divider';

export const Menu = createMenu({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
});

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
