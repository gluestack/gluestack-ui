import React, { forwardRef } from 'react';
import type { IAlertProps } from './types';

export const Alert = <T,>(StyledAlert: any) =>
  forwardRef(({ children, ...props }: T & IAlertProps, ref?: any) => {
    return (
      <StyledAlert ref={ref} role={props?.role || 'alert'} {...props}>
        {children}
      </StyledAlert>
    );
  });
