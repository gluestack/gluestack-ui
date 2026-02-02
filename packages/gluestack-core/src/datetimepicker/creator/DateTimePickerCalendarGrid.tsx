import React from 'react';
import { View, Text } from 'react-native';
import { useDateTimePickerContext } from './DateTimePickerContext';
import { generateCalendarGrid, getDayNames } from './utils';
import type { DateTimePickerCalendarGridProps } from './types';

// This context provides the calendar data to child components
export const CalendarGridContext = React.createContext<{
  calendarGrid: ReturnType<typeof generateCalendarGrid>;
  dayNames: string[];
} | null>(null);

export const useCalendarGridContext = () => {
  const context = React.useContext(CalendarGridContext);
  return context;
};

export const DateTimePickerCalendarGrid = React.forwardRef<
  View,
  DateTimePickerCalendarGridProps
>((props, ref) => {
  const { children, ...rest } = props;
  const { currentMonth, firstDayOfWeek, locale } = useDateTimePickerContext();

  const calendarGrid = React.useMemo(
    () =>
      generateCalendarGrid(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        firstDayOfWeek
      ),
    [currentMonth, firstDayOfWeek]
  );

  const dayNames = React.useMemo(
    () => getDayNames(firstDayOfWeek, locale),
    [firstDayOfWeek, locale]
  );

  const contextValue = React.useMemo(
    () => ({ calendarGrid, dayNames }),
    [calendarGrid, dayNames]
  );

  return (
    <CalendarGridContext.Provider value={contextValue}>
      <View ref={ref} {...rest}>
        {children}
      </View>
    </CalendarGridContext.Provider>
  );
});

DateTimePickerCalendarGrid.displayName = 'DateTimePickerCalendarGrid';
