import React, { forwardRef } from 'react';

export const ButtonSpinner = (StyledButtonSpinner: any) =>
  forwardRef((props: any, ref?: any) => {
    return (
      <StyledButtonSpinner
        {...props}
        tabIndex={0}
        aria-label="loading"
        ref={ref}
      />
    );
  });
