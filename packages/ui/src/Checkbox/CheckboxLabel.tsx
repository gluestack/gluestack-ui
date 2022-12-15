import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxLabel = (StyledCheckboxLabel: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isHovered, isChecked, isDisabled, isFocusVisible } =
      useCheckbox('CheckboxContext');
    return (
      <StyledCheckboxLabel
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        {...props}
      >
        {children}
      </StyledCheckboxLabel>
    );
  });

export default CheckboxLabel;
