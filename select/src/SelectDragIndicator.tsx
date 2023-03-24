import React, { forwardRef } from 'react';

export const SelectDragIndicator = (StyledSelectDragIndicator: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledSelectDragIndicator {...props} ref={ref}>
        {children}
      </StyledSelectDragIndicator>
    );
  });
