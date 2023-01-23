import React, { forwardRef, useContext } from 'react';
import { useFormControl } from '@universa11y/form-control';

// import { useHover } from "@react-native-aria/interactions";
// import type { InputProps } from './types';
import { StyledInputContext } from './InputContext';

export const Input = (StyledInput: any) =>
  forwardRef(
    ({
      children,
      isDisabled,
      // isInvalid,
      isReadOnly,
      isFocused,
      // isRequired,
      // isFullWidth,
      onKeyPress,
      handleFocus,
      type = 'text',
      ...props
    }: any) => {
      const ctx = useContext(StyledInputContext);

      if (ctx) {
        isDisabled = ctx.isDisabled;

        isFocused = ctx.isFocused;
        isReadOnly = ctx.isReadOnly;

        handleFocus = ctx.handleFocus;
      }

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      return (
        <StyledInput
          states={{
            focus: isFocused,
          }}
          disabled={isDisabled || inputProps.disabled}
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
          {...props}
          {...inputProps}
          // ref={inputRef}
          placeholderTextColor="#737373"
        >
          {children}
        </StyledInput>
      );
    }
  );
