import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Heading } from '@gluestack/ui';

const MyHeadingMeta: ComponentMeta<typeof Heading> = {
  title: 'TYPOGRAPHY/Heading',
  component: Heading,
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

type MyHeadingStory = ComponentStory<typeof Heading>;

export const Basic: MyHeadingStory = ({ ...props }) => {
  return <Heading {...props}>{props.text}</Heading>;
};
