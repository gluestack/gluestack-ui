import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioLabel = (StyledRadioLabel: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isHovered, isChecked, isDisabled, isFocusVisible } =
      useRadio('RadioContext');
    return (
      <StyledRadioLabel
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        {...props}
      >
        {children}
      </StyledRadioLabel>
    );
  });
