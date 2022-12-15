import React, { forwardRef } from 'react';
import { AlertProvider } from './AlertContext';

const Alert = (StyledAlert: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledAlert ref={ref} {...props}>
        {({ resolveContextChildrenStyle }: any) => {
          return (
            <AlertProvider
              resolveContextChildrenStyle={resolveContextChildrenStyle}
              status={props?.status}
            >
              {children}
            </AlertProvider>
          );
        }}
      </StyledAlert>
    );
  });

export default Alert;
