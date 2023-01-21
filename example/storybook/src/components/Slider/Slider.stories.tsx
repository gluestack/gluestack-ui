import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Slider } from './Slider';
export const SliderStory = () => {
  return (
    <Wrapper>
      <Slider />
    </Wrapper>
  );
};
const MySliderVariantMeta: ComponentMeta<typeof SliderStory> = {
  title: 'recipes/Slider',
  component: SliderStory,
};

export default MySliderVariantMeta;
