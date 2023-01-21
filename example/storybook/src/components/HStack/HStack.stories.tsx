import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { HStack } from './HStack';
export const HStackStory = () => {
  return (
    <Wrapper>
      <HStack />
    </Wrapper>
  );
};
const MyHStackVariantMeta: ComponentMeta<typeof HStackStory> = {
  title: 'recipes/HStack',
  component: HStackStory,
};

export default MyHStackVariantMeta;
