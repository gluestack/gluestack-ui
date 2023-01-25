import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { InputGroup } from './InputGroup';
export const InputGroupStory = () => {
  return (
    <Wrapper>
      <InputGroup />
    </Wrapper>
  );
};
const MyInputVariantMeta: ComponentMeta<typeof InputGroupStory> = {
  title: 'components/stories/InputGroup',
  component: InputGroupStory,
};

export default MyInputVariantMeta;
