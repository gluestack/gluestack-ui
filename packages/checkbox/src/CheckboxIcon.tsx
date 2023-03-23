import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIcon = (StyledCheckboxIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isHovered, isChecked, isDisabled, isFocusVisible } =
      useCheckbox('CheckboxContext');

    return (
      <StyledCheckboxIcon
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        {...props}
        opacity={isChecked ? 1 : 0}
      >
        {children}
      </StyledCheckboxIcon>
    );
  });

export default CheckboxIcon;
