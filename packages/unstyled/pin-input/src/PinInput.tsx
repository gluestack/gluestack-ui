import React, { forwardRef, useMemo, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { useHover } from '@react-native-aria/interactions';
import { useFocusRing } from '@react-native-aria/focus';
import { useFormControl } from '@gluestack-ui/form-control';
import { usePinInput } from './PinInputContext';
import { mergeRefs } from '@gluestack-ui/utils';

export const PinInput = (StyledPinInput: any) =>
  forwardRef(
    (
      {
        children,
        onKeyPress,
        type,
        'aria-label': ariaLabel = 'Input Field',
        secureTextEntry,
        editable,
        disabled,
        index,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isInvalid,
        childRefs,
        isRequired,
        setInputValue,
        inputValue,
        handleBackSpace,
      } = usePinInput('PinInputContext');

      // @ts-ignore
      const value = inputValue?.length > index ? inputValue[index] : '';

      const inputRef = useRef();

      const [isFocused, setIsFocused] = useState(false);

      const { isHovered } = useHover({}, inputRef);

      const inputProps = useFormControl({
        isDisabled: props.isDisabled || disabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        id: props.id,
      });

      const handlePaste = (pastedValue: any) => {
        // const newPastedValue = pastedValue.slice(0, -1);
        // // console.log('newPastedValue', newPastedValue);
        setInputValue(pastedValue);
      };

      const { isFocusVisible }: any = useFocusRing();

      const mergedRef = mergeRefs([ref, inputRef, childRefs[index]]);

      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const editableProp = useMemo(() => {
        if (editable !== undefined) {
          return editable;
        } else {
          return isDisabled || inputProps.isDisabled || isReadOnly
            ? false
            : true;
        }
      }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);

      const handleChange = (currentValue: string) => {
        if (currentValue.length > 2) {
          handlePaste(currentValue);
        } else {
          setInputValue((prev: string) => {
            if (currentValue === '') {
              return prev.slice(0, -1);
            }
            if (currentValue.length === 1) {
              prev += currentValue;
              return prev;
            }
            let newPrev = prev.slice(0, -1);
            newPrev = newPrev + currentValue.slice(-1);
            return newPrev;
          });
        }
        props.onChange && props.onChange(currentValue);
      };

      return (
        <StyledPinInput
          keyboardType="numeric"
          {...props}
          value={value}
          states={{
            focus: isFocused,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHovered,
            focusVisible: isFocusVisible,
            disabled: isDisabled || inputProps.isDisabled,
          }}
          dataSet={{
            focus: isFocused ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
          }}
          disabled={isDisabled || inputProps.isDisabled}
          secureTextEntry={secureTextEntry || type === 'password'}
          accessible
          aria-label={ariaLabel}
          aria-required={isRequired || inputProps.isRequired}
          aria-invalid={isInvalid || inputProps.isInvalid}
          aria-disabled={isDisabled || inputProps.isDisabled}
          aria-selected={Platform.OS !== 'web' ? isFocused : undefined}
          // ios accessibility
          accessibilityElementsHidden={isDisabled || inputProps.isDisabled}
          autoComplete="one-time-code"
          textContentType="oneTimeCode"
          readOnly={!editableProp}
          onKeyPress={(e: any) => {
            e.nativeEvent.key !== 'Backspace' && e.persist();
            onKeyPress && onKeyPress(e);
            e.nativeEvent.key === 'Backspace' && handleBackSpace(index, value);
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
          onChangeText={handleChange}
          ref={mergedRef}
        >
          {children}
        </StyledPinInput>
      );
    }
  );
