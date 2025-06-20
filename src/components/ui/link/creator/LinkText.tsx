import React, { forwardRef } from 'react';
import { useLinkContext } from './Context';
export const LinkText = (StyledButtonText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { isHovered, isFocused, isPressed, isDisabled, isFocusVisible } =
      useLinkContext();
    return (
      <StyledButtonText
        ref={ref}
        {...props}
        states={{
          hover: isHovered,
          focus: isFocused,
          active: isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        dataSet={{
          hover: isHovered,
          focus: isFocused,
          active: isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
      >
        {children}
      </StyledButtonText>
    );
  });
