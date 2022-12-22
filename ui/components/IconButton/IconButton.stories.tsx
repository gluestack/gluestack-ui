import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { IconButtonExample } from './IconButton';

const IconButtonMeta: ComponentMeta<typeof IconButtonExample> = {
  title: 'IconButton',
  component: IconButtonExample,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
    },
  },
  args: {
    text: 'PRESS',
    variant: 'solid',
    isLoading: false,
    showText: false,
  },
};

export default IconButtonMeta;

type MyBadgeStory = ComponentStory<typeof IconButtonExample>;

export const Basic: MyBadgeStory = (args) => <IconButtonExample {...args} />;
