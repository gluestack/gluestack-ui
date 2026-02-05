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
        // data attributes for uniwind
        data-checked={isChecked ? 'true' : 'false'}
        data-disabled={isDisabled ? 'true' : 'false'}
        data-focus-visible={isFocused || isFocusVisible ? 'true' : 'false'}
        data-invalid={isInvalid ? 'true' : 'false'}
        data-readonly={isReadOnly ? 'true' : 'false'}
        data-indeterminate={isIndeterminate ? 'true' : 'false'}
        data-focus={isFocused ? 'true' : 'false'}
        data-active={isPressed ? 'true' : 'false'}
        // data attributes for nativewind
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
