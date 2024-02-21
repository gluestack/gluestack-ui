import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIcon = (StyledCheckboxIcon: any) =>
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
      <>
        {isChecked && (
          <StyledCheckboxIcon
            states={{
              hover: isHovered,
              checked: isChecked,
              disabled: isDisabled,
              focusVisible: isFocusVisible,
              invalid: isInvalid,
              readOnly: isReadOnly,
              pressed: isPressed,
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
              pressed: isPressed ? 'true' : 'false',
              focused: isFocused ? 'true' : 'false',
              indeterminate: isIndeterminate ? 'true' : 'false',
            }}
            {...props}
            ref={ref}
          >
            {children}
          </StyledCheckboxIcon>
        )}
      </>
    );
  });

export default CheckboxIcon;
