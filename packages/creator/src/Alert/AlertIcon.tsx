import React, { forwardRef } from 'react';
import type { ViewProps } from 'react-native';
import { useAlert } from './AlertContext';

export const AlertIcon = (StyledAlertIcon: any) =>
  forwardRef(({ children, ...props }: ViewProps) => {
    const { resolveContextChildrenStyle } = useAlert('Alert');

    const { ancestorStyle } = StyledAlertIcon.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledAlertIcon {...props} ancestorStyle={styledObject}>
        {children}
      </StyledAlertIcon>
    );
  });
