import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export function Divider<T>(StyledDivider: React.ComponentType<T>) {
  return forwardRef(({ children, ...props }: any, ref?: any) => {
    const { orientation } = props;

    return (
      <StyledDivider
        ref={ref}
        {...props}
        aria-orientation={orientation}
        //@ts-ignore web only role
        role={Platform.OS === 'web' ? 'separator' : undefined}
      >
        {children}
      </StyledDivider>
    );
  });
}
