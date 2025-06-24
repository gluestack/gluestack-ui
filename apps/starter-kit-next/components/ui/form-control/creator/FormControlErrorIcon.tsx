import React, { forwardRef } from 'react';

const FormControlErrorIcon = (StyledFormControlErrorIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledFormControlErrorIcon ref={ref} {...props}>
        {children}
      </StyledFormControlErrorIcon>
    );
  });

export default FormControlErrorIcon;
