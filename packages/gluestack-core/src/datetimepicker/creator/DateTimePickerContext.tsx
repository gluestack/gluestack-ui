import React from 'react';
import type { DateTimePickerContextValue } from './types';

export const DateTimePickerContext =
  React.createContext<DateTimePickerContextValue | null>(null);

export const useDateTimePickerContext = () => {
  const context = React.useContext(DateTimePickerContext);
  if (!context) {
    throw new Error(
      'useDateTimePickerContext must be used within DateTimePicker'
    );
  }
  return context;
};
