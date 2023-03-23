import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import type { IDividerProps } from './types';

export function Divider<StyledDividerProps>(
  StyledDivider: React.ComponentType<StyledDividerProps>
) {
  return forwardRef(
    ({ children, ...props }: StyledDividerProps & IDividerProps, ref: any) => {
      const { orientation } = props;

      return (
        <StyledDivider
          ref={ref}
          {...(props as StyledDividerProps)}
          aria-orientation={orientation}
          //@ts-ignore web only role
          accessibilityRole={Platform.OS === 'web' ? 'separator' : undefined}
        >
          {children}
        </StyledDivider>
      );
    }
  );
}
