import React, { forwardRef } from 'react';

const BadgeText = (StyledBadgeText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledBadgeText ref={ref} {...props}>
        {children}
      </StyledBadgeText>
    );
  });

export default BadgeText;
