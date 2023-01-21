import { Root, FilledTrack } from './styled-component';
import { createProgress } from '@universa11y/progress';
import React from 'react';

const ProgressTemp = createProgress({
  Root,
  FilledTrack,
}) as any;

export const Progress = () => {
  return (
    <>
      <ProgressTemp value={50}>
        <ProgressTemp.FilledTrack />
      </ProgressTemp>
    </>
  );
};
