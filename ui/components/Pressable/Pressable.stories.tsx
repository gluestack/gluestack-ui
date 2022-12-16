import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyPressableMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Pressable',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyPressableMeta;

type MyCustomPressableStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomPressableStory = (args) => (
  <BasicExample {...args} />
);
