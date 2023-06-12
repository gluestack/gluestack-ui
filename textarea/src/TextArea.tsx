import React, { forwardRef } from 'react';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTextarea } from './TextareaContext';

export const Textarea = (StyledTextarea: any) =>
  forwardRef(
    (
      {
        children,
        multiline = true,
        onKeyPress,
        accessibilityLabel = 'Input Field',
        accessibilityHint,
        accessibilityRole = 'text',
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
        nativeID: props.nativeID,
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
          accessible
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole={accessibilityRole}
          accessibilityRequired={isRequired || textareaProps.isRequired}
          accessibilityInvalid={isInvalid || textareaProps.isInvalid}
          accessibilityState={{
            invalid: isInvalid || textareaProps.isInvalid,
            disabled: isDisabled || textareaProps.isDisabled,
            selected: isFocused,
          }}
          accessibilityElementsHidden={isDisabled}
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
