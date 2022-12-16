import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ProgressBasic } from './Progress';

const ProgressMeta: ComponentMeta<typeof ProgressBasic> = {
  title: 'Progress',
  component: ProgressBasic,
  argTypes: {},
  args: {},
};

export default ProgressMeta;

type ProgressBasicStory = ComponentStory<typeof ProgressBasic>;

export const Basic: ProgressBasicStory = () => <ProgressBasic />;
