import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Basic as BasicExample } from './Basic';

const MySwitchMeta: ComponentMeta<typeof BasicExample> = {
  title: 'BasicSwitch',
  component: BasicExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MySwitchMeta;

type BasicSwitch = ComponentStory<typeof BasicExample>;

export const Basic: BasicSwitch = () => <BasicExample />;
