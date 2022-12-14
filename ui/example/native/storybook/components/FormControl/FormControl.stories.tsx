import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyFormControlMeta: ComponentMeta<typeof BasicExample> = {
  title: 'FormControl',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyFormControlMeta;

type MyCustomFormControlStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomFormControlStory = (args) => (
  <BasicExample {...args} />
);
