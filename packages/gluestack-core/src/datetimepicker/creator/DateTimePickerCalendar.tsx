import React from 'react';
import { View } from 'react-native';
import type { DateTimePickerCalendarProps } from './types';

export const DateTimePickerCalendar = React.forwardRef<
  View,
  DateTimePickerCalendarProps
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <View ref={ref} {...rest}>
      {children}
    </View>
  );
});

DateTimePickerCalendar.displayName = 'DateTimePickerCalendar';
