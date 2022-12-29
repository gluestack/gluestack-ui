import React, { forwardRef } from 'react';

export function Spinner<T>(StyledButtonSpinner: React.ComponentType<T>) {
  return forwardRef((props: T, ref: any) => {
    return (
      <StyledButtonSpinner
        {...props}
        accessible
        accessibilityLabel="loading"
        ref={ref}
      />
    );
  });
}
