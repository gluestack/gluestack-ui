import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Progress } from './Progress';
export const ProgressStory = () => {
  return (
    <Wrapper>
      <Progress />
    </Wrapper>
  );
};
const MyProgressVariantMeta: ComponentMeta<typeof ProgressStory> = {
  title: 'recipes/stories/Progress',
  component: ProgressStory,
};

export default MyProgressVariantMeta;
