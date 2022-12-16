import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIndicator = (StyledCheckboxIndicator: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isChecked, isDisabled, isFocusVisible, isHovered } =
      useCheckbox('CheckboxContext');
    return (
      <StyledCheckboxIndicator
        states={{
          checked: isChecked,
          focusVisible: isFocusVisible,
          disabled: isDisabled,
          hover: isHovered,
        }}
        {...props}
      >
        {children}
      </StyledCheckboxIndicator>
    );
  });
export default CheckboxIndicator;
