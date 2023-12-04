import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      isHovered,
      isChecked,
      isDisabled,
      isFocusVisible,
      isInvalid,
      isFocused,
      isReadOnly,
      isIndeterminate,
      isPressed,
    } = useRadio('RadioContext');

    return (
      <>
        {isChecked && (
          <StyledRadioIcon
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
          </StyledRadioIcon>
        )}
      </>
    );
  });
