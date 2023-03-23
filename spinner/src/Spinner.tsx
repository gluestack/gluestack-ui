import React, { forwardRef } from 'react';

export function Spinner<StyledSpinnerProps>(
  StyledSpinner: React.ComponentType<StyledSpinnerProps>
) {
  return forwardRef(({ ...props }: StyledSpinnerProps, ref: any) => {
    return (
      <StyledSpinner
        {...(props as StyledSpinnerProps)}
        ref={ref}
        accessible
        accessibilityLabel="loading"
      />
    );
  });
}
