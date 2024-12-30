import React, { forwardRef, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTimeInput } from './TimeInputContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';

export const TimeInputHr = (StyledTimeInputHr: any) =>
  forwardRef(
    (
      {
        children,
        onKeyPress,
        'isHovered': isHoveredProp = true,
        'aria-label': ariaLabel = 'Hours',
        editable,
        // isFocused: isFocusedProp = false,
        'isDisabled': isDisabledProp = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isFocused,
        isInvalid,
        setIsFocused,
        isFocusVisible,
        isRequired,
        updateHours,
        timeValue,
      } = useTimeInput('TimeInputContext');
      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        id: props.id,
      });
      const inputRef = useRef(null);
      const handleChange = (e: any) => {
        const newHours = e.target.value;
        updateHours(newHours);
      };
      const { isHovered }: any = useHover({}, inputRef);
      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused?.(focusState);
        callback();
      };

      const mergedRef = mergeRefs([ref, inputRef]);

      const editableProp = useMemo(() => {
        if (editable !== undefined) {
          return editable;
        } else {
          return isDisabled ||
            inputProps.isDisabled ||
            isReadOnly ||
            isDisabledProp
            ? false
            : true;
        }
      }, [
        isDisabled,
        inputProps.isDisabled,
        isReadOnly,
        editable,
        isDisabledProp,
      ]);

      return (
        <StyledTimeInputHr
          {...props}
          states={{
            focus: isFocused,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHoveredProp && isHovered,
            focusVisible: isFocusVisible,
            disabled: isDisabled || inputProps.isDisabled,
          }}
          dataSet={{
            focus: isFocused ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            hover: isHoveredProp && isHovered ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
          }}
          disabled={isDisabled || inputProps.isDisabled}
          accessible
          aria-label={ariaLabel}
          aria-required={isRequired || inputProps.isRequired}
          aria-invalid={isInvalid || inputProps.isInvalid}
          aria-disabled={isDisabled || inputProps.isDisabled}
          aria-selected={Platform.OS !== 'web' ? isFocused : undefined}
          // ios accessibility
          accessibilityElementsHidden={isDisabled || inputProps.isDisabled}
          readOnly={!editableProp}
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
          value={timeValue.split(':')[0]}
          onChange={handleChange}
          ref={mergedRef}
          keyboardType="number-pad"
        >
          {children}
        </StyledTimeInputHr>
      );
    }
  );
