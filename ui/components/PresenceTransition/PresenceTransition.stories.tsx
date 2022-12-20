import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyPresenceTransitionMeta: ComponentMeta<typeof BasicExample> = {
  title: 'PresenceTransition',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyPresenceTransitionMeta;

type MyCustomPresenceTransitionStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomPresenceTransitionStory = () => <BasicExample />;
