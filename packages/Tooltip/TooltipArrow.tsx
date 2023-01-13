import React, { forwardRef } from 'react';

export const TooltipArrow = (StyledTooltipArrow: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledTooltipArrow ref={ref} {...props}>
        {children}
      </StyledTooltipArrow>
    );
  });
