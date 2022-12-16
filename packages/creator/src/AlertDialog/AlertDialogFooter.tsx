import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const AlertDialogFooter = ({ children, ...props }: any, ref: any) => {
  const { StyledAlertDialogFooter } = React.useContext(UIContext);

  return (
    <StyledAlertDialogFooter ref={ref} {...props}>
      {children}
    </StyledAlertDialogFooter>
  );
};

export default forwardRef(AlertDialogFooter);
