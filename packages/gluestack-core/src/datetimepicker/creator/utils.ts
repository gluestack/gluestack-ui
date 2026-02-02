/**
 * Date utility functions for DateTimePicker
 */

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Check if date is between start and end (inclusive)
 */
export function isDateInRange(
  date: Date,
  start: Date | null,
  end: Date | null
): boolean {
  if (!start || !end) return false;
  const time = date.getTime();
  return time >= start.getTime() && time <= end.getTime();
}

/**
 * Check if date is today
 */
export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

/**
 * Check if date is disabled based on min/max constraints
 */
export function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[] | ((date: Date) => boolean)
): boolean {
  // Check min/max constraints
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;

  // Check custom disabled dates
  if (disabledDates) {
    if (typeof disabledDates === 'function') {
      return disabledDates(date);
    }
    return disabledDates.some((disabledDate) => isSameDay(date, disabledDate));
  }

  return false;
}

/**
 * Generate calendar grid (7×6 = 42 days)
 */
export function generateCalendarGrid(
  year: number,
  month: number,
  firstDayOfWeek: 0 | 1 = 0
): CalendarDay[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  // Calculate offset for first day
  let dayOffset = firstDayOfMonth.getDay() - firstDayOfWeek;
  if (dayOffset < 0) dayOffset += 7;

  const grid: CalendarDay[] = [];

  // Previous month days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = dayOffset - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthLastDay - i);
    grid.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    grid.push({
      date,
      isCurrentMonth: true,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  // Next month days (fill to 42 cells)
  const remainingDays = 42 - grid.length;
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(year, month + 1, day);
    grid.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  return grid;
}

/**
 * Get month name
 */
export function getMonthName(month: number, locale: string = 'en-US'): string {
  const date = new Date(2000, month, 1);
  return date.toLocaleDateString(locale, { month: 'long' });
}

/**
 * Get day names for calendar header
 */
export function getDayNames(
  firstDayOfWeek: 0 | 1 = 0,
  locale: string = 'en-US'
): string[] {
  const days: string[] = [];
  const baseDate = new Date(2024, 0, firstDayOfWeek === 0 ? 7 : 1); // Sunday or Monday

  for (let i = 0; i < 7; i++) {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i);
    days.push(
      date.toLocaleDateString(locale, { weekday: 'short' }).substring(0, 2)
    );
  }

  return days;
}

/**
 * Format date based on format string
 */
export function formatDate(
  date: Date | null,
  format: string = 'MM/DD/YYYY'
): string {
  if (!date) return '';

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const tokens: Record<string, string> = {
    DD: day.toString().padStart(2, '0'),
    D: day.toString(),
    MM: month.toString().padStart(2, '0'),
    M: month.toString(),
    YYYY: year.toString(),
    YY: year.toString().slice(-2),
  };

  return format.replace(/YYYY|YY|MM|M|DD|D/g, (match) => tokens[match] || match);
}

/**
 * Format time based on format
 */
export function formatTime(
  date: Date | null,
  format: '12h' | '24h' = '12h'
): string {
  if (!date) return '';

  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (format === '24h') {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/**
 * Format date range
 */
export function formatDateRange(
  range: [Date, Date] | null,
  format: string = 'MM/DD/YYYY'
): string {
  if (!range || !range[0] || !range[1]) return '';
  return `${formatDate(range[0], format)} - ${formatDate(range[1], format)}`;
}

/**
 * Format datetime
 */
export function formatDateTime(
  date: Date | null,
  dateFormat: string = 'MM/DD/YYYY',
  timeFormat: '12h' | '24h' = '12h'
): string {
  if (!date) return '';
  return `${formatDate(date, dateFormat)} ${formatTime(date, timeFormat)}`;
}

/**
 * Merge date and time
 */
export function mergeDateAndTime(date: Date, time: Date): Date {
  const merged = new Date(date);
  merged.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
  return merged;
}

/**
 * Check if time is within constraints
 */
export function isTimeDisabled(
  date: Date,
  minTime?: { hour: number; minute: number },
  maxTime?: { hour: number; minute: number }
): boolean {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  if (minTime) {
    const minTotalMinutes = minTime.hour * 60 + minTime.minute;
    if (totalMinutes < minTotalMinutes) return true;
  }

  if (maxTime) {
    const maxTotalMinutes = maxTime.hour * 60 + maxTime.minute;
    if (totalMinutes > maxTotalMinutes) return true;
  }

  return false;
}

/**
 * Add months to date
 */
export function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

/**
 * Parse date format string to identify tokens
 */
export function parseDateFormat(format: string): {
  dayToken: string;
  monthToken: string;
  yearToken: string;
} {
  const dayToken = format.match(/D+/)?.[0] || 'DD';
  const monthToken = format.match(/M+/)?.[0] || 'MM';
  const yearToken = format.match(/Y+/)?.[0] || 'YYYY';

  return { dayToken, monthToken, yearToken };
}
