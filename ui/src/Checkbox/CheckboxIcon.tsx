import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIcon = (StyledCheckboxIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isHovered, isChecked, isDisabled, isFocusVisible } =
      useCheckbox('CheckboxContext');
    if (isChecked)
      return (
        <StyledCheckboxIcon
          states={{
            hover: isHovered,
            checked: isChecked,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
          }}
          {...props}
        >
          {children}
        </StyledCheckboxIcon>
      );

    return null;
  });

export default CheckboxIcon;
