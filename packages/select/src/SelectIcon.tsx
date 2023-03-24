import React, { forwardRef } from 'react';

export const SelectIcon = (StyledSelectIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    return <StyledSelectIcon {...props}>{children}</StyledSelectIcon>;
  });
