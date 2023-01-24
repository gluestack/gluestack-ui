import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Menu } from './Menu';
export const MenuStory = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};
const MyMenuVariantMeta: ComponentMeta<typeof MenuStory> = {
  title: 'recipes/stories/Menu',
  component: MenuStory,
};

export default MyMenuVariantMeta;
