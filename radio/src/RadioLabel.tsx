import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioLabel = (StyledRadioLabel: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      isHovered,
      isChecked,
      isDisabled,
      isFocusVisible,
      isInvalid,
      isReadOnly,
      isIndeterminate,
      isFocused,
      isPressed,
    } = useRadio('RadioContext');

    return (
      <StyledRadioLabel
        states={{
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocused || isFocusVisible,
          hover: isHovered,
          invalid: isInvalid,
          readonly: isReadOnly,
          indeterminate: isIndeterminate,
          focus: isFocused,
          active: isPressed,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledRadioLabel>
    );
  });
