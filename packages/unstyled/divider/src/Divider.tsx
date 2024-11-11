import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import type { ViewProps } from 'react-native';
import type { IDividerProps } from './types';

export function Divider<T>(StyledDivider: React.ComponentType<T>) {
  return forwardRef(
    ({ children, ...props }: T & ViewProps & IDividerProps, ref?: any) => {
      const { orientation } = props;

      return (
        <StyledDivider
          ref={ref}
          {...(props as T & ViewProps & IDividerProps)}
          aria-orientation={orientation}
          //@ts-ignore web only role
          role={Platform.OS === 'web' ? 'separator' : undefined}
        >
          {children}
        </StyledDivider>
      );
    }
  );
}
