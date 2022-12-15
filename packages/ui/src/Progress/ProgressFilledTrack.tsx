import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';

export const ProgressFilledTrack = (StyledProgressFilledTrack: any) =>
  forwardRef(({ ...props }) => {
    const { valueWidth } = useProgress('ProgressContext');
    return (
      <StyledProgressFilledTrack
        style={{
          width: `${valueWidth}%`,
        }}
        {...props}
      />
    );
  });
