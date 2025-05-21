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
