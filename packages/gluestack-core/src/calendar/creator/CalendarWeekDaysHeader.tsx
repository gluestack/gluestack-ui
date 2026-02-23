import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarWeekDaysHeaderProps } from './types';
import { getWeekdays } from './utils/dateUtils';

export const CalendarWeekDaysHeaderMain = (
  StyledCalendarWeekDaysHeader: any,
  WeekDayComponent: any,
  WeekNumberComponent: any
) =>
  forwardRef<any, ICalendarWeekDaysHeaderProps>((props, ref) => {
    const { format = 'short', children, ...rest } = props;
    const { firstDayOfWeek = 0, showWeekNumbers } = useCalendarContext();

    const weekdays = getWeekdays(firstDayOfWeek, format);

    // If children provided, use them (custom rendering)
    if (children) {
      return (
        <StyledCalendarWeekDaysHeader ref={ref} {...rest}>
          {children}
        </StyledCalendarWeekDaysHeader>
      );
    }

    // Auto-render weekday headers
    return (
      <StyledCalendarWeekDaysHeader ref={ref} {...rest}>
        {showWeekNumbers && <WeekNumberPlaceholder />}
        {weekdays.map((day, index) => (
          <WeekDayComponent key={index}>{day}</WeekDayComponent>
        ))}
      </StyledCalendarWeekDaysHeader>
    );
  });

// Empty placeholder for week number column header
const WeekNumberPlaceholder = () => {
  return <></>;
};
