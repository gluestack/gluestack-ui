import React, { useCallback, useMemo } from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { View } from 'react-native';
import type { CalendarProps, MarkedDates } from './types';

// Helper: Convert Date to YYYY-MM-DD string
const toDateString = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Helper: Convert YYYY-MM-DD string to Date
const toDate = (dateString: string): Date => {
  return new Date(dateString);
};

// Build markedDates for single mode
const buildSingleMarkedDates = (
  selected: Date | undefined,
  theme: any
): MarkedDates => {
  if (!selected) return {};
  return {
    [toDateString(selected)]: {
      selected: true,
      selectedColor: theme?.selectedDayBackgroundColor || '#171717',
    },
  };
};

// Build markedDates for multiple mode
const buildMultipleMarkedDates = (
  selected: Date[] | undefined,
  theme: any
): MarkedDates => {
  if (!selected || selected.length === 0) return {};
  const marked: MarkedDates = {};
  selected.forEach((date) => {
    marked[toDateString(date)] = {
      selected: true,
      selectedColor: theme?.selectedDayBackgroundColor || '#171717',
    };
  });
  return marked;
};

// Build markedDates for range mode
const buildRangeMarkedDates = (
  selected: { from: Date; to: Date } | undefined,
  theme: any
): MarkedDates => {
  if (!selected) return {};
  const marked: MarkedDates = {};
  const start = new Date(selected.from);
  const end = new Date(selected.to);
  let current = new Date(start);

  while (current <= end) {
    const dateStr = toDateString(current);
    const isStart = dateStr === toDateString(start);
    const isEnd = dateStr === toDateString(end);

    marked[dateStr] = {
      selected: true,
      startingDay: isStart,
      endingDay: isEnd,
      color: theme?.selectedDayBackgroundColor || '#171717',
    };

    current.setDate(current.getDate() + 1);
  }

  return marked;
};

// Merge user markedDates with selection markedDates
const mergeMarkedDates = (
  selectionMarked: MarkedDates,
  userMarked?: MarkedDates
): MarkedDates => {
  if (!userMarked) return selectionMarked;
  return { ...userMarked, ...selectionMarked };
};

export function Calendar({
  mode = 'single',
  selected,
  onSelect,
  minDate,
  maxDate,
  initialDate,
  markedDates: userMarkedDates,
  onDayPress: userOnDayPress,
  onDayLongPress: userOnDayLongPress,
  onMonthChange,
  theme,
  ...rest
}: CalendarProps) {
  // Build markedDates based on mode
  const selectionMarkedDates = useMemo(() => {
    switch (mode) {
      case 'single':
        return buildSingleMarkedDates(selected as Date | undefined, theme);
      case 'multiple':
        return buildMultipleMarkedDates(selected as Date[] | undefined, theme);
      case 'range':
        return buildRangeMarkedDates(
          selected as { from: Date; to: Date } | undefined,
          theme
        );
      default:
        return {};
    }
  }, [selected, mode, theme]);

  // Merge with user's markedDates
  const mergedMarkedDates = useMemo(() => {
    return mergeMarkedDates(selectionMarkedDates, userMarkedDates);
  }, [selectionMarkedDates, userMarkedDates]);

  // Handle day press with mode logic
  const handleDayPress = useCallback(
    (day: { dateString: string }) => {
      const date = toDate(day.dateString);

      // Call user's onDayPress if provided
      userOnDayPress?.(date);

      if (!onSelect) return;

      switch (mode) {
        case 'single':
          onSelect(date);
          break;

        case 'multiple': {
          const currentSelection = (selected as Date[]) || [];
          const dateStr = day.dateString;
          const exists = currentSelection.find(
            (d) => toDateString(d) === dateStr
          );

          if (exists) {
            onSelect(
              currentSelection.filter((d) => toDateString(d) !== dateStr)
            );
          } else {
            onSelect([...currentSelection, date]);
          }
          break;
        }

        case 'range': {
          const currentRange = selected as { from: Date; to: Date } | undefined;
          if (
            !currentRange ||
            currentRange.from.getTime() !== currentRange.to.getTime()
          ) {
            onSelect({ from: date, to: date });
          } else {
            const start = currentRange.from;
            if (date < start) {
              onSelect({ from: date, to: start });
            } else {
              onSelect({ from: start, to: date });
            }
          }
          break;
        }
      }
    },
    [mode, onSelect, userOnDayPress, selected]
  );

  return (
    <View>
      <RNCalendar
        {...rest}
        initialDate={initialDate?.toISOString().split('T')[0]}
        minDate={minDate?.toISOString().split('T')[0]}
        maxDate={maxDate?.toISOString().split('T')[0]}
        markedDates={mergedMarkedDates}
        markingType={mode === 'range' ? 'period' : 'dot'}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#171717',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#171717',
          dayTextColor: '#2d4150',
          textDisabledColor: '#dd99ee',
          ...theme,
        }}
        onDayPress={handleDayPress}
        onDayLongPress={(day: { dateString: string }) =>
          userOnDayLongPress?.(toDate(day.dateString))
        }
        onMonthChange={(month: { dateString: string }) =>
          onMonthChange?.(toDate(month.dateString))
        }
      />
    </View>
  );
}
