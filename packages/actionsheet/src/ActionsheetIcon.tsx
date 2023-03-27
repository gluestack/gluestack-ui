import React, { forwardRef } from 'react';

export const ActionsheetIcon = (StyledActionsheetIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledActionsheetIcon {...props} ref={ref}>
        {children}
      </StyledActionsheetIcon>
    );
  });
