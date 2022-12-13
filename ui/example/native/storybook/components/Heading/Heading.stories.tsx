import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { HeadingBasicExample } from './Heading';

const MyHeadingMeta: ComponentMeta<typeof HeadingBasicExample> = {
  title: 'MyHeadingbox',
  component: HeadingBasicExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyHeadingMeta;

type MyHeadingStory = ComponentStory<typeof HeadingBasicExample>;

export const Basic: MyHeadingStory = (args) => <HeadingBasicExample />;
