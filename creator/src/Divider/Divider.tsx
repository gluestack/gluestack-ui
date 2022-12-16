import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const Divider = (StyledDivider: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { orientation, variant } = props;
    return (
      <StyledDivider
        ref={ref}
        {...props}
        aria-orientation={variant ?? orientation}
        //@ts-ignore web only role
        accessibilityRole={Platform.OS === 'web' ? 'separator' : undefined}
      >
        {children}
      </StyledDivider>
    );
  });
