import React, { forwardRef } from 'react';

export const SelectIcon = (StyledSelectIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledSelectIcon tabIndex={-1} {...props} ref={ref}>
        {children}
      </StyledSelectIcon>
    );
  });
