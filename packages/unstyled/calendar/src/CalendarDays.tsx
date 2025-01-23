import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';

export const CalendarDays = (StyledCalendarDays: any) =>
  forwardRef(({ render, ...props }: any, ref?: any) => {
    const { getDaysInMonth } = useCalendarContext();
    const days = getDaysInMonth();

    return (
      <StyledCalendarDays
        ref={ref}
        {...props}
        aria-label="Calendar dates"
        accessibilityLabel="Calendar dates"
      >
        {days.map((day, index) => {
          const dayProps = {};
          const Day = render;
          return (
            <Day
              {...dayProps}
              day={day}
              key={`key-${day?.getTime()}-${index}`}
            />
          );
        })}
      </StyledCalendarDays>
    );
  });
