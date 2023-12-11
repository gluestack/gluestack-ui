import React, { forwardRef } from 'react';

export function TooltipArrow<StyledTooltipArrowProps>(
  StyledTooltipArrow: React.ComponentType<StyledTooltipArrowProps>
) {
  return forwardRef(
    (
      { children, ...props }: StyledTooltipArrowProps & { children?: any },
      ref?: any
    ) => {
      return (
        <StyledTooltipArrow ref={ref} {...(props as StyledTooltipArrowProps)}>
          {children}
        </StyledTooltipArrow>
      );
    }
  );
}
