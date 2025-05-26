import React, { forwardRef } from 'react';

export const FabIcon = (StyledFabIcon: any) =>
  forwardRef((props: any, ref?: any) => {
    return <StyledFabIcon {...props} ref={ref} />;
  });
