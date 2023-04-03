import React, { forwardRef } from 'react';
import { useInput } from './InputContext';

export const Input = (StyledInput: any) =>
  forwardRef(
    ({ children, onKeyPress, type = 'text', ...props }: any, ref: any) => {
      const {
        isDisabled,
        isReadOnly,
        isFocused,
        isInvalid,
        isRequired,
        isHovered,
        handleFocus,
      } = useInput('InputContext');

      return (
        <StyledInput
          {...props}
          states={{
            focus: isFocused,
            disabled: isDisabled,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHovered,
          }}
          secureTextEntry={type === 'password'}
          accessible
          editable={isDisabled || isReadOnly ? false : true}
          onKeyPress={(e: any) => {
            e.persist();
            onKeyPress && onKeyPress(e);
          }}
          onFocus={(e: any) => {
            handleFocus(
              true,
              props?.onFocus ? () => props?.onFocus(e) : () => {}
            );
          }}
          onBlur={(e: any) => {
            handleFocus(
              false,
              props?.onBlur ? () => props?.onBlur(e) : () => {}
            );
          }}
          ref={ref}
        >
          {children}
        </StyledInput>
      );
    }
  );
