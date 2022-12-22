import React from 'react';
import { Example } from './Basic';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

const MySelectMeta: ComponentMeta<typeof Example> = {
  title: 'Slider',
  component: Example,
  argTypes: {
    value: {
      control: { type: 'range', min: 1, max: 100 },
    },
  },
  args: { value: 30 },
};

export default MySelectMeta;

type MyCustomSelectStory = ComponentStory<typeof Example>;

export const Basic: MyCustomSelectStory = (args) => <Example {...args} />;
