import React, { forwardRef } from 'react';
import { InputProvider } from './InputContext';
import { useHover } from '@react-native-aria/interactions';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
import { useFocusRing } from '@react-native-aria/focus';

export const InputGroup = (StyledInputRoot: any) =>
  forwardRef(
    (
      {
        children,
        isReadOnly,
        isDisabled,
        isInvalid,
        isRequired,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const inputRef = React.useRef();
      const inputFieldRef = React.useRef(null);

      const [isFocused, setIsFocused] = React.useState(false);
      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const inputProps = useFormControlContext();
      const { isHovered } = useHover({}, inputRef);

      const { isFocusVisible }: any = useFocusRing();

      const style: any = {};

      return (
        <StyledInputRoot
          states={{
            hover: isHovered ? isHovered : isHoveredProp,
            focus: isFocusedProp ? isFocusedProp : isFocused,
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.isInvalid,
            readonly: isReadOnly || inputProps.isReadOnly,
            required: isRequired || inputProps.isRequired,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          {...props}
          {...style}
          ref={mergeRefs([inputRef, ref])}
        >
          <InputProvider
            isDisabled={isDisabled || inputProps.isDisabled}
            isInvalid={isInvalid || inputProps.isInvalid}
            isHovered={isHovered ? isHovered : isHoveredProp}
            isFocused={isFocusedProp ? isFocusedProp : isFocused}
            isFocusVisible={isFocusVisibleProp || isFocusVisible}
            isReadOnly={isReadOnly || inputProps.isReadOnly}
            isRequired={isRequired || inputProps.isRequired}
            inputRef={inputRef}
            handleFocus={handleFocus}
            setIsFocused={setIsFocused}
            inputFieldRef={inputFieldRef}
          >
            {children}
          </InputProvider>
        </StyledInputRoot>
      );
    }
  );
