import React, { forwardRef } from 'react';

const AvatarBadge = (StyledAvatarBadge: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAvatarBadge ref={ref} {...props}>
        {children}
      </StyledAvatarBadge>
    );
  });

export default AvatarBadge;
