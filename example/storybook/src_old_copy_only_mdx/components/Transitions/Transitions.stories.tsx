import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Transitions } from './Transitions';

export const TransitionsStory = () => {
  return <Transitions />;
};
const MyHStackVariantMeta: ComponentMeta<typeof TransitionsStory> = {
  title: 'components/stories/Transitions',
  component: TransitionsStory,
};

export default MyHStackVariantMeta;
