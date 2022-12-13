import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyDividerExample } from './Divider';

const MyDividerMeta: ComponentMeta<typeof MyDividerExample> = {
  title: 'Divider',
  component: MyDividerExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyDividerMeta;

type MyDividerStory = ComponentStory<typeof MyDividerExample>;

export const Basic: MyDividerStory = (args) => <MyDividerExample {...args} />;
