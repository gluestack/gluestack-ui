import React, { forwardRef } from 'react';

const AlertDialogHeader = (StyledAlertDialogHeader: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlertDialogHeader ref={ref} {...props}>
        {children}
      </StyledAlertDialogHeader>
    );
  });

export default AlertDialogHeader;
