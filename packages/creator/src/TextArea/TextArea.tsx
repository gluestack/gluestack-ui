import React, { forwardRef } from 'react';
import { useFormControl } from '../FormControl/useFormControl';
import { useTextArea } from './TextAreaContext';

export const TextArea = (StyledTextArea: any) =>
  forwardRef(({ children, multiline = true, ...props }: any, ref: any) => {
    const {
      isDisabled,
      // isReadOnly,
      // handleFocus,
      isFocused,
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
        states={{
          focus: isFocused,
        }}
        ref={ref}
        {...props}
        multiline={multiline}
        disabled={isDisabled || inputProps.disabled}
      >
        {children}
      </StyledTextArea>
    );
  });
