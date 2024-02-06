import React, { forwardRef } from 'react';

export const CollapsibleContentText = (StyledCollapsibleContentText: any) =>
  forwardRef((props: any, ref?: any) => {
    return <StyledCollapsibleContentText ref={ref} {...props} />;
  });
