import React, { forwardRef } from 'react';
import { TextAreaProvider } from './TextAreaContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';

export const TextAreaRoot = (StyledTextAreaRoot: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,
        isHovered = false,
        isFocused: isFocusedProp = false,
        ...props
      }: any,
      ref: any
    ) => {
      const inputRef = React.useRef();
      const { isHovered: isHoveredProp } = useHover({}, inputRef);
      const [isFocused, setIsFocused] = React.useState(false);
      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const inputProps = useFormControlContext();
      return (
        <StyledTextAreaRoot
          states={{
            hover: isHovered ? isHovered : isHoveredProp,
            focus: isFocusedProp ? isFocusedProp : isFocused,
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.isInvalid,
            readonly: isReadOnly || inputProps.isReadOnly,
            required: isRequired || inputProps.isRequired,
          }}
          {...props}
          ref={mergeRefs([inputRef, ref])}
        >
          <TextAreaProvider
            isDisabled={isDisabled || inputProps.isDisabled}
            isInvalid={isInvalid || inputProps.isInvalid}
            isFocused={isFocusedProp ? isFocusedProp : isFocused}
            isHovered={isHovered ? isHovered : isHoveredProp}
            isReadOnly={isReadOnly || inputProps.isReadOnly}
            isRequired={isRequired || inputProps.isRequired}
            inputRef={inputRef}
            handleFocus={handleFocus}
          >
            {children}
          </TextAreaProvider>
        </StyledTextAreaRoot>
      );
    }
  );
