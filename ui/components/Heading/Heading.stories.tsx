import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { HeadingBasicExample } from './Heading';

const MyHeadingMeta: ComponentMeta<typeof HeadingBasicExample> = {
  title: 'Heading',
  component: HeadingBasicExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  args: {
    text: `I'm the heading`,
    size: '2xl',
  },
};

export default MyHeadingMeta;

type MyHeadingStory = ComponentStory<typeof HeadingBasicExample>;

export const Basic: MyHeadingStory = (args) => (
  <HeadingBasicExample {...args} />
);
