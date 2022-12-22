import React, { forwardRef } from 'react';

const Badge = (StyledBadge: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledBadge ref={ref} {...props}>
        {children}
      </StyledBadge>
    );
  });

export default Badge;
