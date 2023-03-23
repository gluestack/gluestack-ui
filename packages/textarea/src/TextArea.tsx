import React, { forwardRef } from 'react';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTextArea } from './TextAreaContext';

export const TextArea = (StyledTextArea: any) =>
  forwardRef(
    ({ children, multiline = true, onKeyPress, ...props }: any, ref: any) => {
      const {
        isDisabled,
        // isReadOnly,
        handleFocus,
      } = useTextArea('TextAreaContext');

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      // console.log(ancestorStyle, 'ancestorStyle');
      // console.log(styledObject, 'styledObject');

      return (
        <StyledTextArea
          // states={{
          //   focus: isFocused,
          // }}
          ref={ref}
          {...props}
          // isFocused={isFocused}
          multiline={multiline}
          disabled={isDisabled || inputProps.disabled}
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
