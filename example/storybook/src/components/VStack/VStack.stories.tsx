import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { VStack } from './VStack';

export const VStackStory = () => {
  return <VStack />;
};
const MyVStackVariantMeta: ComponentMeta<typeof VStackStory> = {
  title: 'components/stories/VStack',
  component: VStackStory,
};

export default MyVStackVariantMeta;
