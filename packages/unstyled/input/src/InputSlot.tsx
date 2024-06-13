import React, { forwardRef } from 'react';
import { useInput } from './InputContext';
import { useFormControl } from '@gluestack-ui/form-control';

export const InputSlot = (StyledInputSlot: any) =>
  forwardRef(
    ({ children, onPress, focusOnPress = true, ...props }: any, ref?: any) => {
      const { inputFieldRef, isDisabled } = useInput('InputContext');

      const handleFocus = () => {
        focusOnPress && inputFieldRef.current?.focus();
      };

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
      });

      return (
        <StyledInputSlot
          states={{
            disabled: isDisabled || inputProps.isDisabled,
          }}
          dataSet={{
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
          }}
          onPress={() => {
            if (onPress) onPress();
            handleFocus();
          }}
          accessibilityElementsHidden={true}
          tabIndex={-1}
          ref={ref}
          {...props}
        >
          {children}
        </StyledInputSlot>
      );
    }
  );
