import React, { forwardRef } from 'react';
import { StyledInputContext } from './InputContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControl } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
import { useFocusRing } from '@react-native-aria/focus';

export const InputGroup = (StyledInputRoot: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        isFullWidth = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const inputRef = React.useRef();
      const inputFieldRef = React.useRef(null);

      const [isFocused, setIsFocused] = React.useState(false);

      const { isHovered } = useHover({}, inputRef);

      const { isFocusVisible }: any = useFocusRing();

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      const style: any = {};
      if (isFullWidth) {
        style.w = '100%';
      }

      return (
        <StyledInputRoot
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.accessibilityInvalid,
            readonly: isReadOnly || inputProps.readOnly,
            required: isRequired || inputProps.required,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          disabled={isDisabled || inputProps.disabled}
          {...props}
          {...style}
          ref={mergeRefs([inputRef, ref])}
        >
          <StyledInputContext.Provider
            value={{
              isDisabled: isDisabled || inputProps.disabled,
              isInvalid: isInvalid || inputProps.accessibilityInvalid,
              isHovered: isHoveredProp || isHovered,
              isFocused: isFocusedProp || isFocused,
              isFocusVisible: isFocusVisibleProp || isFocusVisible,
              isReadOnly: isReadOnly || inputProps.readOnly,
              isRequired: isRequired || inputProps.required,
              inputRef: inputRef,
              setIsFocused: setIsFocused,
              inputFieldRef: inputFieldRef,
            }}
          >
            {children}
          </StyledInputContext.Provider>
        </StyledInputRoot>
      );
    }
  );
