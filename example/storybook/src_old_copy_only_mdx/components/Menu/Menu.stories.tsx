import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Menu } from './Menu';
export const MenuStory = () => {
  return <Menu />;
};
const MyMenuVariantMeta: ComponentMeta<typeof MenuStory> = {
  title: 'components/stories/Menu',
  component: MenuStory,
};

export default MyMenuVariantMeta;
