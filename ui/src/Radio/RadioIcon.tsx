import React from 'react';
import { useRadio } from './RadioProvider';
export const RadioIcon = (StyledRadioIcon: any) => {
  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useRadio('RadioContext');
  return ({ children, ...props }: any) => {
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
  };
};
