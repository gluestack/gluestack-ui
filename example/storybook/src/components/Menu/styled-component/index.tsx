import { View } from 'react-native';
import { styled } from '@dank-style/react';

const Menu = styled(
  View,
  {
    baseStyle: {
      style: {
        h: '100%',
        w: '100%',
      },
    },
  },
  {}
);

export { Menu as Root };
export { default as Backdrop } from './Backdrop';
export { default as Content } from './Content';
export { default as Group } from './Group';
export { default as GroupTitle } from './GroupTitle';
export { default as MenuItem } from './MenuItem';
export { default as MenuItemOption } from './MenuItemOption';
export { default as MenuItemOptionIndicator } from './MenuItemOptionIndicator';
export { default as MenuItemOptionLabel } from './MenuItemOptionLabel';
export { default as MenuOptionsGroup } from './MenuOptionsGroup';
export { default as MenuTrigger } from './MenuTrigger';
