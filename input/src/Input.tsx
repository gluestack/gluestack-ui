import React, { forwardRef } from 'react';
import { useFormControl } from '@gluestack-ui/form-control';
import { useInput } from './InputContext';
import { mergeRefs } from '@gluestack-ui/utils';

export const Input = (StyledInput: any) =>
  forwardRef(
    (
      {
        children,
        onKeyPress,
        type = 'text',
        'aria-label': ariaLabel = 'Input Field',
        secureTextEntry,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isFocused,
        isInvalid,
        setIsFocused,
        isHovered,
        isFocusVisible,
        inputFieldRef,
        isRequired,
      } = useInput('InputContext');

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const mergedref = mergeRefs([ref, inputFieldRef]);

      return (
        <StyledInput
          {...props}
          type={type}
          states={{
            focus: isFocused,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHovered,
            focusVisible: isFocusVisible,
            disabled: isDisabled || inputProps.isDisabled,
          }}
          disabled={isDisabled || inputProps.isDisabled}
          secureTextEntry={secureTextEntry || type === 'password'}
          accessible
          aria-label={ariaLabel}
          aria-required={isRequired || inputProps.isRequired}
          aria-invalid={isInvalid || inputProps.isInvalid}
          aria-disabled={isDisabled || inputProps.isDisabled}
          aria-selected={isFocused}
          // ios accessibility
          accessibilityElementsHidden={isDisabled}
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
          ref={mergedref}
        >
          {children}
        </StyledInput>
      );
    }
  );
