import React, { forwardRef } from 'react';

const AlertDialogBody = (StyledAlertDialogBody: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlertDialogBody ref={ref} {...props}>
        {children}
      </StyledAlertDialogBody>
    );
  });

export default AlertDialogBody;
