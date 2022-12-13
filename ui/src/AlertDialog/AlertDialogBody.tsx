import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const AlertDialogBody = ({ children, ...props }: any, ref?: any) => {
  const { StyledAlertDialogBody } = React.useContext(UIContext);

  return (
    <StyledAlertDialogBody ref={ref} {...props}>
      {children}
    </StyledAlertDialogBody>
  );
};

export default forwardRef(AlertDialogBody);
