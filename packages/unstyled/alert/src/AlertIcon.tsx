import React, { forwardRef } from 'react';

export const AlertIcon = (StyledAlertIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlertIcon tabIndex={-1} ref={ref} {...props}>
        {children}
      </StyledAlertIcon>
    );
  });
