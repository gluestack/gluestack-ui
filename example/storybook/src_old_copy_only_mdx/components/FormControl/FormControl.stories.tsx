import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { FormControl } from './FormControl';
export const FormControlStory = () => {
  return <FormControl />;
};
const MyFormControlVariantMeta: ComponentMeta<typeof FormControlStory> = {
  title: 'components/stories/FormControl',
  component: FormControlStory,
};

export default MyFormControlVariantMeta;
