import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';
export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isHovered, isChecked, isDisabled, isFocusVisible } =
      useRadio('RadioContext');
    return (
      <StyledRadioIcon
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        {...props}
      >
        {children}
      </StyledRadioIcon>
    );
  });
