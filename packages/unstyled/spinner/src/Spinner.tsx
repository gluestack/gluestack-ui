import React, { forwardRef } from 'react';
export function Spinner<T>(StyledSpinner: React.ComponentType<T>) {
  return forwardRef(({ ...props }: any, ref?: any) => {
    return (
      <StyledSpinner {...props} ref={ref} tabIndex={-1} aria-label="loading" />
    );
  });
}
