import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';

export function ProgressFilledTrack<StyledProgressFilledTrack>(
  StyledProgressFilledTrack: React.ComponentType<StyledProgressFilledTrack>
) {
  return forwardRef(({ style = {}, ...props }: any, ref?: any) => {
    const { valueWidth } = useProgress('ProgressContext');

    return (
      <StyledProgressFilledTrack
        {...(props as StyledProgressFilledTrack)}
        style={[style, { width: `${valueWidth}%`, height: '100%' }]}
        ref={ref}
      />
    );
  });
}
