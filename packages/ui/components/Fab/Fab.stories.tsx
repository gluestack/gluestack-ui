import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FabExample } from './Fab';

const FabMeta: ComponentMeta<typeof FabExample> = {
  title: 'Fab',
  component: FabExample,
  argTypes: {
    variant: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'bottom-right',
    showLabel: true,
  },
};

export default FabMeta;

type MyBadgeStory = ComponentStory<typeof FabExample>;

export const Basic: MyBadgeStory = (args) => <FabExample {...args} />;
