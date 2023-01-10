import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';

export function ProgressFilledTrack<StyledProgressFilledTrack>(
  StyledProgressFilledTrack: React.ComponentType<StyledProgressFilledTrack>
) {
  //@ts-ignore
  return forwardRef(({ sx, ...props }: StyledProgressFilledTrack) => {
    const { valueWidth } = useProgress('ProgressContext');

    let mysx = { style: {} };
    if (sx) {
      sx.style['w'] = `${valueWidth}%`;
      mysx = sx;
    } else {
      // @ts-ignore
      mysx.style['w'] = `${valueWidth}%`;
    }

    return (
      <StyledProgressFilledTrack
        {...(props as StyledProgressFilledTrack)}
        sx={mysx}
      />
    );
  });
}
