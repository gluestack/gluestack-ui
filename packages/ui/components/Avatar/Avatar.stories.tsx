import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Basic';
import { Example as Grouped } from './Group';

const MyAvatarMeta: ComponentMeta<typeof Example> = {
  title: 'Avatar',
  component: Example,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  args: {
    size: 'md',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackText: 'AB',
    badge: false,
  },
};

export default MyAvatarMeta;

type MyCustomAvatarStory = ComponentStory<typeof Example>;
type MyCustomAvatarGroupStory = ComponentStory<typeof Grouped>;

export const Basic: MyCustomAvatarStory = (args) => <Example {...args} />;
export const Group: MyCustomAvatarGroupStory = (args) => <Grouped {...args} />;
