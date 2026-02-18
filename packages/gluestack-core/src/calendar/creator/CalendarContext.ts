import React, { createContext, useContext } from 'react';
import type { CalendarContextType } from './types';

export const CalendarContext = createContext<CalendarContextType | null>(null);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendarContext must be used within a Calendar component');
  }
  return context;
};
