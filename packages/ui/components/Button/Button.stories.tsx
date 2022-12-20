import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Button';
import { Example as Grouped } from './ButtonGroup';

const MyButtonMeta: ComponentMeta<typeof Example> = {
  title: 'Button',
  component: Example,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
  },
  args: {
    text: 'Press me',
    variant: 'solid',
    size: 'md',
    isLoading: false,
    leftIcon: false,
    rightIcon: false,
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Example>;
type MyButtonGroupStory = ComponentStory<typeof Grouped>;

export const Basic: MyButtonStory = (args) => <Example {...args} />;
export const GroupedExample: MyButtonGroupStory = (args) => (
  <Grouped {...args} />
);
