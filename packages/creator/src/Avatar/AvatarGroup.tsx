import React, { forwardRef } from 'react';

const AvatarGroup = (StyledAvatarGroup: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAvatarGroup ref={ref} {...props}>
        {children}
      </StyledAvatarGroup>
    );
  });

export default AvatarGroup;
