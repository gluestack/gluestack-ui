import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MenuComponent as BasicExample } from './Basic';

const MenuMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Menu',
  component: BasicExample,
  argTypes: {},
  args: {
    placements: [
      'top',
      'bottom',
      'left',
      'right',
      'top left',
      'top right',
      'bottom left',
      'bottom right',
      'right top',
      'right bottom',
      'left top',
      'left bottom',
    ],
  },
};

export default MenuMeta;

type MenuStory = ComponentStory<typeof BasicExample>;

export const Basic: MenuStory = (args) => <BasicExample {...args} />;
