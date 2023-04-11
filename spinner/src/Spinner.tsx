import React, { forwardRef } from 'react';
import type { ActivityIndicatorProps } from 'react-native';

export function Spinner<StyledSpinnerProps>(
  StyledSpinner: React.ComponentType<StyledSpinnerProps>
) {
  return forwardRef(
    (
      { ...props }: Omit<StyledSpinnerProps, 'size'> & ActivityIndicatorProps,
      ref: any
    ) => {
      return (
        <StyledSpinner
          {...(props as StyledSpinnerProps)}
          ref={ref}
          accessible
          accessibilityLabel="loading"
        />
      );
    }
  );
}
