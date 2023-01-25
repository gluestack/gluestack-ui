import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Input } from './Input';
export const InputStory = () => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
};

const MyInputVariantMeta: ComponentMeta<typeof InputStory> = {
  title: 'components/stories/Input',
  component: InputStory,
};

export default MyInputVariantMeta;
