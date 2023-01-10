import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Heading } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

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
  return (
    <Wrapper>
      <Heading {...props}>{props.text}</Heading>
    </Wrapper>
  );
};
