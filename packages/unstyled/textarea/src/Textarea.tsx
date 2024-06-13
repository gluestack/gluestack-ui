import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTextarea } from './TextareaContext';

export const Textarea = (StyledTextarea: any) =>
  forwardRef(
    (
      {
        children,
        multiline = true,
        onKeyPress,
        'aria-label': ariaLabel = 'Input Field',
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isFocused,
        isInvalid,
        isHovered,
        isFocusVisible,
        isRequired,
        handleFocus,
      } = useTextarea('TextareaContext');

      const textareaProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        id: props.id,
      });

      return (
        <StyledTextarea
          ref={ref}
          {...props}
          states={{
            focus: isFocused,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHovered,
            focusVisible: isFocusVisible,
            disabled: isDisabled || textareaProps.isDisabled,
          }}
          dataSet={{
            focus: isFocused ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            disabled: isDisabled || textareaProps.isDisabled ? 'true' : 'false',
          }}
          accessible
          aria-label={ariaLabel}
          aria-required={isRequired || textareaProps.isRequired}
          aria-invalid={isInvalid || textareaProps.isInvalid}
          aria-disabled={isDisabled || textareaProps.isDisabled}
          aria-selected={Platform.OS !== 'web' ? isFocused : undefined}
          aria-hidden={isDisabled}
          editable={isDisabled || isReadOnly ? false : true}
          disabled={isDisabled || textareaProps.isDisabled}
          multiline={multiline}
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
        >
          {children}
        </StyledTextarea>
      );
    }
  );
