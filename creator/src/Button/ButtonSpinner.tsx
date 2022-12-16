import React, { forwardRef } from 'react';

const Spinner = (StyledButtonSpinner: any) =>
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

export default Spinner;
