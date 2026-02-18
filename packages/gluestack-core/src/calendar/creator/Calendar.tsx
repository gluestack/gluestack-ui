import React, { forwardRef, useMemo, useState, useCallback } from 'react';
import { CalendarContext } from './CalendarContext';
import type { ICalendarProps, DayState, CalendarMode } from './types';

//thss is the calendar component testv 
import {
  generateCalendarGrid,
  isDateDisabled as utilIsDateDisabled,
  isDateSelectedSingle,
  isDateSelectedMultiple,
  isDateSelectedRange,
  dateToKey,
  isSameDay,
  addMonths,
  subMonths,
  getYear,
} from './utils/dateUtils';

// Import useControllableState from utils
// This should match the pattern used in other gluestack components
const useControllableState = <T,>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}): [T | undefined, (value: T) => void] => {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return [currentValue, setValue];
};

export const CalendarMain = (StyledCalendar: any) =>
  forwardRef<any, ICalendarProps>((props, ref) => {
    const {
      mode = 'single',
      value: valueProp,
      defaultValue,
      onValueChange,
      minDate,
      maxDate,
      disabledDates,
      initialMonth,
      numberOfMonths = 1,
      showWeekNumbers = false,
      showOutsideDays = true,
      firstDayOfWeek = 0,
      fixedWeeks = false,
      markers,
      enableMonthYearPicker = false,
      minYear,
      maxYear,
      onMonthChange,
      onDayPress,
      onDayLongPress,
      enableAnimation = true,
      animationDuration = 300,
      locale,
      isDisabled = false,
      isReadOnly = false,
      renderDay,
      children,
      ...rest
    } = props;

    // Controllable state for value
    const [value, setValue] = useControllableState({
      value: valueProp,
      defaultValue,
      onChange: onValueChange,
    });

    // Get initial month from value or initialMonth or current date
    const getInitialMonth = (): Date => {
      if (initialMonth) return initialMonth;
      if (value instanceof Date) return value;
      if (Array.isArray(value) && value.length > 0) return value[0];
      if (value && 'from' in value && value.from) return value.from;
      return new Date();
    };

    // View state (current month/year being displayed)
    const [currentMonth, setCurrentMonth] = useState<Date>(getInitialMonth());

    // Hover state for range selection preview
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

    // Memoized calendar grid calculation
    const calendarGrid = useMemo(
      () => generateCalendarGrid(currentMonth, firstDayOfWeek, fixedWeeks),
      [currentMonth, firstDayOfWeek, fixedWeeks]
    );

    // Check if date is disabled
    const isDateDisabled = useCallback(
      (date: Date): boolean => {
        return utilIsDateDisabled(date, minDate, maxDate, disabledDates);
      },
      [minDate, maxDate, disabledDates]
    );

    // Get complete day state for rendering
    const getDayState = useCallback(
      (date: Date): DayState => {
        const disabled = isDateDisabled(date);
        const outsideMonth = !calendarGrid.some((week) =>
          week.days.some((day) => day.isCurrentMonth && isSameDay(day.date, date))
        );
        const today = calendarGrid
          .flatMap((week) => week.days)
          .find((day) => isSameDay(day.date, date))?.isToday ?? false;

        const key = dateToKey(date);
        const marker = markers?.[key];
        const hasMarker = !!marker;

        let isSelected = false;
        let isRangeStart = false;
        let isRangeEnd = false;
        let isInRange = false;

        if (mode === 'single' && value instanceof Date) {
          isSelected = isDateSelectedSingle(date, value);
        } else if (mode === 'multiple' && Array.isArray(value)) {
          isSelected = isDateSelectedMultiple(date, value);
        } else if (mode === 'range' && value && typeof value === 'object' && 'from' in value) {
          const rangeState = isDateSelectedRange(date, value as { from: Date; to?: Date });
          isSelected = rangeState.isSelected;
          isRangeStart = rangeState.isRangeStart;
          isRangeEnd = rangeState.isRangeEnd;
          isInRange = rangeState.isInRange;
        }

        return {
          isSelected,
          isToday: today,
          isOutsideMonth: outsideMonth,
          isDisabled: disabled,
          isRangeStart,
          isRangeEnd,
          isInRange,
          hasMarker,
          marker,
        };
      },
      [mode, value, isDateDisabled, calendarGrid, markers]
    );

    // Selection handlers (migrated from existing implementation)
    const handleDayPress = useCallback(
      (date: Date) => {
        if (isDisabled || isReadOnly) return;
        if (isDateDisabled(date)) return;

        onDayPress?.(date);

        if (mode === 'single') {
          setValue(date);
        } else if (mode === 'multiple') {
          const currentSelection = (value as Date[]) || [];
          const exists = currentSelection.find((d) => isSameDay(d, date));

          if (exists) {
            setValue(currentSelection.filter((d) => !isSameDay(d, date)) as any);
          } else {
            setValue([...currentSelection, date] as any);
          }
        } else if (mode === 'range') {
          const currentRange = value as { from: Date; to?: Date } | undefined;

          if (!currentRange || (currentRange.from && currentRange.to)) {
            // Start new range
            setValue({ from: date, to: undefined } as any);
          } else {
            // Complete range - auto-correct order if end < start
            const from = currentRange.from;
            const to = date;

            if (to < from) {
              setValue({ from: to, to: from } as any);
            } else {
              setValue({ from, to } as any);
            }
          }
        }
      },
      [mode, value, setValue, isDisabled, isReadOnly, isDateDisabled, onDayPress]
    );

    const handleDayLongPress = useCallback(
      (date: Date) => {
        if (isDisabled || isReadOnly) return;
        if (isDateDisabled(date)) return;

        onDayLongPress?.(date);
      },
      [isDisabled, isReadOnly, isDateDisabled, onDayLongPress]
    );

    // Month navigation
    const navigateMonth = useCallback(
      (direction: 'prev' | 'next') => {
        const newMonth = direction === 'next'
          ? addMonths(currentMonth, 1)
          : subMonths(currentMonth, 1);

        setCurrentMonth(newMonth);
        onMonthChange?.(newMonth);
      },
      [currentMonth, onMonthChange]
    );

    // Set specific month
    const setMonth = useCallback(
      (month: Date) => {
        setCurrentMonth(month);
        onMonthChange?.(month);
      },
      [onMonthChange]
    );

    // Set specific year
    const setYear = useCallback(
      (year: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setFullYear(year);
        setCurrentMonth(newMonth);
        onMonthChange?.(newMonth);
      },
      [currentMonth, onMonthChange]
    );

    // Context value
    const contextValue = useMemo(
      () => ({
        mode,
        value,
        currentMonth,
        hoveredDate,
        setHoveredDate,
        handleDayPress,
        handleDayLongPress,
        navigateMonth,
        setMonth,
        setYear,
        calendarGrid,
        isDateDisabled,
        getDayState,
        markers,
        showWeekNumbers,
        showOutsideDays,
        enableMonthYearPicker,
        firstDayOfWeek,
        locale,
        isDisabled,
        isReadOnly,
        minDate,
        maxDate,
        minYear,
        maxYear,
        enableAnimation,
        animationDuration,
        renderDay,
      }),
      [
        mode,
        value,
        currentMonth,
        hoveredDate,
        handleDayPress,
        handleDayLongPress,
        navigateMonth,
        setMonth,
        setYear,
        calendarGrid,
        isDateDisabled,
        getDayState,
        markers,
        showWeekNumbers,
        showOutsideDays,
        enableMonthYearPicker,
        firstDayOfWeek,
        locale,
        isDisabled,
        isReadOnly,
        minDate,
        maxDate,
        minYear,
        maxYear,
        enableAnimation,
        animationDuration,
        renderDay,
      ]
    );

    return (
      <CalendarContext.Provider value={contextValue}>
        <StyledCalendar ref={ref} {...rest}>
          {children}
        </StyledCalendar>
      </CalendarContext.Provider>
    );
  });
