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
        dataSet={{
          checked: isChecked ? 'true' : 'false',
          disabled: isDisabled ? 'true' : 'false',
          focusVisible: isFocused || isFocusVisible ? 'true' : 'false',
          hover: isHovered ? 'true' : 'false',
          invalid: isInvalid ? 'true' : 'false',
          readonly: isReadOnly ? 'true' : 'false',
          indeterminate: isIndeterminate ? 'true' : 'false',
          focus: isFocused ? 'true' : 'false',
          active: isPressed ? 'true' : 'false',
        }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledRadioLabel>
    );
  });
