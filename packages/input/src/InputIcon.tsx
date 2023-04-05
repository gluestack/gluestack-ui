import React, { useContext, forwardRef } from 'react';
import { StyledInputContext } from './InputContext';
import { useFormControl } from '@gluestack-ui/form-control';

export const InputIcon = (StyledInputIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { inputFieldRef, isDisabled } = useContext(StyledInputContext);

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
        onPress={handleFocus}
        accessibilityElementsHidden={true}
        focusable={false}
        ref={ref}
        {...props}
      >
        {children}
      </StyledInputIcon>
    );
  });
