import React, { forwardRef } from 'react';

export const AlertIcon = (StyledAlertIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlertIcon focusable={false} ref={ref} {...props}>
        {children}
      </StyledAlertIcon>
    );
  });
