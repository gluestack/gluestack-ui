import React, { forwardRef } from 'react';
import type { ActivityIndicatorProps } from 'react-native';
export function Spinner<T>(StyledSpinner: React.ComponentType<T>) {
  return forwardRef(({ ...props }: T & ActivityIndicatorProps, ref?: any) => {
    return (
      <StyledSpinner {...props} ref={ref} tabIndex={-1} aria-label="loading" />
    );
  });
}
