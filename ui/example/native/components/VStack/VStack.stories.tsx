import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { VStackExample } from './VStack';

const VStackMeta: ComponentMeta<typeof VStackExample> = {
  title: 'VStack',
  component: VStackExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default VStackMeta;

type MyBadgeStory = ComponentStory<typeof VStackExample>;

export const Basic: MyBadgeStory = (args) => <VStackExample {...args} />;
