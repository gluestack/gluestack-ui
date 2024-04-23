import React, { forwardRef, useMemo } from 'react';
import { Platform } from 'react-native';
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
        editable,
        disabled,
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
        isDisabled: props.isDisabled || disabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        id: props.id,
      });

      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const mergedRef = mergeRefs([ref, inputFieldRef]);

      const editableProp = useMemo(() => {
        if (editable !== undefined) {
          return editable;
        } else {
          return isDisabled || inputProps.isDisabled || isReadOnly
            ? false
            : true;
        }
      }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);

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
          dataSet={{
            focus: isFocused ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
          }}
          disabled={isDisabled || inputProps.isDisabled}
          secureTextEntry={secureTextEntry || type === 'password'}
          accessible
          aria-label={ariaLabel}
          aria-required={isRequired || inputProps.isRequired}
          aria-invalid={isInvalid || inputProps.isInvalid}
          aria-disabled={isDisabled || inputProps.isDisabled}
          aria-selected={Platform.OS !== 'web' ? isFocused : undefined}
          // ios accessibility
          accessibilityElementsHidden={isDisabled || inputProps.isDisabled}
          readOnly={!editableProp}
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
          ref={mergedRef}
        >
          {children}
        </StyledInput>
      );
    }
  );
