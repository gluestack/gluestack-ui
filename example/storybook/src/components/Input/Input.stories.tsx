import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Input, InputGroup } from './Input';
export const InputStory = () => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
};

export const InputGroupStory = () => {
  return (
    <Wrapper>
      <InputGroup />
    </Wrapper>
  );
};
const MyInputVariantMeta: ComponentMeta<typeof InputStory> = {
  title: 'recipes/stories/Input',
  component: InputStory,
};

export default MyInputVariantMeta;
