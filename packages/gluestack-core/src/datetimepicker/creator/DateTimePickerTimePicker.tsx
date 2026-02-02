import React from 'react';
import { View, Platform } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerTimePickerProps } from './types';

export const DateTimePickerTimePicker = React.forwardRef<
  View,
  DateTimePickerTimePickerProps
>((props, ref) => {
  const { children, ...rest } = props;
  const {
    value,
    handleTimeSelect,
    minTime,
    maxTime,
    isDisabled,
    isReadOnly,
    timeFormat,
  } = useDateTimePickerContext();

  // Get current time value
  const timeValue = React.useMemo(() => {
    if (value && !Array.isArray(value)) {
      return value;
    }
    return new Date();
  }, [value]);

  // On native platforms, we'll integrate @react-native-community/datetimepicker
  // For now, this is a placeholder that the styled component will enhance
  if (Platform.OS === 'web') {
    // Web will have custom time picker in styled component
    return (
      <View ref={ref} {...rest}>
        {children}
      </View>
    );
  }

  // Native platforms will use @react-native-community/datetimepicker
  // The styled component will handle the actual integration
  return (
    <View ref={ref} {...rest}>
      {children}
    </View>
  );
});

DateTimePickerTimePicker.displayName = 'DateTimePickerTimePicker';
