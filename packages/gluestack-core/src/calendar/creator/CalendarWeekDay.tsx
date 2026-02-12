import React, { forwardRef } from 'react';
import type { ICalendarWeekDayProps } from './types';

export const CalendarWeekDayMain = (StyledCalendarWeekDay: any) =>
  forwardRef<any, ICalendarWeekDayProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
      <StyledCalendarWeekDay ref={ref} {...rest}>
        {children}
      </StyledCalendarWeekDay>
    );
  });
