import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { HStackExample } from './HStack';

const HStackMeta: ComponentMeta<typeof HStackExample> = {
  title: 'HStack',
  component: HStackExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default HStackMeta;

type MyBadgeStory = ComponentStory<typeof HStackExample>;

export const Basic: MyBadgeStory = (args) => <HStackExample {...args} />;
