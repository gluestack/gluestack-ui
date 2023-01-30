import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Switch } from './Switch';
export const SwitchStory = () => {
  return <Switch />;
};
const MySwitchVariantMeta: ComponentMeta<typeof SwitchStory> = {
  title: 'components/stories/Switch',
  component: SwitchStory,
};

export default MySwitchVariantMeta;
