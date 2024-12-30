import React, { forwardRef, useState } from 'react';
import { TimeInputProvider } from './TimeInputContext';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';

export const TimeInputGroup = (StyledTimeInputRoot: any) =>
  forwardRef(
    (
      {
        children,
        isReadOnly,
        isDisabled,
        isInvalid,
        isRequired,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        timeValue: externalTimeValue,
        defaultValue: externalDefaultValue,
        onChange,
        format = 24,
        ...props
      }: any,
      ref?: any
    ) => {
      const timeInputRef = React.useRef();
      const timeInputFieldRef = React.useRef(null);
      const [isFocused, setIsFocused] = React.useState(false);
      const defaultMeridiem = externalDefaultValue?.split(':')[3] || 'AM';
      const [timeValue, setTimeValue] = useState(
        externalTimeValue || externalDefaultValue || ':::'
      );
      const [meridiemHovered, setMeridiemHovered] = useState(false);
      const [meridiemValue, setMeridiemValue] = useState(defaultMeridiem);
      const [meridiemPressed, setMeridiemPressed] = useState(false);

      const handleFocus = (focusState: boolean, callback: any) => {
        setIsFocused(focusState);
        callback();
      };
      const updateHours = (hours: string) => {
        let hourValue = parseInt(hours, 10);
        if (isNaN(hourValue)) {
          hourValue = 0; // Default value if parsing fails
        }
        if (format === 12) {
          if (hourValue > 12) {
            hourValue = 12;
          }
        } else if (format === 24) {
          if (hourValue > 23) {
            hourValue = 23;
          }
        }
        const formattedValue =
          hourValue < 10 ? `0${hourValue}` : `${hourValue}`;
        const [_, minutes, seconds] = timeValue.split(':');
        const newTimeValueFormat24 = `${formattedValue}:${minutes}:${seconds}`;
        const newTimeValueFormat12 = `${formattedValue}:${minutes}:${seconds}:${meridiemValue}`;
        if (format === 24) {
          setTimeValue(newTimeValueFormat24);
          onChange(newTimeValueFormat24);
        } else {
          setTimeValue(newTimeValueFormat12);
          onChange(newTimeValueFormat12);
        }
      };

      const updateMinutes = (minutes: string) => {
        let minutesValue = parseInt(minutes, 10);
        if (isNaN(minutesValue)) {
          minutesValue = 0; // Default value if parsing fails
        }
        if (minutesValue > 59) {
          minutesValue = 59;
        }
        const formattedValue =
          minutesValue < 10 ? `0${minutesValue}` : `${minutesValue}`;
        const [hours, _, seconds] = timeValue.split(':');
        const newTimeValueFormat24 = `${hours}:${formattedValue}:${seconds}`;
        const newTimeValueFormat12 = `${hours}:${formattedValue}:${seconds}:${meridiemValue}`;
        if (format === 24) {
          setTimeValue(newTimeValueFormat24);
          onChange(newTimeValueFormat24);
        } else {
          setTimeValue(newTimeValueFormat12);
          onChange(newTimeValueFormat12);
        }
      };

      const updateSeconds = (seconds: string) => {
        let secondsValue = parseInt(seconds, 10);
        if (isNaN(secondsValue)) {
          secondsValue = 0; // Default value if parsing fails
        }
        if (secondsValue > 59) {
          secondsValue = 59;
        }
        const formattedValue =
          secondsValue < 10 ? `0${secondsValue}` : `${secondsValue}`;
        const [hours, minutes, _] = timeValue.split(':');
        const newTimeValueFormat24 = `${hours}:${minutes}:${formattedValue}`;
        const newTimeValueFormat12 = `${hours}:${minutes}:${formattedValue}:${meridiemValue}`;
        if (format === 24) {
          setTimeValue(newTimeValueFormat24);
          onChange(newTimeValueFormat24);
        } else {
          setTimeValue(newTimeValueFormat12);
          onChange(newTimeValueFormat12);
        }
      };

      const updateMeridiem = () => {
        const newMeridiemValue = meridiemValue === 'PM' ? 'AM' : 'PM';
        setMeridiemValue(newMeridiemValue);
        if (format === 12) {
          const [hours, minutes, seconds] = timeValue.split(':');
          const newTimeValueFormat12 = `${hours}:${minutes}:${seconds}:${newMeridiemValue}`;
          setTimeValue(newTimeValueFormat12);
          onChange(newTimeValueFormat12);
        }
      };

      const timeInputProps = useFormControlContext();

      return (
        <StyledTimeInputRoot
          states={{
            disabled: isDisabled || timeInputProps.isDisabled,
            invalid: isInvalid || timeInputProps.isInvalid,
            readonly: isReadOnly || timeInputProps.isReadOnly,
            required: isRequired || timeInputProps.isRequired,
            focusVisible: isFocusVisibleProp,
          }}
          dataSet={{
            focus: isFocusedProp ? isFocusedProp : isFocused ? 'true' : 'false',
            disabled:
              isDisabled || timeInputProps.isDisabled ? 'true' : 'false',
            invalid: isInvalid || timeInputProps.isInvalid ? 'true' : 'false',
            readonly:
              isReadOnly || timeInputProps.isReadOnly ? 'true' : 'false',
            required:
              isRequired || timeInputProps.isRequired ? 'true' : 'false',
            focusVisible: isFocusVisibleProp ? 'true' : 'false',
          }}
          {...props}
          ref={mergeRefs([timeInputRef, ref])}
        >
          <TimeInputProvider
            isDisabled={isDisabled || timeInputProps.isDisabled}
            isInvalid={isInvalid || timeInputProps.isInvalid}
            isReadOnly={isReadOnly || timeInputProps.isReadOnly}
            isRequired={isRequired || timeInputProps.isRequired}
            timeInputRef={timeInputRef}
            handleFocus={handleFocus}
            setIsFocused={setIsFocused}
            timeInputFieldRef={timeInputFieldRef}
            timeValue={timeValue}
            setTimeValue={setTimeValue}
            updateHours={updateHours}
            updateMinutes={updateMinutes}
            format={format}
            updateSeconds={updateSeconds}
            updateMeridiem={updateMeridiem}
            meridiemHovered={meridiemHovered}
            meridiemValue={meridiemValue}
            setMeridiemHovered={setMeridiemHovered}
            meridiemPressed={meridiemPressed}
            setMeridiemPressed={setMeridiemPressed}
          >
            {children}
          </TimeInputProvider>
        </StyledTimeInputRoot>
      );
    }
  );
