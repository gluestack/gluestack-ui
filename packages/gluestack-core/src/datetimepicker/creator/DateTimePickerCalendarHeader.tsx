import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import { getMonthName } from './utils';
import type { DateTimePickerCalendarHeaderProps } from './types';

export const DateTimePickerCalendarHeader = React.forwardRef<
  View,
  DateTimePickerCalendarHeaderProps
>((props, ref) => {
  const { children, ...rest } = props;
  const { currentMonth, locale, navigateMonth, minDate, maxDate } =
    useDateTimePickerContext();

  const monthName = getMonthName(currentMonth.getMonth(), locale);
  const year = currentMonth.getFullYear();

  // Check if navigation is disabled
  const isPrevDisabled = React.useMemo(() => {
    if (!minDate) return false;
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(currentMonth.getMonth() - 1);
    return (
      prevMonth.getFullYear() < minDate.getFullYear() ||
      (prevMonth.getFullYear() === minDate.getFullYear() &&
        prevMonth.getMonth() < minDate.getMonth())
    );
  }, [currentMonth, minDate]);

  const isNextDisabled = React.useMemo(() => {
    if (!maxDate) return false;
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    return (
      nextMonth.getFullYear() > maxDate.getFullYear() ||
      (nextMonth.getFullYear() === maxDate.getFullYear() &&
        nextMonth.getMonth() > maxDate.getMonth())
    );
  }, [currentMonth, maxDate]);

  if (children) {
    return (
      <View ref={ref} {...rest}>
        {children}
      </View>
    );
  }

  const { setCalendarView } = useDateTimePickerContext();

  return (
    <View ref={ref} {...rest}>
      <Pressable
        onPress={() => navigateMonth('prev')}
        disabled={isPrevDisabled}
        accessibilityLabel="Previous month"
        accessibilityRole="button"
      >
        <Text>‹</Text>
      </Pressable>
      <View>
        <Pressable
          onPress={() => setCalendarView('month')}
          accessibilityLabel="Select month"
          accessibilityRole="button"
        >
          <Text>{monthName}</Text>
        </Pressable>
        <Pressable
          onPress={() => setCalendarView('year')}
          accessibilityLabel="Select year"
          accessibilityRole="button"
        >
          <Text>{year}</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => navigateMonth('next')}
        disabled={isNextDisabled}
        accessibilityLabel="Next month"
        accessibilityRole="button"
      >
        <Text>›</Text>
      </Pressable>
    </View>
  );
});

DateTimePickerCalendarHeader.displayName = 'DateTimePickerCalendarHeader';
