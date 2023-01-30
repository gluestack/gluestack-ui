import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Progress } from './Progress';
export const ProgressStory = () => {
  return <Progress />;
};
const MyProgressVariantMeta: ComponentMeta<typeof ProgressStory> = {
  title: 'components/stories/Progress',
  component: ProgressStory,
};

export default MyProgressVariantMeta;
