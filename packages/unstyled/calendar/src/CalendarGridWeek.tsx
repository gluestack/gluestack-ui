import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';
export const CalendarGridWeek = (StyledCalendarGridWeek: any) =>
  forwardRef(({ children, render, ...props }: any, ref?: any) => {
    const { weekDays } = useCalendarContext();

    const Component = ({ weekday, ...props }: any) => (
      <StyledCalendarGridWeek.Day weekday={weekday} {...props} />
    );

    const content = render ? render(weekDays, Component) : children;

    return (
      <StyledCalendarGridWeek ref={ref} {...props}>
        {content}
      </StyledCalendarGridWeek>
    );
  });
