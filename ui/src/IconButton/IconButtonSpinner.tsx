import React, { forwardRef } from 'react';

const Spinner = (StyledIconButtonSpinner: any) =>
  forwardRef((props: any, ref: any) => {
    return (
      <StyledIconButtonSpinner
        {...props}
        accessible
        accessibilityLabel="loading"
        ref={ref}
      />
    );
  });

export default Spinner;
