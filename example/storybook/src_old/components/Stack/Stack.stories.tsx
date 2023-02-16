import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Stack } from './Stack';

export const StackStory = () => {
  return <Stack />;
};
const MyStackVariantMeta: ComponentMeta<typeof StackStory> = {
  title: 'components/stories/Stack',
  component: StackStory,
};

export default MyStackVariantMeta;
