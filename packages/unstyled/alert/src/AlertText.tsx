import React, { forwardRef } from 'react';

export const AlertText = (StyledAlertText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlertText ref={ref} {...props}>
        {children}
      </StyledAlertText>
    );
  });
