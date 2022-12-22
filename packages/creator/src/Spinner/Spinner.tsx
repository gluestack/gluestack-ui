import React, { forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';

export const Spinner = (StyledSpinner: any) =>
  forwardRef(({ ...props }: any, ref: any) => {
    // return <ActivityIndicator {...props} />;
    return (
      <StyledSpinner
        {...props}
        ref={ref}
        accessible
        accessibilityLabel="loading"
        color="$red400"
        // size="large"
        // bg="$red400"
      />
    );
  });
