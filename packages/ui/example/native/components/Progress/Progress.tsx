import React from 'react';
import { Progress } from '@gluestack/ui-components';

export const ProgressBasic = () => {
  return (
    <Progress
      value={70}
      sx={{
        style: { bg: '$primary.500', width: '10' },
      }}
    >
      <Progress.FilledTrack />
    </Progress>
  );
};
