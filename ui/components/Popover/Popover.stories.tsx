import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { PopoverComponent } from './Popover';

const PopoverMeta: ComponentMeta<typeof PopoverComponent> = {
  title: 'Popover',
  component: PopoverComponent,
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

export default PopoverMeta;

type PopoverStory = ComponentStory<typeof PopoverComponent>;

export const Basic: PopoverStory = (args) => <PopoverComponent {...args} />;
