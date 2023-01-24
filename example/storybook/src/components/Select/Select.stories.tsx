import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Select } from './Select';
export const SelectStory = () => {
  return (
    <Wrapper>
      <Select />
    </Wrapper>
  );
};
const MySelectVariantMeta: ComponentMeta<typeof SelectStory> = {
  title: 'recipes/stories/Select',
  component: SelectStory,
};

export default MySelectVariantMeta;
