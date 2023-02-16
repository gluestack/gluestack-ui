import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { HStack } from './HStack';

export const HStackStory = () => {
  return <HStack />;
};
const MyHStackVariantMeta: ComponentMeta<typeof HStackStory> = {
  title: 'components/stories/HStack',
  component: HStackStory,
};

export default MyHStackVariantMeta;
