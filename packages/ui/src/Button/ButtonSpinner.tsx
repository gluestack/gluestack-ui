import React, { forwardRef } from 'react';

const ButtonSpinner = (StyledButtonSpinner: any) =>
  forwardRef((props: any, ref: any) => {
    return (
      <StyledButtonSpinner
        {...props}
        accessible
        accessibilityLabel="loading"
        ref={ref}
      />
    );
  });

export { ButtonSpinner };
