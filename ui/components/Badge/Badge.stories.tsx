import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyBadgeExample } from './Badge';

const MyButtonMeta: ComponentMeta<typeof MyBadgeExample> = {
  title: 'Badge',
  component: MyBadgeExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyButtonMeta;

type MyBadgeStory = ComponentStory<typeof MyBadgeExample>;

export const Basic: MyBadgeStory = (args) => <MyBadgeExample {...args} />;
