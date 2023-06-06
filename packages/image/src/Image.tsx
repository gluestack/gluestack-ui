import React, { forwardRef } from 'react';

export const Image = (StyledImage: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledImage ref={ref} {...props}>
        {children}
      </StyledImage>
    );
  });
