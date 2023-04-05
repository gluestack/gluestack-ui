import React, { useContext, forwardRef } from 'react';
import type { ViewProps } from 'react-native';
import { StyledInputContext } from './InputContext';

export const InputIcon = (StyledInputIcon: any) =>
  forwardRef(({ children, ...props }: ViewProps, ref?: any) => {
    const { inputFieldRef } = useContext(StyledInputContext);

    const handleFocus = () => {
      inputFieldRef?.current?.focus();
    };

    return (
      <StyledInputIcon
        onPress={handleFocus}
        accessibilityElementsHidden={true}
        ref={ref}
        {...props}
      >
        {children}
      </StyledInputIcon>
    );
  });
