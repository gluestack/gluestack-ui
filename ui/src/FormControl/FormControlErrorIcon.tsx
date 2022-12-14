import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const FormControlErrorIcon = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlErrorIcon } = React.useContext(UIContext);

  return (
    <StyledFormControlErrorIcon ref={ref} {...props}>
      {children}
    </StyledFormControlErrorIcon>
  );
};

export default forwardRef(FormControlErrorIcon);
