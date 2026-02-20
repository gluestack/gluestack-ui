import React, { forwardRef } from 'react';
import type { ICalendarDayTextProps } from './types';

export const CalendarDayTextMain = (StyledCalendarDayText: any) =>
  forwardRef<any, ICalendarDayTextProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
      <StyledCalendarDayText ref={ref} {...rest}>
        {children}
      </StyledCalendarDayText>
    );
  });
