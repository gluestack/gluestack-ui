import React, { forwardRef, useContext } from 'react';
import { useFormControl } from '@universa11y/form-control';
import { StyledInputContext } from './InputContext';

export const Input = (StyledInput: any) =>
  forwardRef(({ children, onKeyPress, type = 'text', ...props }: any) => {
    const { isDisabled, isReadOnly, handleFocus, isFocused } =
      useContext(StyledInputContext);

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
          handleFocus(false, props?.onBlur ? () => props?.onBlur(e) : () => {});
        }}
        placeholderTextColor="#737373"
        {...props}
      >
        {children}
      </StyledInput>
    );
  });
