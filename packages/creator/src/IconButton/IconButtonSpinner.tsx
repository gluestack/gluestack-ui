import React, { forwardRef } from 'react';

function Spinner<StyledIconButtonSpinner>(
  StyledIconButtonSpinner: React.ComponentType<StyledIconButtonSpinner>
) {
  return forwardRef((props: StyledIconButtonSpinner, ref: any) => {
    return (
      <StyledIconButtonSpinner
        {...(props as StyledIconButtonSpinner)}
        accessible
        accessibilityLabel="loading"
        ref={ref}
      />
    );
  });
}
export default Spinner;
