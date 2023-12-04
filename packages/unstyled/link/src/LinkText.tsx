import React, { forwardRef } from 'react';

export const LinkText = (StyledButtonText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledButtonText ref={ref} {...props}>
        {children}
      </StyledButtonText>
    );
  });
