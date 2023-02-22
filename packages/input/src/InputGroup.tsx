import React, { forwardRef } from 'react';
import { StyledInputContext } from './InputContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControl } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
export const InputGroup = (StyledInputRoot: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,
        ...props
      }: any,
      ref: any
    ) => {
      const inputRef = React.useRef();
      const { isHovered } = useHover({}, inputRef);
      const [isFocused, setIsFocused] = React.useState(false);

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      return (
        <StyledInputRoot
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
          ref={mergeRefs([inputRef, ref])}
        >
          <StyledInputContext.Provider
            value={{
              isDisabled: isDisabled || inputProps.disabled,
              isInvalid: isInvalid || inputProps.accessibilityInvalid,
              isFocused: isFocused,
              isReadOnly: isReadOnly || inputProps.readOnly,
              isRequired: isRequired || inputProps.required,
              inputRef: inputRef,
              setIsFocused: setIsFocused,
            }}
          >
            {children}
          </StyledInputContext.Provider>
        </StyledInputRoot>
      );
    }
  );
