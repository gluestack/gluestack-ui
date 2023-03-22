import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';

export function ProgressFilledTrack<StyledProgressFilledTrack>(
  StyledProgressFilledTrack: React.ComponentType<StyledProgressFilledTrack>
) {
  //@ts-ignore
  return forwardRef(({ sx, ...props }: StyledProgressFilledTrack, ref?: any) => {
    const { valueWidth } = useProgress('ProgressContext');

    let mysx = {};
    if (sx) {
      sx['w'] = `${valueWidth}%`;
      mysx = sx;
    } else {
      // @ts-ignore
      mysx['w'] = `${valueWidth}%`;
    }

    return (
      <StyledProgressFilledTrack
        {...(props as StyledProgressFilledTrack)}
        sx={mysx}
      />
    );
  });
}
