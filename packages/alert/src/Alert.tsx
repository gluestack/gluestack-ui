import React, { forwardRef } from 'react';
import type { IAlertProps } from './types';

export const Alert = <T,>(StyledAlert: any) =>
  forwardRef(({ children, ...props }: T & IAlertProps, ref?: any) => {
    return (
      <StyledAlert
        ref={ref}
        accessibilityRole={props?.accessibilityRole || 'alert'}
        {...props}
      >
        {children}
      </StyledAlert>
    );
  });
