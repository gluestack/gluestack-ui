import React, { forwardRef, useMemo, useCallback, useState } from 'react';
import { CalendarContext } from './Context';
import type { ICalendarProps } from './types';

// Helper functions using native Date
const getMonthDays = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isBefore = (date1: Date, date2: Date) => {
  return date1.getTime() < date2.getTime();
};

const isAfter = (date1: Date, date2: Date) => {
  return date1.getTime() > date2.getTime();
};

const isWithinInterval = (date: Date, interval: { start: Date; end: Date }) => {
  return (
    date.getTime() >= interval.start.getTime() &&
    date.getTime() <= interval.end.getTime()
  );
};

const addMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

const subMonths = (date: Date, months: number) => {
  return addMonths(date, -months);
};

const format = (date: Date, formatStr: string) => {
  const months = [
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

  if (formatStr === 'MMMM yyyy') {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  if (formatStr === 'EEEEEE') {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[date.getDay()];
  }
  return date.toString();
};

const eachDayOfInterval = (interval: { start: Date; end: Date }) => {
  const days = [];
  const current = new Date(interval.start);
  while (current <= interval.end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};

const startOfWeek = (date: Date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  newDate.setDate(newDate.getDate() - day);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

const endOfWeek = (date: Date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  newDate.setDate(newDate.getDate() + (6 - day));
  newDate.setHours(23, 59, 59, 999);
  return newDate;
};

const startOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

// Generate week days
const WEEKDAYS = eachDayOfInterval({
  start: startOfWeek(new Date()),
  end: endOfWeek(new Date()),
}).map((day: Date) => format(day, 'EEEEEE'));

export function Calendar(StyledCalendar: any) {
  return forwardRef(
    (
      {
        children,
        mode = 'single',
        value,
        values,
        rangeValue,
        onChange,
        onValuesChange,
        onRangeChange,
        minDate,
        maxDate,
        ...props
      }: ICalendarProps,
      ref?: any
    ) => {
      // State management based on mode
      const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
      const [selectedDates, setSelectedDates] = useState<Date[]>(values || []);
      const [selectedRange, setSelectedRange] = useState<
        { start: Date; end: Date } | undefined
      >(rangeValue);
      const [currentMonth, setCurrentMonth] = useState<Date>(
        value ?? rangeValue?.start ?? new Date()
      );
      const [tempRangeStart, setTempRangeStart] = useState<Date | null>(null);

      const isDisabled = useCallback(
        (day: Date | null) => {
          if (!day) return false;
          if (minDate && maxDate) {
            return !isWithinInterval(day, { start: minDate, end: maxDate });
          }
          if (minDate) return isBefore(day, minDate);
          if (maxDate) return isAfter(day, maxDate);
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
            currentMonth.getMonth() <= minDate.getMonth())
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
        const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
        const daysInMonth = getMonthDays(currentMonth);

        const days = Array(firstDayOfMonth).fill(null);

        for (let i = 1; i <= daysInMonth; i++) {
          days.push(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
          );
        }

        return days;
      }, [currentMonth]);

      const isToday = useCallback((day: Date | null) => {
        if (!day) return false;
        return isSameDay(day, new Date());
      }, []);

      const isSelected = useCallback(
        (day: Date | null) => {
          if (!day) return false;

          if (mode === 'single') {
            return selectedDate ? isSameDay(day, selectedDate) : false;
          }

          if (mode === 'multiple') {
            return selectedDates.some((d) => isSameDay(day, d));
          }

          if (mode === 'range' && selectedRange) {
            return (
              isSameDay(day, selectedRange.start) ||
              isSameDay(day, selectedRange.end)
            );
          }

          return false;
        },
        [mode, selectedDate, selectedDates, selectedRange]
      );

      const isRangeStart = useCallback(
        (day: Date | null) => {
          if (!day || mode !== 'range') return false;
          return selectedRange ? isSameDay(day, selectedRange.start) : false;
        },
        [mode, selectedRange]
      );

      const isRangeEnd = useCallback(
        (day: Date | null) => {
          if (!day || mode !== 'range') return false;
          return selectedRange ? isSameDay(day, selectedRange.end) : false;
        },
        [mode, selectedRange]
      );

      const isRangeMiddle = useCallback(
        (day: Date | null) => {
          if (!day || mode !== 'range' || !selectedRange) return false;
          return (
            isAfter(day, selectedRange.start) &&
            isBefore(day, selectedRange.end)
          );
        },
        [mode, selectedRange]
      );

      const handleDateSelect = useCallback(
        (day: Date | null) => {
          if (!day || isDisabled(day)) return;

          if (mode === 'single') {
            setSelectedDate(day);
            onChange?.(day);
          } else if (mode === 'multiple') {
            const exists = selectedDates.some((d) => isSameDay(day, d));
            let newDates: Date[];
            if (exists) {
              newDates = selectedDates.filter((d) => !isSameDay(day, d));
            } else {
              newDates = [...selectedDates, day];
            }
            setSelectedDates(newDates);
            onValuesChange?.(newDates);
          } else if (mode === 'range') {
            if (!tempRangeStart) {
              setTempRangeStart(day);
              const newRange = { start: day, end: day };
              setSelectedRange(newRange);
              onRangeChange?.(newRange);
            } else {
              const newRange = isBefore(day, tempRangeStart)
                ? { start: day, end: tempRangeStart }
                : { start: tempRangeStart, end: day };
              setSelectedRange(newRange);
              onRangeChange?.(newRange);
              setTempRangeStart(null);
            }
          }
        },
        [
          mode,
          isDisabled,
          selectedDates,
          tempRangeStart,
          onChange,
          onValuesChange,
          onRangeChange,
        ]
      );

      const contextValue = useMemo(
        () => ({
          mode,
          selectedDate,
          selectedDates,
          selectedRange,
          currentMonth,
          title,
          prevMonth,
          nextMonth,
          getDaysInMonth,
          handleDateSelect,
          isToday,
          isSelected,
          isRangeStart,
          isRangeEnd,
          isRangeMiddle,
          weekDays: WEEKDAYS,
          months: [] as string[],
          isPrevDisabled,
          isNextDisabled,
          isDisabled,
        }),
        [
          mode,
          selectedDate,
          selectedDates,
          selectedRange,
          currentMonth,
          title,
          prevMonth,
          nextMonth,
          getDaysInMonth,
          handleDateSelect,
          isToday,
          isSelected,
          isRangeStart,
          isRangeEnd,
          isRangeMiddle,
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
