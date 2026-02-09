import React, { createContext, useContext } from 'react';
import type {
  CalendarContextValue,
  CalendarMode,
  MarkedDates,
  CalendarTheme,
} from '../types';

const CalendarContext = createContext<CalendarContextValue | null>(null);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};

interface CalendarProviderProps {
  children: React.ReactNode;
  mode: CalendarMode;
  selected?: Date | Date[] | { from: Date; to: Date };
  onSelect?: (date: Date | Date[] | { from: Date; to: Date }) => void;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  markedDates?: MarkedDates;
  markingType?: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  firstDayOfWeek: number;
  showWeekNumbers: boolean;
  hideExtraDays: boolean;
  theme?: CalendarTheme;
}

export const CalendarProvider: React.FC<CalendarProviderProps> = ({
  children,
  ...value
}) => {
  return (
    <CalendarContext.Provider value={value as CalendarContextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext };
