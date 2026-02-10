import React, { createContext, useContext, useState, useCallback } from 'react';
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

export { CalendarContext };
