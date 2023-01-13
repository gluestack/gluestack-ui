import React, { forwardRef } from 'react';
import { useProgress } from './ProgressContext';

export const ProgressFilledTrack = (StyledProgressFilledTrack: any) =>
  forwardRef(({ sx, ...props }: any) => {
    const { valueWidth } = useProgress('ProgressContext');

    let mysx = { style: {} };
    if (sx) {
      sx.style['w'] = `${valueWidth}%`;
      mysx = sx;
    } else {
      // @ts-ignore
      mysx.style['w'] = `${valueWidth}%`;
    }

    return <StyledProgressFilledTrack {...props} sx={mysx} />;
  });
