import { Root, FilledTrack } from './styled-component';
import { createProgress } from '@universa11y/progress';
import React from 'react';
import { Wrapper } from '../Wrapper';

const ProgressTemp = createProgress({
  Root,
  FilledTrack,
});

export const Progress = () => {
  return (
    <Wrapper>
      <ProgressTemp value={50}>
        <ProgressTemp.FilledTrack />
      </ProgressTemp>
    </Wrapper>
  );
};

export default Progress;
