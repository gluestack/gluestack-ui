import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyInputMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Input',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyInputMeta;

type MyCustomInputStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomInputStory = (args) => <BasicExample {...args} />;
