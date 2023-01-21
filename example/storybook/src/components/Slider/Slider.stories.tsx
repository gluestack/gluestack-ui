import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Spinner } from './Spinner';
export const SpinnerStory = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};
const MySpinnerVariantMeta: ComponentMeta<typeof SpinnerStory> = {
  title: 'recipes/Spinner',
  component: SpinnerStory,
};

export default MySpinnerVariantMeta;
