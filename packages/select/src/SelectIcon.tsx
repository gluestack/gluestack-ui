import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';

export const SelectIcon = (StyledSelectIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      isHovered,
      isFocused,
      isDisabled,
      isReadOnly,
      isInvalid,
      isFocusVisible,
    } = React.useContext(SelectContext);
    return (
      <StyledSelectIcon
        states={{
          hover: isHovered,
          active: isFocused,
          disable: isDisabled,
          invalid: isInvalid,
          readonly: isReadOnly,
          focusvisible: isFocusVisible,
        }}
        {...props}
      >
        {children}
      </StyledSelectIcon>
    );
  });
