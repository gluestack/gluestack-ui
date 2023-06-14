import React, { forwardRef } from 'react';
import { useInput } from './InputContext';
import { useFormControl } from '@gluestack-ui/form-control';

export const InputIcon = (StyledInputIcon: any) =>
  forwardRef(({ children, onPress, ...props }: any, ref?: any) => {
    const { inputFieldRef, isDisabled } = useInput('InputContext');

    const handleFocus = () => {
      inputFieldRef?.current?.focus();
    };

    const inputProps = useFormControl({
      isDisabled: props.isDisabled,
    });

    return (
      <StyledInputIcon
        states={{
          disabled: isDisabled || inputProps.isDisabled,
        }}
        onPress={() => {
          handleFocus();
          if (onPress) onPress();
        }}
        accessibilityElementsHidden={true}
        focusable={false}
        ref={ref}
        {...props}
      >
        {children}
      </StyledInputIcon>
    );
  });
