import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Basic as BasicExample } from './Basic';

const MySwitchMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Switch',
  component: BasicExample,
  argTypes: {
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isDisabled: false,
  },
};

export default MySwitchMeta;

type BasicSwitch = ComponentStory<typeof BasicExample>;

export const Basic: BasicSwitch = (args) => <BasicExample {...args} />;
