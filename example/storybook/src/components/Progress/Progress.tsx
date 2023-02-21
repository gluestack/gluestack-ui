import React from 'react';
import Wrapper from '../Wrapper';

import { createProgress } from '@universa11y/progress';
import { Root, FilledTrack } from '../styled-components/progress';

export const Progress = createProgress({
  Root,
  FilledTrack,
});

export const ProgressBasicStory = ({ value = 50, ...props }: any) => {
  return (
    <Wrapper>
      <Progress value={value} {...props}>
        <Progress.FilledTrack />
      </Progress>
    </Wrapper>
  );
};
