import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const AlertDialogHeader = ({ children, ...props }: any, ref: any) => {
  const { StyledAlertDialogHeader } = React.useContext(UIContext);

  return (
    <StyledAlertDialogHeader ref={ref} {...props}>
      {children}
    </StyledAlertDialogHeader>
  );
};

export default forwardRef(AlertDialogHeader);
