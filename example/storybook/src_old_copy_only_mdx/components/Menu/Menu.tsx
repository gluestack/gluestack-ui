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
import { Text, Pressable, View } from 'react-native';
import { Wrapper } from '../Wrapper';

export const AccessibleMenu: any = createMenu({
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
});

export const Menu = () => {
  return (
    <Wrapper>
      <AccessibleMenu
        placement={'bottom'}
        trigger={(triggerProps: any) => {
          return (
            <Pressable {...triggerProps}>
              <Text>Menu</Text>
            </Pressable>
          );
        }}
      >
        <AccessibleMenu.Content>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>Arial</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>Nunito Sans</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>Roboto</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>Poppins</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>SF Pro</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>Helvetica</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item isDisabled>
            <Text style={{ padding: 12 }}>Sofia</Text>
          </AccessibleMenu.Item>
          <AccessibleMenu.Item>
            <Text style={{ padding: 12 }}>Cookie</Text>
          </AccessibleMenu.Item>
        </AccessibleMenu.Content>
        <AccessibleMenu.Backdrop />
      </AccessibleMenu>
    </Wrapper>
  );
};

export default Menu;
export { Text, Pressable, View };
