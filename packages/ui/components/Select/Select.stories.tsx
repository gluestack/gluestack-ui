import React from 'react';
import { Example } from './Basic';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

const MySelectMeta: ComponentMeta<typeof Example> = {
  title: 'Select',
  component: Example,
  argTypes: {},
  args: {},
};

export default MySelectMeta;

type MyCustomSelectStory = ComponentStory<typeof Example>;

export const Basic: MyCustomSelectStory = (args) => <Example {...args} />;
