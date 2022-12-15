import React from 'react';
import { useRadio } from './RadioProvider';

export const RadioLabel = (StyledRadioLabel: any) => {
  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useRadio('RadioContext');
  return ({ children, ...props }: any) => {
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
  };
};
