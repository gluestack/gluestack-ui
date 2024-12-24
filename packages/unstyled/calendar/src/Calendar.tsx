import React, { forwardRef, useMemo, useCallback } from 'react';
import { CalendarContext } from './Context';
import type { ICalendarProps } from './types';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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

      const isPrevDisabled = minDate ? currentMonth < minDate : false;
      const isNextDisabled = maxDate ? currentMonth > maxDate : false;

      const title = useMemo(() => {
        return `${
          MONTHS[currentMonth.getMonth()]
        } ${currentMonth.getFullYear()}`;
      }, [currentMonth]);

      const prevMonth = useCallback(() => {
        const newDate = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() - 1,
          1
        );
        setCurrentMonth(newDate);
      }, [currentMonth]);

      const nextMonth = useCallback(() => {
        const newDate = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() + 1,
          1
        );
        setCurrentMonth(newDate);
      }, [currentMonth]);

      const getDaysInMonth = useCallback(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
          days.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
          days.push(i);
        }

        return days;
      }, [currentMonth]);

      const handleDateSelect = useCallback(
        (day: number) => {
          const newDate = new Date(currentMonth);
          newDate.setDate(day);
          if (minDate && newDate < minDate) return;
          if (maxDate && newDate > maxDate) return;

          setSelectedDate(newDate);
          onChange?.(newDate);
        },
        [currentMonth, minDate, maxDate, onChange]
      );

      const isToday = useCallback(
        (day: number) => {
          const today = new Date();
          return (
            today.getDate() === day &&
            today.getMonth() === currentMonth.getMonth() &&
            today.getFullYear() === currentMonth.getFullYear()
          );
        },
        [currentMonth]
      );

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
        ]
      );
      return (
        <CalendarContext.Provider value={contextValue}>
          <StyledCalendar ref={ref} {...(props as ICalendarProps)}>
            {children}
          </StyledCalendar>
        </CalendarContext.Provider>
      );
    }
  );
}
