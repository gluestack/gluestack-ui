import React, { forwardRef } from 'react';

export const SelectIcon = (StyledSelectIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledSelectIcon focusable={false} {...props} ref={ref}>
        {children}
      </StyledSelectIcon>
    );
  });
