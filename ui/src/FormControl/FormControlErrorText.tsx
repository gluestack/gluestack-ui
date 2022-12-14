import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const FormControlErrorText = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlErrorText } = React.useContext(UIContext);

  return (
    <StyledFormControlErrorText ref={ref} {...props}>
      {children}
    </StyledFormControlErrorText>
  );
};

export default forwardRef(FormControlErrorText);
