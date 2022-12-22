import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './TextArea';

const MyTextAreaMeta: ComponentMeta<typeof BasicExample> = {
  title: 'TextArea',
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

export default MyTextAreaMeta;

type MyCustomTextStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomTextStory = (args) => <BasicExample {...args} />;
