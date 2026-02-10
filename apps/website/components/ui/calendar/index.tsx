'use client';

import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { useCalendarTheme } from '../gluestack-ui-provider/useGluestackColors';
import type { CalendarProps, MarkedDates } from './types';

// Convert markedDates to react-native-calendars format
const convertMarkedDates = (
  markedDates: MarkedDates | undefined,
  selected: Date | Date[] | { from: Date; to: Date } | undefined,
  mode: string,
  theme: any
): any => {
  const converted: any = {};

  if (markedDates) {
    Object.entries(markedDates).forEach(([date, marking]) => {
      converted[date] = { ...marking };
    });
  }

  if (selected) {
    if (mode === 'single' && selected instanceof Date) {
      const dateStr = selected.toISOString().split('T')[0];
      converted[dateStr] = {
        ...converted[dateStr],
        selected: true,
        selectedColor: theme?.selectedDayBackgroundColor || '#171717',
      };
    } else if (mode === 'multiple' && Array.isArray(selected)) {
      selected.forEach((date) => {
        const dateStr = date.toISOString().split('T')[0];
        converted[dateStr] = {
          ...converted[dateStr],
          selected: true,
          selectedColor: theme?.selectedDayBackgroundColor || '#171717',
        };
      });
    } else if (mode === 'range' && selected && 'from' in selected) {
      const start = new Date(selected.from);
      const end = new Date(selected.to);
      let current = new Date(start);

      while (current <= end) {
        const dateStr = current.toISOString().split('T')[0];
        const isStart = dateStr === start.toISOString().split('T')[0];
        const isEnd = dateStr === end.toISOString().split('T')[0];

        converted[dateStr] = {
          ...converted[dateStr],
          selected: true,
          startingDay: isStart,
          endingDay: isEnd,
          color: theme?.selectedDayBackgroundColor || '#171717',
        };
        current.setDate(current.getDate() + 1);
      }
    }
  }

  return converted;
};

export const Calendar = React.forwardRef<
  React.ComponentRef<typeof View>,
  CalendarProps
>(function Calendar(
  {
    mode = 'single',
    selected,
    onSelect,
    minDate,
    maxDate,
    markedDates,
    markingType = 'dot',
    initialDate,
    showWeekNumbers = false,
    hideExtraDays = false,
    showSixWeeks = false,
    firstDayOfWeek = 0,
    enableSwipeMonths = true,
    onMonthChange,
    onDayPress,
    onDayLongPress,
    theme: customTheme,
    className,
    style,
  },
  ref
) {
  const gluestackTheme = useCalendarTheme();
  const theme = customTheme || gluestackTheme;

  const mergedMarkedDates = useMemo(() => {
    return convertMarkedDates(markedDates, selected, mode, theme);
  }, [markedDates, selected, mode, theme]);

  const handleDayPress = useCallback(
    (day: any) => {
      const date = new Date(day.dateString);
      onDayPress?.(date);

      if (onSelect) {
        if (mode === 'single') {
          onSelect(date);
        } else if (mode === 'multiple') {
          const currentSelection = (selected as Date[]) || [];
          const exists = currentSelection.find(
            (d) => d.toISOString().split('T')[0] === day.dateString
          );

          if (exists) {
            onSelect(
              currentSelection.filter(
                (d) => d.toISOString().split('T')[0] !== day.dateString
              )
            );
          } else {
            onSelect([...currentSelection, date]);
          }
        } else if (mode === 'range') {
          const currentRange = selected as { from: Date; to: Date } | undefined;
          if (!currentRange || (currentRange.from && currentRange.to)) {
            onSelect({ from: date, to: date });
          } else {
            onSelect({ from: currentRange.from, to: date });
          }
        }
      }
    },
    [mode, onSelect, onDayPress, selected]
  );

  return (
    <View
      ref={ref}
      className={`w-full bg-background ${className || ''}`}
      style={style}
    >
      <RNCalendar
        initialDate={initialDate?.toISOString().split('T')[0]}
        minDate={minDate?.toISOString().split('T')[0]}
        maxDate={maxDate?.toISOString().split('T')[0]}
        firstDay={firstDayOfWeek}
        markedDates={mergedMarkedDates}
        markingType={markingType as any}
        showWeekNumbers={showWeekNumbers}
        hideExtraDays={hideExtraDays}
        showSixWeeks={showSixWeeks}
        enableSwipeMonths={enableSwipeMonths}
        theme={theme}
        onDayPress={handleDayPress}
        onDayLongPress={(day: any) =>
          onDayLongPress?.(new Date(day.dateString))
        }
        onMonthChange={(month: any) =>
          onMonthChange?.(new Date(month.dateString))
        }
      />
    </View>
  );
});

export type { CalendarProps };
