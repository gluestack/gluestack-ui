import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIndicator = (StyledRadioIndicator: any) =>
  forwardRef(({ children, ...props }: any) => {
    const { isChecked, isDisabled, isFocusVisible } = useRadio('RadioContext');

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
  });
