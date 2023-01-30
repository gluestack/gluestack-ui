import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Input } from './Input';
export const InputStory = () => {
  return <Input />;
};

const MyInputVariantMeta: ComponentMeta<typeof InputStory> = {
  title: 'components/stories/Input',
  component: InputStory,
};

export default MyInputVariantMeta;
