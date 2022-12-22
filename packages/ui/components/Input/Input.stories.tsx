import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyInputMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Input',
  component: BasicExample,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'underlined', 'unstyled', 'rounded'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: { size: 'sm', variant: 'outline', isInvalid: false, isDisabled: false },
};

export default MyInputMeta;

type MyCustomInputStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomInputStory = (args) => <BasicExample {...args} />;
