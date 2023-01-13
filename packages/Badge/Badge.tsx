import React, { forwardRef } from 'react';

export const Badge = (StyledBadge: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledBadge ref={ref} {...props}>
        {children}
      </StyledBadge>
    );
  });
