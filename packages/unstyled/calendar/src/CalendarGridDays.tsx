import React, { forwardRef } from 'react';
import type { ICalendarDayProps } from './types';
import { useCalendarContext } from './Context';

export const CalendarGridDays = (StyledCalendarGridDays: any) =>
  forwardRef(({ render, ...props }: any, ref?: any) => {
    const { getDaysInMonth, handleDateSelect, isToday } = useCalendarContext();
    const days = getDaysInMonth();

    const DayComponent = ({ day, ...dayProps }: ICalendarDayProps) => (
      <StyledCalendarGridDays.Day
        day={day}
        isToday={day !== null && isToday(day)}
        onPress={() => day !== null && handleDateSelect(day)}
        {...dayProps}
      />
    );

    return (
      <StyledCalendarGridDays ref={ref} {...props}>
        {render
          ? render(days, DayComponent)
          : // Default rendering
            days.map((day, index) => (
              <DayComponent key={`day-${index}`} day={day} />
            ))}
      </StyledCalendarGridDays>
    );
  });
