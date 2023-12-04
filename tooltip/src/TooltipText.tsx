import React, { forwardRef } from 'react';

export const TooltipText = (StyledTooltipText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledTooltipText ref={ref} {...props}>
        {children}
      </StyledTooltipText>
    );
  });
