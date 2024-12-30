import React, { forwardRef, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTimeInput } from './TimeInputContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';

export const TimeInputSec = (StyledTimeInputSec: any) =>
  forwardRef(
    (
      {
        children,
        onKeyPress,
        'isHovered': isHoveredProp = true,
        'aria-label': ariaLabel = 'Seconds',
        editable,
        disabled,
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
        updateSeconds,
        timeValue,
      } = useTimeInput('TimeInputContext');

      const inputRef = useRef(null);

      const inputProps = useFormControl({
        isDisabled: props.isDisabled || disabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        id: props.id,
      });

      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused?.(focusState);
        callback();
      };
      const { isHovered }: any = useHover({}, inputRef);

      const mergedRef = mergeRefs([ref, inputRef]);

      const editableProp = useMemo(() => {
        if (editable !== undefined) {
          return editable;
        } else {
          return isDisabled || inputProps.isDisabled || isReadOnly
            ? false
            : true;
        }
      }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);

      const handleChange = (e: any) => {
        const newSeconds = e.target.value;
        updateSeconds(newSeconds);
      };

      return (
        <StyledTimeInputSec
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
          ref={mergedRef}
          value={timeValue.split(':')[2]}
          onChange={handleChange}
          keyboardType="number-pad"
        >
          {children}
        </StyledTimeInputSec>
      );
    }
  );
