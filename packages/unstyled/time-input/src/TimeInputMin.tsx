import React, { forwardRef, useMemo, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTimeInput } from './TimeInputContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';
import { useFocusRing } from '@react-native-aria/focus';
import type { ITimeInputFieldProps } from './types';

export const TimeInputMin = (StyledTimeInputMin: any) =>
  forwardRef(
    (
      {
        children,
        onKeyPress,
        'isHovered': isHoveredProp = true,
        'aria-label': ariaLabel = 'Minutes',
        editable,
        'isDisabled': isDisabledProp = false,
        'isFocused': isFocusedProp = false,
        'isFocusVisible': isFocusVisibleProp,
        ...props
      }: ITimeInputFieldProps & { children: React.ReactNode },
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isInvalid,
        isRequired,
        value,
        setTimeValue,
        minuteRef,
        meridiemRef,
      } = useTimeInput('TimeInputContext');

      const inputRef = useRef(null);
      const { isHovered }: any = useHover({}, inputRef);

      const inputProps = useFormControl({
        isDisabled: isDisabledProp,
        isInvalid: isInvalid,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        id: props.id,
      });

      const [isFocused, setIsFocused] = useState(false);
      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };

      const { isFocusVisible }: any = useFocusRing();

      const mergedRef = mergeRefs([ref, inputRef, minuteRef]);

      const editableProp = useMemo(() => {
        if (editable !== undefined) {
          return editable;
        } else {
          return isDisabled || inputProps.isDisabled || isReadOnly
            ? false
            : true;
        }
      }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);

      const handleChange = (newMinutesInt: string) => {
        const newMinutes = newMinutesInt.replace(/[^0-9]/g, '');
        if (newMinutes === newMinutesInt) {
          const newTimeValue = newMinutes
            ? value
                .set('minute', parseInt(newMinutes))
                .second(new Date().getSeconds())
            : value.set('minute', 0).second(new Date().getSeconds());
          setTimeValue(newTimeValue);
          if (parseInt(newMinutes) > 5) {
            if (Platform.OS === 'web') {
              meridiemRef.current.focus();
            }
            minuteRef.current.blur();
          }
        }
      };

      return (
        <StyledTimeInputMin
          {...props}
          states={{
            focus: isFocusedProp || isFocused,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHoveredProp && isHovered,
            focusVisible: isFocusVisibleProp || isFocusVisible,
            disabled: isDisabled || inputProps.isDisabled,
          }}
          dataSet={{
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            hover: isHoveredProp && isHovered ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
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
            handleFocus(true, () => props.onFocus?.(e));
          }}
          onBlur={(e: any) => {
            handleFocus(false, () => props.onBlur?.(e));
          }}
          ref={mergedRef}
          value={value.get('minute').toString().padStart(2, '0')}
          onChangeText={handleChange}
          keyboardType="number-pad"
          selectTextOnFocus={true}
        >
          {children}
        </StyledTimeInputMin>
      );
    }
  );
