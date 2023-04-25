import React, { forwardRef } from 'react';
import { useTextArea } from './TextAreaContext';

export const TextArea = (StyledTextArea: any) =>
  forwardRef(
    ({ children, multiline = true, onKeyPress, ...props }: any, ref?: any) => {
      const {
        isDisabled,
        isReadOnly,
        isFocused,
        isInvalid,
        isRequired,
        isHovered,
        handleFocus,
      } = useTextArea('TextAreaContext');

      return (
        <StyledTextArea
          ref={ref}
          {...props}
          states={{
            focus: isFocused,
            disabled: isDisabled,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHovered,
          }}
          editable={isDisabled || isReadOnly ? false : true}
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
        </StyledTextArea>
      );
    }
  );
