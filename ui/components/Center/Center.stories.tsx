import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyCenterMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Center',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyCenterMeta;

type MyCustomCenterStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomCenterStory = (args) => <BasicExample {...args} />;
