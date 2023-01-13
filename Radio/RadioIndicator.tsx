import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIndicator = (StyledRadioIndicator: any) =>
  forwardRef(({ children, ...props }: any) => {
    const {
      isChecked,
      isDisabled,
      isFocusVisible,
      isInvalid,
      isHovered,
      isReadOnly,
      isIndeterminate,
    } = useRadio('RadioContext');

    return (
      <StyledRadioIndicator
        states={{
          readonly: isReadOnly,
          intermediate: isIndeterminate,
          checked: isChecked,
          focusVisible: isFocusVisible,
          disabled: isDisabled,
          invalid: isInvalid,
          hover: isHovered,
        }}
        {...props}
      >
        {children}
      </StyledRadioIndicator>
    );
  });
