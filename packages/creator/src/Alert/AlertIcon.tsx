import React, { forwardRef } from 'react';
import type { ViewProps } from 'react-native';

export const AlertIcon = (StyledAlertIcon: any) =>
  forwardRef(({ children, ...props }: ViewProps) => {
    return <StyledAlertIcon {...props}>{children}</StyledAlertIcon>;
  });
