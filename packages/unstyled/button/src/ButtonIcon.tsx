import React, { forwardRef } from 'react';

export const ButtonIcon = (StyledButtonIcon: any) =>
  forwardRef((props: any, ref?: any) => {
    return <StyledButtonIcon {...props} ref={ref} />;
  });
