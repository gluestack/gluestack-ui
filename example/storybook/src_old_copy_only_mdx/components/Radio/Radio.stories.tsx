import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Radio } from './Radio';
export const RadioStory = () => {
  return <Radio />;
};
const MyRadioVariantMeta: ComponentMeta<typeof RadioStory> = {
  title: 'components/stories/Radio',
  component: RadioStory,
};

export default MyRadioVariantMeta;
