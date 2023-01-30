import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Checkbox } from './Checkbox';
export const CheckboxStory = () => {
  return <Checkbox />;
};
const MyCheckboxVariantMeta: ComponentMeta<typeof CheckboxStory> = {
  title: 'components/stories/Checkbox',
  component: CheckboxStory,
};

export default MyCheckboxVariantMeta;
