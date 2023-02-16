import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Divider } from './Divider';
export const DividerStory = () => {
  return <Divider />;
};
const MyDividerVariantMeta: ComponentMeta<typeof DividerStory> = {
  title: 'components/stories/Divider',
  component: DividerStory,
};

export default MyDividerVariantMeta;
