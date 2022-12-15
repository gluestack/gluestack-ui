import React, { forwardRef } from 'react';

export const Text = (StyledText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledText ref={ref} {...props}>
        {children}
      </StyledText>
    );
  });
