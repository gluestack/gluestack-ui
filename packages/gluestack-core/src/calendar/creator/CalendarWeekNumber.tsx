import React, { forwardRef } from 'react';
import type { ICalendarWeekNumberProps } from './types';

export const CalendarWeekNumberMain = (StyledCalendarWeekNumber: any) =>
  forwardRef<any, ICalendarWeekNumberProps>((props, ref) => {
    const { week, children, ...rest } = props;

    return (
      <StyledCalendarWeekNumber ref={ref} {...rest}>
        {children || week}
      </StyledCalendarWeekNumber>
    );
  });
