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
        // data attributes for uniwind
        data-hover={isHovered ? 'true' : 'false'}
        data-focus={isFocused ? 'true' : 'false'}
        data-active={isPressed ? 'true' : 'false'}
        data-disabled={isDisabled ? 'true' : 'false'}
        data-focus-visible={isFocusVisible ? 'true' : 'false'}
        // data attributes for nativewind
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
