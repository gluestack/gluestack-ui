import { createContext, useContext } from 'react';
import type { ICalendarContextValue } from './types';

export const CalendarContext = createContext<ICalendarContextValue>({
  currentMonth: new Date(),
  selectedDate: new Date(),
  handleDateSelect: () => {},
  prevMonth: () => {},
  nextMonth: () => {},
  getDaysInMonth: () => [],
  isToday: () => false,
  weekDays: [],
  months: [],
  title: '',
  isPrevDisabled: false,
  isNextDisabled: false,
  isDisabled: () => false,
});
export const useCalendarContext = () => useContext(CalendarContext);
