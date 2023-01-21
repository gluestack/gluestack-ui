import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Pressable } from './Pressable';
export const PressableStory = () => {
  return (
    <Wrapper>
      <Pressable />
    </Wrapper>
  );
};
const MyPressableVariantMeta: ComponentMeta<typeof PressableStory> = {
  title: 'recipes/Pressable',
  component: PressableStory,
};

export default MyPressableVariantMeta;
