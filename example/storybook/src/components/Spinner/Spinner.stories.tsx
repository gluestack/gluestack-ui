import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Spinner } from './Spinner';
export const SpinnerStory = () => {
  return <Spinner />;
};
const MySpinnerVariantMeta: ComponentMeta<typeof SpinnerStory> = {
  title: 'components/stories/Spinner',
  component: SpinnerStory,
};

export default MySpinnerVariantMeta;
