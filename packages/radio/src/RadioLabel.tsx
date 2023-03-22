import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioLabel = (StyledRadioLabel: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { isHovered, isChecked, isDisabled, isFocusVisible, isInvalid } =
      useRadio('RadioContext');

    return (
      <StyledRadioLabel
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
          invalid: isInvalid,
        }}
        {...props}
      >
        {children}
      </StyledRadioLabel>
    );
  });
