import React, { forwardRef } from 'react';
import { TextAreaProvider } from './TextAreaContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControl } from '@gluestack-ui/form-control';

export const TextAreaRoot = (StyledTextAreaRoot: any) =>
  forwardRef(
    ({
      children,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      ...props
    }: any) => {
      const inputRef = React.useRef();
      const { isHovered } = useHover({}, inputRef);
      const [isFocused, setIsFocused] = React.useState(false);
      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      return (
        <StyledTextAreaRoot
          states={{
            hover: isHovered,
            focus: isFocused,
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.accessibilityInvalid,
            readonly: isReadOnly || inputProps.readOnly,
            required: isRequired || inputProps.required,
          }}
          disabled={isDisabled || inputProps.disabled}
          {...props}
          ref={inputRef}
        >
          <TextAreaProvider
            isDisabled={isDisabled || inputProps.disabled}
            isInvalid={isInvalid || inputProps.accessibilityInvalid}
            isFocused={isFocused}
            isReadOnly={isReadOnly || inputProps.readOnly}
            isRequired={isRequired || inputProps.required}
            inputRef={inputRef}
            handleFocus={handleFocus}
          >
            {children}
          </TextAreaProvider>
        </StyledTextAreaRoot>
      );
    }
  );
