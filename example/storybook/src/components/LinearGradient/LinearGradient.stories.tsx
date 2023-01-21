import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { LinearGradient } from './LinearGradient';
export const LinearGradientStory = () => {
  return (
    <Wrapper>
      <LinearGradient />
    </Wrapper>
  );
};
const MyLinearGradientVariantMeta: ComponentMeta<typeof LinearGradientStory> = {
  title: 'recipes/LinearGradient',
  component: LinearGradientStory,
};

export default MyLinearGradientVariantMeta;
