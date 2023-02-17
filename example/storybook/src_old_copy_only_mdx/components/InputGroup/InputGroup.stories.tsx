import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { InputGroup } from './InputGroup';
export const InputGroupStory = () => {
  return <InputGroup />;
};
const MyInputVariantMeta: ComponentMeta<typeof InputGroupStory> = {
  title: 'components/stories/InputGroup',
  component: InputGroupStory,
};

export default MyInputVariantMeta;
