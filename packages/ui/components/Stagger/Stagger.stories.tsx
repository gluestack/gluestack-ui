import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyStaggerMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Stagger',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyStaggerMeta;

type MyCustomStaggerStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomStaggerStory = (args) => <BasicExample {...args} />;
