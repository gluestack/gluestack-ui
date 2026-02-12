import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  addDays,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  getWeek,
  format,
  isAfter,
  isBefore,
  getYear,
  getMonth,
  isToday,
} from 'date-fns';

export interface CalendarWeek {
  weekNumber?: number;
  days: CalendarDay[];
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

/**
 * Generate a calendar grid for a given month
 * @param month The month to generate the grid for
 * @param firstDayOfWeek Week starts on (0 = Sunday, 1 = Monday, etc.)
 * @param fixedWeeks Always show 6 weeks regardless of month length
 * @returns Array of weeks, each containing an array of days
 */
export function generateCalendarGrid(
  month: Date,
  firstDayOfWeek: number = 0,
  fixedWeeks: boolean = false
): CalendarWeek[] {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  const calendarStart = startOfWeek(monthStart, {
    weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6,
  });
  const calendarEnd = endOfWeek(monthEnd, {
    weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6,
  });

  const allDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  // Group into weeks
  const weeks: CalendarWeek[] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    const weekDays = allDays.slice(i, i + 7);
    weeks.push({
      weekNumber: getWeek(weekDays[0], {
        weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6,
      }),
      days: weekDays.map((date) => ({
        date,
        isCurrentMonth: isSameMonth(date, month),
        isToday: isToday(date),
      })),
    });
  }

  // If fixedWeeks and less than 6 weeks, pad with next month
  if (fixedWeeks && weeks.length < 6) {
    const lastDay = weeks[weeks.length - 1].days[6].date;
    const additionalWeeksNeeded = 6 - weeks.length;

    for (let w = 0; w < additionalWeeksNeeded; w++) {
      const weekStart = addDays(lastDay, 1 + w * 7);
      const weekDays = eachDayOfInterval({
        start: weekStart,
        end: addDays(weekStart, 6),
      });

      weeks.push({
        weekNumber: getWeek(weekStart, {
          weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6,
        }),
        days: weekDays.map((date) => ({
          date,
          isCurrentMonth: false,
          isToday: isToday(date),
        })),
      });
    }
  }

  return weeks;
}

/**
 * Get weekday labels for the calendar header
 * @param firstDayOfWeek Week starts on (0 = Sunday, 1 = Monday, etc.)
 * @param formatType Format as 'short' (Sun) or 'narrow' (S)
 * @param locale Optional locale for formatting
 * @returns Array of 7 weekday labels
 */
export function getWeekdays(
  firstDayOfWeek: number = 0,
  formatType: 'short' | 'narrow' = 'short',
  locale?: string
): string[] {
  const start = new Date(2024, 0, 7); // A Sunday
  const weekStart = startOfWeek(start, {
    weekStartsOn: firstDayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6,
  });

  return Array.from({ length: 7 }, (_, i) => {
    const day = addDays(weekStart, i);
    return format(day, formatType === 'narrow' ? 'EEEEE' : 'EEE');
  });
}

/**
 * Convert a Date object to a string key for marker lookups
 * @param date The date to convert
 * @returns ISO format string (YYYY-MM-DD)
 */
export function dateToKey(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

/**
 * Convert a string key back to a Date object
 * @param key ISO format string (YYYY-MM-DD)
 * @returns Date object
 */
export function keyToDate(key: string): Date {
  return new Date(key);
}

/**
 * Check if a date is disabled based on constraints
 * @param date The date to check
 * @param minDate Minimum allowed date
 * @param maxDate Maximum allowed date
 * @param disabledDates Array of disabled dates or function
 * @returns true if date is disabled
 */
export function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[] | ((date: Date) => boolean)
): boolean {
  // Check min/max constraints
  if (minDate && isBefore(date, minDate)) {
    return true;
  }
  if (maxDate && isAfter(date, maxDate)) {
    return true;
  }

  // Check disabled dates
  if (!disabledDates) {
    return false;
  }

  if (typeof disabledDates === 'function') {
    return disabledDates(date);
  }

  return disabledDates.some((disabledDate) => isSameDay(date, disabledDate));
}

/**
 * Check if a date is selected in single mode
 */
export function isDateSelectedSingle(date: Date, value?: Date): boolean {
  if (!value) return false;
  return isSameDay(date, value);
}

/**
 * Check if a date is selected in multiple mode
 */
export function isDateSelectedMultiple(
  date: Date,
  value?: Date[]
): boolean {
  if (!value || value.length === 0) return false;
  return value.some((selectedDate) => isSameDay(date, selectedDate));
}

/**
 * Check if a date is selected in range mode
 */
export function isDateSelectedRange(
  date: Date,
  value?: { from: Date; to?: Date }
): { isSelected: boolean; isRangeStart: boolean; isRangeEnd: boolean; isInRange: boolean } {
  if (!value || !value.from) {
    return { isSelected: false, isRangeStart: false, isRangeEnd: false, isInRange: false };
  }

  const isRangeStart = isSameDay(date, value.from);
  const isRangeEnd = value.to ? isSameDay(date, value.to) : false;

  let isInRange = false;
  if (value.to) {
    isInRange = isWithinInterval(date, {
      start: value.from,
      end: value.to,
    });
  }

  const isSelected = isRangeStart || isRangeEnd || isInRange;

  return { isSelected, isRangeStart, isRangeEnd, isInRange };
}

// Re-export commonly used date-fns functions for convenience
export {
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  isAfter,
  isBefore,
  startOfMonth,
  endOfMonth,
  getYear,
  getMonth,
  format,
  isToday,
  addDays,
};
