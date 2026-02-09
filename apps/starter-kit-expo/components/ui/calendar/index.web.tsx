'use client';

import React, {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useState,
} from 'react';
import { View } from 'react-native';
import { DayPicker } from 'react-day-picker';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import type { CalendarProps, MarkedDates, DayState } from './types';
import { format, isSameDay, startOfMonth, endOfMonth } from 'date-fns';

const SCOPE = 'CALENDAR';

// Create context locally
interface CalendarContextValue {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextValue | null>(null);

const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};

const calendarStyle = tva({
  base: 'w-full bg-background',
  variants: {
    size: {
      sm: 'max-w-[280px]',
      md: 'max-w-[350px]',
      lg: 'max-w-[400px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const CalendarComponent = React.forwardRef<
  React.ComponentRef<typeof View>,
  CalendarProps
>(function Calendar(
  {
    mode = 'single',
    selected,
    onSelect,
    minDate,
    maxDate,
    disabledDates,
    markedDates,
    markingType = 'dot',
    initialDate,
    showWeekNumbers = false,
    hideExtraDays = false,
    firstDayOfWeek = 0,
    onMonthChange,
    onDayPress,
    onDayLongPress,
    theme,
    displayLoadingIndicator,
    className,
    style,
    animate = true,
  },
  ref
) {
  const { currentMonth, setCurrentMonth } = useCalendar();

  const modifiers = useMemo(() => {
    const mods: any = {};

    if (markedDates) {
      Object.entries(markedDates).forEach(([dateStr, marking]) => {
        const date = new Date(dateStr);

        if (marking.marked) {
          mods.marked = mods.marked || [];
          mods.marked.push(date);
        }

        if (marking.selected) {
          mods.selected = mods.selected || [];
          mods.selected.push(date);
        }

        if (marking.disabled) {
          mods.disabled = mods.disabled || [];
          mods.disabled.push(date);
        }
      });
    }

    return mods;
  }, [markedDates]);

  const handleSelect = useCallback(
    (date: Date | undefined) => {
      if (date && onDayPress) {
        onDayPress(date);
      }

      if (date && onSelect) {
        onSelect(date);
      }
    },
    [onSelect, onDayPress]
  );

  const handleMonthChange = useCallback(
    (month: Date) => {
      setCurrentMonth(month);
      if (onMonthChange) {
        onMonthChange(month);
      }
    },
    [onMonthChange, setCurrentMonth]
  );

  const disabledDays = useMemo(() => {
    const days: Date[] = [];
    if (disabledDates) {
      days.push(...disabledDates);
    }
    return days;
  }, [disabledDates]);

  const customStyles = useMemo(
    () => ({
      '--rdp-background-color': theme?.backgroundColor || 'transparent',
      '--rdp-accent-color': theme?.selectedDayBackgroundColor || '#00adf5',
      '--rdp-accent-background-color':
        theme?.selectedDayBackgroundColor || '#00adf5',
      '--rdp-today-color': theme?.todayTextColor || '#00adf5',
    }),
    [theme]
  );

  return (
    <View
      ref={ref}
      className={calendarStyle({ class: className })}
      style={style}
    >
      <div style={customStyles as any}>
        <DayPicker
          mode={mode as any}
          selected={selected as any}
          onSelect={handleSelect}
          month={currentMonth}
          onMonthChange={handleMonthChange}
          weekStartsOn={firstDayOfWeek as any}
          showWeekNumber={showWeekNumbers}
          disabled={disabledDays}
          modifiers={modifiers}
          animate={animate}
          footer={displayLoadingIndicator ? 'Loading...' : undefined}
        />
      </div>
    </View>
  );
});

const Calendar = React.forwardRef<
  React.ComponentRef<typeof View>,
  CalendarProps
>(function CalendarWithProvider(props, ref) {
  const [currentMonth, setCurrentMonth] = React.useState(
    props.initialDate || new Date()
  );

  return (
    <CalendarContext.Provider value={{ currentMonth, setCurrentMonth }}>
      <CalendarComponent ref={ref} {...props} />
    </CalendarContext.Provider>
  );
});

export { Calendar };
export type { CalendarProps };
