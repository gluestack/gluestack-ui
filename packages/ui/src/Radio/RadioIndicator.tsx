import React from 'react';
import { useRadio } from './RadioProvider';

export const RadioIndicator = (StyledRadioIndicator: any) => {
  const { isChecked, isDisabled, isFocusVisible } = useRadio('RadioContext');

  ({ children, ...props }: any) => {
    return (
      <StyledRadioIndicator
        states={{
          checked: isChecked,
          focusVisible: isFocusVisible,
          disabled: isDisabled,
        }}
        {...props}
      >
        {children}
      </StyledRadioIndicator>
    );
  };
};
