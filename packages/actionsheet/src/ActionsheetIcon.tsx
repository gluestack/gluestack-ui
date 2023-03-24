import React, { forwardRef } from 'react';

export const ActionsheetIcon = (StyledActionsheetIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    return <StyledActionsheetIcon {...props}>{children}</StyledActionsheetIcon>;
  });
