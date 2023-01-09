import React, { forwardRef } from 'react';

export const ActionsheetItemText = (StyledActionsheetText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledActionsheetText ref={ref} {...props}>
        {children}
      </StyledActionsheetText>
    );
  });
