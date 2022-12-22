import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MenuComponent as BasicExample } from './Basic';
import { MenuComponent as GroupExample } from './Group';

const MenuMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Menu',
  component: BasicExample,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'top',
        'top-end',
        'top-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
      ],
    },
  },
  args: {
    placement: 'bottom',
  },
};

export default MenuMeta;

type MenuStory = ComponentStory<typeof BasicExample>;
type MenuGroupStory = ComponentStory<typeof GroupExample>;

export const Basic: MenuStory = (args) => <BasicExample {...args} />;
export const Grouped: MenuGroupStory = (args) => <GroupExample {...args} />;
