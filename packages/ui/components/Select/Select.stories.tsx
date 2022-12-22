import React from 'react';
import { Example } from './Basic';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

const MySelectMeta: ComponentMeta<typeof Example> = {
  title: 'Select',
  component: Example,
  argTypes: {
    // size: {
    //   control: 'select',
    //   options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    // },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    // size: 'md',
    isDisabled: false,
    isInvalid: false,
  },
};

export default MySelectMeta;

type MyCustomSelectStory = ComponentStory<typeof Example>;

export const Basic: MyCustomSelectStory = (args) => <Example {...args} />;
