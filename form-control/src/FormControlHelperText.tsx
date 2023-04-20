import React, { forwardRef } from 'react';

const FormControlHelperText = (StyledFormControlHelperText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledFormControlHelperText ref={ref} {...props}>
        {children}
      </StyledFormControlHelperText>
    );
  });

export default FormControlHelperText;
