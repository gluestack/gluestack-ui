import React, { forwardRef } from 'react';
import { AccessibilityInfo } from 'react-native';
export function ToastTitle<StyledToastTitleProps>(
  StyledToastTitle: React.ComponentType<StyledToastTitleProps>
) {
  return forwardRef(
    (
      { children, ...props }: StyledToastTitleProps & { children?: any },
      ref?: any
    ) => {
      React.useEffect(() => {
        // Issue from react-native side
        // Hack for now, will fix this later
        AccessibilityInfo.announceForAccessibility(children);
      });
      return (
        <StyledToastTitle
          {...(props as StyledToastTitleProps)}
          ref={ref}
          aria-live="assertive"
          aria-atomic="true"
          role="alert"
        >
          {children}
        </StyledToastTitle>
      );
    }
  );
}
