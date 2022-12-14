import React from 'react';
import { Progress } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const ProgressBasic = () => {
  return (
    <Wrapper>
      <Progress
        value={70}
        sx={{
          style: { bg: '$primary.500', width: '10' },
        }}
      >
        <Progress.FilledTrack />
      </Progress>
    </Wrapper>
  );
};
