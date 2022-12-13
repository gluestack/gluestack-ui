import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { AlertProvider } from './AlertContext';

const Alert = ({ children, ...props }: any, ref: any) => {
  const { StyledAlert } = React.useContext(UIContext);

  return (
    <StyledAlert ref={ref} {...props}>
      {({ resolveContextChildrenStyle }: any) => {
        return (
          <AlertProvider
            value={{
              resolveContextChildrenStyle: resolveContextChildrenStyle,
            }}
            status={props?.status}
          >
            {children}
          </AlertProvider>
        );
      }}
    </StyledAlert>
  );
};

export default forwardRef(Alert);
