import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';

export function ProgressFilledTrack<StyledProgressFilledTrack>(
  StyledProgressFilledTrack: React.ComponentType<StyledProgressFilledTrack>
) {
  return forwardRef(({ style = {}, ...props }: any, ref?: any) => {
    const { valueWidth, valueHeight, orientation } =
      useProgress('ProgressContext');

    const filledStyle =
      orientation === 'vertical'
        ? { height: `${valueHeight}%`, width: '100%' }
        : { width: `${valueWidth}%`, height: '100%' };

    return (
      <StyledProgressFilledTrack
        {...(props as StyledProgressFilledTrack)}
        style={[style, filledStyle]}
        ref={ref}
      />
    );
  });
}
