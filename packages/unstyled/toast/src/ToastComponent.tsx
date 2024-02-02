import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export function ToastComponent(StyledToast: any) {
  return forwardRef(
    ({ children, ...props }: any & { children?: any }, ref?: any) => {
      const pointerEvents = Platform.OS === 'web' ? 'auto' : undefined;
      return (
        <StyledToast
          ref={ref}
          style={[{ pointerEvents }, { ...props.style }]}
          {...props}
        >
          {children}
        </StyledToast>
      );
    }
  );
}
