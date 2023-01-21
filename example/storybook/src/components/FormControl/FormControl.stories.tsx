import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { FormControl } from './FormControl';
export const FormControlStory = () => {
  return (
    <Wrapper>
      <FormControl />
    </Wrapper>
  );
};
const MyFormControlVariantMeta: ComponentMeta<typeof FormControlStory> = {
  title: 'recipes/FormControl',
  component: FormControlStory,
};

export default MyFormControlVariantMeta;
