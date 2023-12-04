import React, { forwardRef } from 'react';

const FormControlErrorText = (StyledFormControlErrorText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledFormControlErrorText ref={ref} {...props}>
        {children}
      </StyledFormControlErrorText>
    );
  });

export default FormControlErrorText;
