import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Slider } from './Slider';
export const SliderStory = () => {
  return <Slider />;
};
const MySliderVariantMeta: ComponentMeta<typeof SliderStory> = {
  title: 'components/stories/Slider',
  component: SliderStory,
};

export default MySliderVariantMeta;
