import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';
export const CalendarWeek = (StyledCalendarWeek: any) =>
  forwardRef(({ render, ...props }: any, ref?: any) => {
    const { weekDays } = useCalendarContext();
    return (
      <StyledCalendarWeek ref={ref} {...props}>
        {weekDays.map((weekday, index) => {
          const Weekday = render;
          return <Weekday weekday={weekday} key={`key-${weekday}-${index}`} />;
        })}
      </StyledCalendarWeek>
    );
  });
