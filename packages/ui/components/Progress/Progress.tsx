import React from 'react';
import { Progress } from '@gluestack/ui';

export const ProgressBasic = () => {
  return (
    <Progress value={40}>
      <Progress.FilledTrack />
    </Progress>
  );
};
