import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';
export const CalendarGridWeek = (StyledCalendarGridWeek: any) =>
  forwardRef(({ render, ...props }: any, ref?: any) => {
    const { weekDays } = useCalendarContext();
    return (
      <StyledCalendarGridWeek ref={ref} {...props}>
        {weekDays.map((weekday, index) => render?.(weekday, index))}
      </StyledCalendarGridWeek>
    );
  });
