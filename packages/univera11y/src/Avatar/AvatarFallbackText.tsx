import React, { forwardRef } from 'react';

export const AvatarFallbackText = (StyledAvatarFallbackText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAvatarFallbackText ref={ref} {...props}>
        {children}
      </StyledAvatarFallbackText>
    );
  });
