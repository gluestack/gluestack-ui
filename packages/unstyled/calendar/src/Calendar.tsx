import React, { forwardRef, useMemo, useCallback } from 'react';
import { CalendarContext } from './Context';
import type { ICalendarProps } from './types';
import {
  format,
  addMonths,
  subMonths,
  isSameDay,
  isWithinInterval,
  startOfMonth,
  getDaysInMonth as getMonthDays,
  getDay,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

const WEEKDAYS = eachDayOfInterval({
  start: startOfWeek(new Date()),
  end: endOfWeek(new Date()),
}).map((day: Date) => format(day, 'EEEEEE'));

const MONTHS = Array.from({ length: 12 }, (_, i) =>
  format(new Date(2024, i, 1), 'MMMM')
);

export function Calendar(StyledCalendar: any) {
  return forwardRef(
    (
      {
        children,
        value,
        defaultValue,
        onChange,
        minDate,
        maxDate,
        ...props
      }: ICalendarProps,
      ref?: any
    ) => {
      const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
        value ?? defaultValue
      );
      const [currentMonth, setCurrentMonth] = React.useState<Date>(
        selectedDate ?? new Date()
      );

      const isDisabled = useCallback(
        (day: Date | null) => {
          if (!day) return false;
          if (minDate && maxDate) {
            return !isWithinInterval(day, { start: minDate, end: maxDate });
          }
          if (minDate) return day < minDate;
          if (maxDate) return day > maxDate;
          return false;
        },
        [minDate, maxDate]
      );

      const title = useMemo(() => {
        return format(currentMonth, 'MMMM yyyy');
      }, [currentMonth]);

      const prevMonth = useCallback(() => {
        setCurrentMonth(subMonths(currentMonth, 1));
      }, [currentMonth]);

      const nextMonth = useCallback(() => {
        setCurrentMonth(addMonths(currentMonth, 1));
      }, [currentMonth]);

      const isPrevDisabled = useMemo(() => {
        if (!minDate) return false;
        return (
          currentMonth.getFullYear() < minDate.getFullYear() ||
          (currentMonth.getFullYear() === minDate.getFullYear() &&
            currentMonth.getMonth() < minDate.getMonth())
        );
      }, [currentMonth, minDate]);

      const isNextDisabled = useMemo(() => {
        if (!maxDate) return false;
        return (
          currentMonth.getFullYear() > maxDate.getFullYear() ||
          (currentMonth.getFullYear() === maxDate.getFullYear() &&
            currentMonth.getMonth() >= maxDate.getMonth())
        );
      }, [currentMonth, maxDate]);

      const getDaysInMonth = useCallback(() => {
        const firstDayOfMonth = getDay(startOfMonth(currentMonth));
        const daysInMonth = getMonthDays(currentMonth);

        const days = Array(firstDayOfMonth).fill(null);

        for (let i = 1; i <= daysInMonth; i++) {
          days.push(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
          );
        }

        return days;
      }, [currentMonth]);

      const handleDateSelect = useCallback(
        (day: Date | null) => {
          if (!day) return;
          setSelectedDate(day);
          onChange?.(day);
        },
        [onChange]
      );

      const isToday = useCallback((day: Date | null) => {
        if (!day) return false;
        return isSameDay(day, new Date());
      }, []);

      const contextValue = useMemo(
        () => ({
          selectedDate,
          currentMonth,
          title,
          prevMonth,
          nextMonth,
          getDaysInMonth,
          handleDateSelect,
          isToday,
          weekDays: WEEKDAYS,
          months: MONTHS,
          isPrevDisabled,
          isNextDisabled,
          isDisabled,
        }),
        [
          selectedDate,
          currentMonth,
          title,
          prevMonth,
          nextMonth,
          getDaysInMonth,
          handleDateSelect,
          isToday,
          isPrevDisabled,
          isNextDisabled,
          isDisabled,
        ]
      );
      return (
        <CalendarContext.Provider value={contextValue}>
          <StyledCalendar
            ref={ref}
            {...props}
            role="group"
            aria-label="Calendar"
            accessible
            accessibilityLabel="Calendar"
          >
            {children}
          </StyledCalendar>
        </CalendarContext.Provider>
      );
    }
  );
}
