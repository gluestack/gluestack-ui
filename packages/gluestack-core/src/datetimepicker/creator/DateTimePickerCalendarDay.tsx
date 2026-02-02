import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import { isSameDay, isDateDisabled, isDateInRange } from './utils';
import type { DateTimePickerCalendarDayProps } from './types';

export const DateTimePickerCalendarDay = React.forwardRef<
  View,
  DateTimePickerCalendarDayProps
>((props, ref) => {
  const { date, children, onPress, ...rest } = props;
  const {
    value,
    rangeSelection,
    tempRangeStart,
    handleDateSelect,
    minDate,
    maxDate,
    disabledDates,
    isDisabled: pickerDisabled,
    isReadOnly,
  } = useDateTimePickerContext();

  // Check if this date is selected
  const isSelected = React.useMemo(() => {
    if (!value) return false;
    if (Array.isArray(value)) {
      return isSameDay(date, value[0]) || isSameDay(date, value[1]);
    }
    return isSameDay(date, value);
  }, [date, value]);

  // Check if this date is in selected range
  const isInRange = React.useMemo(() => {
    if (!rangeSelection || !value || !Array.isArray(value)) return false;
    return isDateInRange(date, value[0], value[1]);
  }, [date, value, rangeSelection]);

  // Check if this date is the range start (for pending selection)
  const isRangeStart = React.useMemo(() => {
    return tempRangeStart && isSameDay(date, tempRangeStart);
  }, [date, tempRangeStart]);

  // Check if date is disabled
  const disabled = React.useMemo(() => {
    return (
      pickerDisabled ||
      isReadOnly ||
      isDateDisabled(date, minDate, maxDate, disabledDates)
    );
  }, [date, minDate, maxDate, disabledDates, pickerDisabled, isReadOnly]);

  const handlePress = React.useCallback(
    (e: any) => {
      if (!disabled) {
        handleDateSelect(date);
      }
      onPress?.(e);
    },
    [date, disabled, handleDateSelect, onPress]
  );

  // Expose state via data attributes for styling
  const dataAttributes = {
    'data-selected': isSelected,
    'data-in-range': isInRange,
    'data-range-start': isRangeStart,
    'data-disabled': disabled,
  };

  if (children) {
    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        {...dataAttributes}
        {...rest}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <Pressable
      ref={ref}
      onPress={handlePress}
      disabled={disabled}
      {...dataAttributes}
      {...rest}
    >
      <Text>{date.getDate()}</Text>
    </Pressable>
  );
});

DateTimePickerCalendarDay.displayName = 'DateTimePickerCalendarDay';
