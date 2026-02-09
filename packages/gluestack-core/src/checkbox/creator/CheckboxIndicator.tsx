import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIndicator = (StyledCheckboxIndicator: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      isChecked,
      isDisabled,
      isHovered,
      isInvalid,
      isReadOnly,
      isPressed,
      isFocused,
      isIndeterminate,
      isFocusVisible,
    } = useCheckbox('CheckboxContext');

    return (
      <StyledCheckboxIndicator
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
          invalid: isInvalid,
          readOnly: isReadOnly,
          active: isPressed,
          focused: isFocused,
          indeterminate: isIndeterminate,
        }}
        // data attributes for uniwind
        data-hover={isHovered ? 'true' : 'false'}
        data-checked={isChecked ? 'true' : 'false'}
        data-disabled={isDisabled ? 'true' : 'false'}
        data-focus-visible={isFocusVisible ? 'true' : 'false'}
        data-invalid={isInvalid ? 'true' : 'false'}
        data-readonly={isReadOnly ? 'true' : 'false'}
        data-active={isPressed ? 'true' : 'false'}
        data-focused={isFocused ? 'true' : 'false'}
        data-indeterminate={isIndeterminate ? 'true' : 'false'}
        // data attributes for nativewind
        dataSet={{
          hover: isHovered ? 'true' : 'false',
          checked: isChecked ? 'true' : 'false',
          disabled: isDisabled ? 'true' : 'false',
          focusVisible: isFocusVisible ? 'true' : 'false',
          invalid: isInvalid ? 'true' : 'false',
          readOnly: isReadOnly ? 'true' : 'false',
          active: isPressed ? 'true' : 'false',
          focused: isFocused ? 'true' : 'false',
          indeterminate: isIndeterminate ? 'true' : 'false',
        }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledCheckboxIndicator>
    );
  });
export default CheckboxIndicator;
