import React, { forwardRef } from 'react';

const AlertDialogFooter = (StyledAlertDialogFooter: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlertDialogFooter ref={ref} {...props}>
        {children}
      </StyledAlertDialogFooter>
    );
  });

export default AlertDialogFooter;
