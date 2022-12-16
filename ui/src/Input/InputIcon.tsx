import React from 'react';
import type { ViewProps } from 'react-native';

export const InputIcon =
  (StyledInputIcon: any) =>
  ({ children, ...props }: ViewProps) => {
    return <StyledInputIcon {...props}>{children}</StyledInputIcon>;
  };
