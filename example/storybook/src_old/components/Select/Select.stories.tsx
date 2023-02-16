import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Select } from './Select';
export const SelectStory = () => {
  return <Select />;
};
const MySelectVariantMeta: ComponentMeta<typeof SelectStory> = {
  title: 'components/stories/Select',
  component: SelectStory,
};

export default MySelectVariantMeta;
