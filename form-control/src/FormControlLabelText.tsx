import React, { forwardRef } from 'react';

const FormControlLabelText = (StyledFormControlLabelText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledFormControlLabelText ref={ref} {...props}>
        {children}
      </StyledFormControlLabelText>
    );
  });

export default FormControlLabelText;
