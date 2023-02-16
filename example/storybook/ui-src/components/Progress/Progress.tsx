import React from 'react';
import { Progress } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const ProgressBasicStory = ({ value = 50 }: any) => {
  return (
    <Wrapper>
      <Progress value={value}>
        <Progress.FilledTrack />
      </Progress>
    </Wrapper>
  );
};
