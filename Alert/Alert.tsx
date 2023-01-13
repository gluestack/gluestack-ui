import React, { forwardRef } from 'react';
import { AlertProvider } from './AlertContext';

export const Alert = (StyledAlert: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAlert ref={ref} {...props}>
        <AlertProvider status={props?.status}>{children}</AlertProvider>
      </StyledAlert>
    );
  });
