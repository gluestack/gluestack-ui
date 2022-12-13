import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FabExample } from './Fab';

const FabMeta: ComponentMeta<typeof FabExample> = {
  title: 'Fab',
  component: FabExample,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default FabMeta;

type MyBadgeStory = ComponentStory<typeof FabExample>;

export const Basic: MyBadgeStory = (args) => <FabExample {...args} />;
