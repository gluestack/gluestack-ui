import React, { forwardRef } from 'react';

const ActionsheetDragIndicator = (StyledActionsheetDragIndicator: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledActionsheetDragIndicator ref={ref} {...props}>
        {children}
      </StyledActionsheetDragIndicator>
    );
  });

export default ActionsheetDragIndicator;
