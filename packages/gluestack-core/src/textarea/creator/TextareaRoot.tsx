import React, { forwardRef } from 'react';
import { TextareaProvider } from './TextareaContext';
import { useHover } from '@gluestack-ui/utils/aria';
import { useFormControlContext } from '../../form-control/creator';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { useFocusRing } from '@gluestack-ui/utils/aria';

export const TextareaRoot = (StyledTextareaRoot: any) =>
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
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const inputRef = React.useRef();
      const { isHovered: isHoveredProp } = useHover({}, inputRef);
      const { isFocusVisible }: any = useFocusRing();

      const [isFocused, setIsFocused] = React.useState(false);
      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const inputProps = useFormControlContext();
      return (
        <StyledTextareaRoot
          states={{
            hover: isHovered || isHoveredProp,
            focus: isFocusedProp || isFocused,
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.isInvalid,
            readonly: isReadOnly || inputProps.isReadOnly,
            required: isRequired || inputProps.isRequired,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          // data attributes for uniwind
          data-hover={isHovered || isHoveredProp ? 'true' : 'false'}
          data-focus={isFocusedProp || isFocused ? 'true' : 'false'}
          data-disabled={isDisabled || inputProps.isDisabled ? 'true' : 'false'}
          data-invalid={isInvalid || inputProps.isInvalid ? 'true' : 'false'}
          data-readonly={isReadOnly || inputProps.isReadOnly ? 'true' : 'false'}
          data-required={isRequired || inputProps.isRequired ? 'true' : 'false'}
          data-focus-visible={isFocusVisibleProp || isFocusVisible ? 'true' : 'false'}
          // data attributes for nativewind
          dataSet={{
            hover: isHovered || isHoveredProp ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
            invalid: isInvalid || inputProps.isInvalid ? 'true' : 'false',
            readonly: isReadOnly || inputProps.isReadOnly ? 'true' : 'false',
            required: isRequired || inputProps.isRequired ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
          }}
          {...props}
          ref={mergeRefs([inputRef, ref])}
        >
          <TextareaProvider
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
          </TextareaProvider>
        </StyledTextareaRoot>
      );
    }
  );
