import {
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
  // MenuItemOption,
  // MenuItemOptionIndicator,
  // MenuItemOptionLabel,
  // MenuOptionsGroup,
  // MenuTrigger,
} from './styled-component';
import { createMenu } from '@universa11y/menu';
import React from 'react';
import { Text, Pressable } from 'react-native';
import { Wrapper } from '../Wrapper';

const MenuTemp = createMenu({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
  // MenuItemOption,
  // MenuItemOptionIndicator,
  // MenuItemOptionLabel,
  // MenuOptionsGroup,
  // MenuTrigger,
}) as any;

export const Menu = () => {
  return (
    <Wrapper>
      <MenuTemp
        placement={'bottom'}
        trigger={(triggerProps: any) => {
          return (
            <Pressable {...triggerProps}>
              <Text>Menu</Text>
            </Pressable>
          );
        }}
      >
        <MenuTemp.Content>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Arial</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Nunito Sans</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Roboto</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Poppins</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>SF Pro</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Helvetica</Text>
          </MenuTemp.Item>
          <MenuTemp.Item isDisabled>
            <Text style={{ padding: 12 }}>Sofia</Text>
          </MenuTemp.Item>
          <MenuTemp.Item>
            <Text style={{ padding: 12 }}>Cookie</Text>
          </MenuTemp.Item>
        </MenuTemp.Content>
        <MenuTemp.Backdrop />
      </MenuTemp>
    </Wrapper>
  );
};

export default Menu;
