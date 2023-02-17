import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Pressable } from './Pressable';
export const PressableStory = () => {
  return <Pressable />;
};
const MyPressableVariantMeta: ComponentMeta<typeof PressableStory> = {
  title: 'components/stories/Pressable',
  component: PressableStory,
};

export default MyPressableVariantMeta;
