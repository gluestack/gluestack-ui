import React, { forwardRef, useState } from 'react';
import { TimeInputProvider } from './TimeInputContext';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
import dayjs, { Dayjs } from 'dayjs';
import type { ITimeInputProps } from './types';
export const TimeInput = (StyledTimeInputRoot: any) =>
  forwardRef(
    (
      {
        children,
        isReadOnly,
        isDisabled,
        isInvalid,
        isRequired,
        value: externalValue,
        onChange,
        ...props
      }: Omit<ITimeInputProps, 'children'> & { children: React.ReactNode[] },
      ref?: any
    ) => {
      const hourRef = React.useRef(null);
      const minuteRef = React.useRef(null);
      const meridiemRef = React.useRef(null);

      const [timeValue, setTimeValue] = useState<Dayjs>(
        externalValue ? externalValue : dayjs()
      );
      const handleTimeChange = (newTimeValue: Dayjs) => {
        setTimeValue(newTimeValue);
        onChange?.(newTimeValue);
      };
      const [meridiemHovered, setMeridiemHovered] = useState(false);
      const [meridiemPressed, setMeridiemPressed] = useState(false);
      const [meridiem, setMeridiem] = useState<string>(timeValue.format('A'));

      const timeInputProps = useFormControlContext();

      return (
        <StyledTimeInputRoot
          states={{
            disabled: isDisabled || timeInputProps.isDisabled,
            invalid: isInvalid || timeInputProps.isInvalid,
            readonly: isReadOnly || timeInputProps.isReadOnly,
            required: isRequired || timeInputProps.isRequired,
          }}
          dataSet={{
            disabled:
              isDisabled || timeInputProps.isDisabled ? 'true' : 'false',
            invalid: isInvalid || timeInputProps.isInvalid ? 'true' : 'false',
            readonly:
              isReadOnly || timeInputProps.isReadOnly ? 'true' : 'false',
            required:
              isRequired || timeInputProps.isRequired ? 'true' : 'false',
          }}
          {...props}
          ref={mergeRefs([ref])}
        >
          <TimeInputProvider
            isDisabled={isDisabled || timeInputProps.isDisabled}
            isInvalid={isInvalid || timeInputProps.isInvalid}
            isReadOnly={isReadOnly || timeInputProps.isReadOnly}
            isRequired={isRequired || timeInputProps.isRequired}
            value={timeValue}
            setTimeValue={handleTimeChange}
            meridiemHovered={meridiemHovered}
            setMeridiemHovered={setMeridiemHovered}
            meridiemPressed={meridiemPressed}
            setMeridiemPressed={setMeridiemPressed}
            meridiem={meridiem}
            setMeridiem={setMeridiem}
            hourRef={hourRef}
            minuteRef={minuteRef}
            meridiemRef={meridiemRef}
          >
            {children}
          </TimeInputProvider>
        </StyledTimeInputRoot>
      );
    }
  );
