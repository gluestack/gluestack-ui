import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
// import { Input } from './Input';
export const InputStory = () => {
  return (
    <Wrapper>
      <div>knlkn</div>
      {/* <Input /> */}
    </Wrapper>
  );
};
const MyInputVariantMeta: ComponentMeta<typeof InputStory> = {
  title: 'recipes/Input',
  component: InputStory,
};

export default MyInputVariantMeta;
