import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyFormControlMeta: ComponentMeta<typeof BasicExample> = {
  title: 'FormControl',
  component: BasicExample,
  argTypes: {
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isRequired: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isInvalid: true,
    isRequired: true,
    isDisabled: false,
  },
};

export default MyFormControlMeta;

type MyCustomFormControlStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomFormControlStory = (args) => (
  <BasicExample {...args} />
);
