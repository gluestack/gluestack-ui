import React from 'react';
import { View } from 'react-native';
import { DateTimePickerContext } from './DateTimePickerContext';
import type {
  DateTimePickerProps,
  DateTimeValue,
  DateTimePickerContextValue,
} from './types';
import {
  formatDate,
  formatTime,
  formatDateTime,
  formatDateRange,
  isSameDay,
  mergeDateAndTime,
} from './utils';

export const DateTimePicker = React.forwardRef<View, DateTimePickerProps>(
  (
    {
      // Core
      mode = 'date',
      rangeSelection = false,

      // Value
      value: valueProp,
      defaultValue = null,
      onValueChange,

      // Open state
      isOpen: isOpenProp,
      defaultIsOpen = false,
      onOpen,
      onClose,

      // Constraints
      minDate,
      maxDate,
      minTime,
      maxTime,
      disabledDates,

      // Formatting
      dateFormat = 'MM/DD/YYYY',
      timeFormat = '12h',
      locale = 'en-US',
      displayFormat,

      // Behavior
      closeOnSelect = true,
      showTodayButton = true,
      firstDayOfWeek = 0,

      // FormControl
      isDisabled = false,
      isInvalid = false,
      isReadOnly = false,
      isRequired = false,

      // Style
      size = 'md',
      variant = 'outline',

      children,
      ...props
    },
    ref
  ) => {
    // Controlled/uncontrolled value state
    const [valueState, setValueState] = React.useState<DateTimeValue>(
      defaultValue
    );
    const value = valueProp !== undefined ? valueProp : valueState;

    const setValue = React.useCallback(
      (newValue: DateTimeValue) => {
        if (valueProp === undefined) {
          setValueState(newValue);
        }
        onValueChange?.(newValue);
      },
      [valueProp, onValueChange]
    );

    // Controlled/uncontrolled open state
    const [isOpenState, setIsOpenState] = React.useState(defaultIsOpen);
    const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState;

    const setIsOpen = React.useCallback(
      (newIsOpen: boolean) => {
        if (isOpenProp === undefined) {
          setIsOpenState(newIsOpen);
        }
        if (newIsOpen) {
          onOpen?.();
        } else {
          onClose?.();
        }
      },
      [isOpenProp, onOpen, onClose]
    );

    // Calendar navigation state
    const [currentMonth, setCurrentMonth] = React.useState(() => {
      if (value) {
        return Array.isArray(value) ? value[0] : value;
      }
      return new Date();
    });

    // Active view for datetime mode
    const [activeView, setActiveView] = React.useState<'date' | 'time'>(
      mode === 'time' ? 'time' : 'date'
    );

    // Calendar view mode (calendar/month-picker/year-picker)
    const [calendarView, setCalendarView] = React.useState<'calendar' | 'month' | 'year'>('calendar');

    // Range selection state
    const [rangeStep, setRangeStep] = React.useState<'start' | 'end'>('start');
    const [tempRangeStart, setTempRangeStart] = React.useState<Date | null>(
      null
    );

    // Handle date selection
    const handleDateSelect = React.useCallback(
      (date: Date) => {
        if (isDisabled || isReadOnly) return;

        if (rangeSelection) {
          if (rangeStep === 'start') {
            setTempRangeStart(date);
            setRangeStep('end');
          } else {
            // Ensure start is before end
            const start = tempRangeStart!;
            const end = date;
            const range: [Date, Date] =
              start <= end ? [start, end] : [end, start];

            setValue(range);
            setRangeStep('start');
            setTempRangeStart(null);

            if (closeOnSelect) {
              setIsOpen(false);
            }
          }
        } else {
          if (mode === 'datetime') {
            // Store date and switch to time view
            setTempRangeStart(date);
            setActiveView('time');
          } else {
            setValue(date);
            if (closeOnSelect) {
              setIsOpen(false);
            }
          }
        }
      },
      [
        isDisabled,
        isReadOnly,
        rangeSelection,
        rangeStep,
        tempRangeStart,
        mode,
        closeOnSelect,
        setValue,
        setIsOpen,
      ]
    );

    // Handle time selection
    const handleTimeSelect = React.useCallback(
      (time: Date) => {
        if (isDisabled || isReadOnly) return;

        if (mode === 'time') {
          setValue(time);
          if (closeOnSelect) {
            setIsOpen(false);
          }
        } else if (mode === 'datetime' && tempRangeStart) {
          // Merge date and time
          const dateTime = mergeDateAndTime(tempRangeStart, time);
          setValue(dateTime);
          setTempRangeStart(null);
          setActiveView('date');
          if (closeOnSelect) {
            setIsOpen(false);
          }
        }
      },
      [
        isDisabled,
        isReadOnly,
        mode,
        tempRangeStart,
        closeOnSelect,
        setValue,
        setIsOpen,
      ]
    );

    // Handle today button
    const handleTodayClick = React.useCallback(() => {
      const today = new Date();
      if (mode === 'time') {
        setValue(today);
      } else if (rangeSelection) {
        setValue([today, today]);
      } else {
        setValue(today);
      }
      setCurrentMonth(today);
      if (closeOnSelect) {
        setIsOpen(false);
      }
    }, [mode, rangeSelection, closeOnSelect, setValue, setIsOpen]);

    // Handle cancel button
    const handleCancelClick = React.useCallback(() => {
      setTempRangeStart(null);
      setRangeStep('start');
      setActiveView(mode === 'time' ? 'time' : 'date');
      setIsOpen(false);
    }, [mode, setIsOpen]);

    // Handle confirm button
    const handleConfirmClick = React.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

    // Navigate month
    const navigateMonth = React.useCallback(
      (direction: 'prev' | 'next') => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(
          currentMonth.getMonth() + (direction === 'next' ? 1 : -1)
        );
        setCurrentMonth(newMonth);
      },
      [currentMonth]
    );

    // Handle month selection
    const handleMonthSelect = React.useCallback(
      (month: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(month);
        setCurrentMonth(newMonth);
        setCalendarView('calendar');
      },
      [currentMonth]
    );

    // Handle year selection
    const handleYearSelect = React.useCallback(
      (year: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setFullYear(year);
        setCurrentMonth(newMonth);
        setCalendarView('calendar');
      },
      [currentMonth]
    );

    // Get display value
    const getDisplayValue = React.useCallback(() => {
      if (displayFormat) {
        return displayFormat(value);
      }

      if (!value) return '';

      if (Array.isArray(value)) {
        return formatDateRange(value, dateFormat);
      }

      if (mode === 'time') {
        return formatTime(value, timeFormat);
      }

      if (mode === 'datetime') {
        return formatDateTime(value, dateFormat, timeFormat);
      }

      return formatDate(value, dateFormat);
    }, [value, displayFormat, mode, dateFormat, timeFormat]);

    // Context value
    const contextValue: DateTimePickerContextValue = React.useMemo(
      () => ({
        // State
        value,
        isOpen,
        currentMonth,
        activeView,
        calendarView,
        rangeStep,
        tempRangeStart,

        // Props
        mode,
        rangeSelection,
        dateFormat,
        timeFormat,
        locale,
        firstDayOfWeek,
        closeOnSelect,
        showTodayButton,

        // Constraints
        minDate,
        maxDate,
        minTime,
        maxTime,
        disabledDates,

        // FormControl
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,

        // Style
        size,
        variant,

        // Actions
        setValue,
        setIsOpen,
        setCurrentMonth,
        setActiveView,
        setCalendarView,
        handleDateSelect,
        handleTimeSelect,
        handleMonthSelect,
        handleYearSelect,
        handleTodayClick,
        handleCancelClick,
        handleConfirmClick,
        navigateMonth,

        // Display
        displayFormat,
        getDisplayValue,
      }),
      [
        value,
        isOpen,
        currentMonth,
        activeView,
        calendarView,
        rangeStep,
        tempRangeStart,
        mode,
        rangeSelection,
        dateFormat,
        timeFormat,
        locale,
        firstDayOfWeek,
        closeOnSelect,
        showTodayButton,
        minDate,
        maxDate,
        minTime,
        maxTime,
        disabledDates,
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,
        size,
        variant,
        setValue,
        setIsOpen,
        setCurrentMonth,
        setActiveView,
        setCalendarView,
        handleDateSelect,
        handleTimeSelect,
        handleMonthSelect,
        handleYearSelect,
        handleTodayClick,
        handleCancelClick,
        handleConfirmClick,
        navigateMonth,
        displayFormat,
        getDisplayValue,
      ]
    );

    return (
      <DateTimePickerContext.Provider value={contextValue}>
        <View ref={ref} {...props}>
          {children}
        </View>
      </DateTimePickerContext.Provider>
    );
  }
);

DateTimePicker.displayName = 'DateTimePicker';
