import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Checkbox } from './Checkbox';
export const CheckboxStory = () => {
  return (
    <Wrapper>
      <Checkbox />
    </Wrapper>
  );
};
const MyCheckboxVariantMeta: ComponentMeta<typeof CheckboxStory> = {
  title: 'components/stories/Checkbox',
  component: CheckboxStory,
};

export default MyCheckboxVariantMeta;
