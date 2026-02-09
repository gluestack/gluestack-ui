'use client';

import React, {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useState,
} from 'react';
import { View, Pressable, Text } from 'react-native';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cssInterop } from 'nativewind';
import type { CalendarProps, MarkedDates, DayState } from './types';
import { format, isSameDay, startOfMonth, endOfMonth } from 'date-fns';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react-native';

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

// Chevron Icon component
const Chevron = ({
  orientation,
  className,
}: {
  orientation: 'left' | 'right' | 'down';
  className?: string;
}) => {
  const iconClass = `size-4 text-foreground ${className}`;
  if (orientation === 'left') {
    return <ChevronLeft className={iconClass} />;
  }
  if (orientation === 'right') {
    return <ChevronRight className={iconClass} />;
  }
  return <ChevronDown className={iconClass} />;
};

// Style classes using Tailwind (no tva needed for simple calendar)
const calendarClasses = {
  root: 'p-2 bg-background',
  month: 'flex flex-col w-full gap-4',
  nav: 'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between px-1',
  button:
    'size-9 items-center justify-center rounded-md web:outline-none web:ring-0 web:ring-offset-0 hover:bg-accent active:bg-accent data-[hover=true]:bg-accent data-[active=true]:bg-accent',
  caption:
    'flex items-center justify-center h-9 w-full px-9 font-medium text-foreground',
  table: 'w-full border-collapse',
  weekday:
    'text-muted-foreground rounded-md flex-1 font-normal text-xs select-none h-9 w-9 text-center',
  week: 'flex w-full mt-2',
  day: 'relative w-full h-full p-0 text-center aspect-square select-none',
  dayButton:
    'size-9 items-center justify-center rounded-md text-sm font-normal transition-colors web:outline-none web:ring-0 web:ring-offset-0 text-foreground hover:bg-accent active:bg-accent data-[hover=true]:bg-accent data-[active=true]:bg-accent',
  dayButtonSelected:
    'size-9 items-center justify-center rounded-md text-sm font-normal bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 data-[hover=true]:bg-primary/90 data-[active=true]:bg-primary/90',
  dayButtonToday:
    'size-9 items-center justify-center rounded-md text-sm font-normal bg-accent text-accent-foreground',
  dayButtonOutside:
    'size-9 items-center justify-center rounded-md text-sm font-normal text-muted-foreground opacity-50',
  dayButtonDisabled:
    'size-9 items-center justify-center rounded-md text-sm font-normal text-muted-foreground opacity-50',
  dayButtonRangeStart:
    'size-9 items-center justify-center rounded-md text-sm font-normal bg-primary text-primary-foreground rounded-l-md',
  dayButtonRangeEnd:
    'size-9 items-center justify-center rounded-md text-sm font-normal bg-primary text-primary-foreground rounded-r-md',
  dayButtonRangeMiddle:
    'size-9 items-center justify-center rounded-md text-sm font-normal bg-muted text-foreground rounded-none',
};

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
    ...props
  },
  ref
) {
  const { currentMonth, setCurrentMonth } = useCalendar();
  const defaultClassNames = getDefaultClassNames();

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

  // Custom styles for DayPicker
  const customStyles = useMemo(
    () => ({
      '--rdp-accent-color':
        theme?.selectedDayBackgroundColor || 'hsl(var(--primary))',
      '--rdp-background-color': theme?.backgroundColor || 'transparent',
      '--rdp-today-color': theme?.todayTextColor || 'hsl(var(--primary))',
    }),
    [theme]
  );

  return (
    <View
      ref={ref}
      className={`${calendarClasses.root} ${className || ''}`}
      style={[customStyles, style]}
    >
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
        classNames={{
          root: 'w-fit',
          months: 'flex gap-4 flex-col md:flex-row relative',
          month: calendarClasses.month,
          nav: calendarClasses.nav,
          button_previous: `${calendarClasses.button} aria-disabled:opacity-50`,
          button_next: `${calendarClasses.button} aria-disabled:opacity-50`,
          month_caption: calendarClasses.caption,
          dropdowns:
            'w-full flex items-center text-sm font-medium justify-center h-9 gap-1.5',
          dropdown_root: 'relative rounded-md',
          dropdown: 'absolute bg-popover inset-0 opacity-0',
          caption_label: 'select-none font-medium text-sm',
          table: calendarClasses.table,
          weekdays: 'flex',
          weekday: calendarClasses.weekday,
          week: calendarClasses.week,
          week_number_header:
            'select-none w-9 text-center text-muted-foreground text-xs',
          week_number: 'text-xs select-none text-muted-foreground',
          day: calendarClasses.day,
          day_button: calendarClasses.dayButton,
          range_start: 'rdp-range-start',
          range_middle: 'rdp-range-middle',
          range_end: 'rdp-range-end',
          today: `rdp-today ${calendarClasses.dayButtonToday}`,
          outside: `rdp-outside ${calendarClasses.dayButtonOutside}`,
          disabled: `rdp-disabled ${calendarClasses.dayButtonDisabled}`,
          hidden: 'invisible',
          selected: `rdp-selected ${calendarClasses.dayButtonSelected}`,
        }}
        components={{
          Chevron: ({ orientation, className }) => (
            <Chevron
              orientation={orientation as 'left' | 'right' | 'down'}
              className={className}
            />
          ),
        }}
        {...props}
      />
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
