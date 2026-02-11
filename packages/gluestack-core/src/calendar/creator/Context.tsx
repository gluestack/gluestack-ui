import { createContext, useContext } from 'react';
import type { ICalendarContextValue } from './types';

export const CalendarContext = createContext<ICalendarContextValue>({
  mode: 'single',
  currentMonth: new Date(),
  selectedDate: undefined,
  selectedDates: [],
  selectedRange: undefined,
  handleDateSelect: () => {},
  prevMonth: () => {},
  nextMonth: () => {},
  getDaysInMonth: () => [],
  isToday: () => false,
  isSelected: () => false,
  isRangeStart: () => false,
  isRangeEnd: () => false,
  isRangeMiddle: () => false,
  weekDays: [],
  months: [],
  title: '',
  isPrevDisabled: false,
  isNextDisabled: false,
  isDisabled: () => false,
});

export const useCalendarContext = () => useContext(CalendarContext);
