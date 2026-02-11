import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';
import type { ICalendarWeekProps } from './types';

export const CalendarWeek = (StyledCalendarWeek: any) =>
  forwardRef(
    (
      {
        format: formatProp = 'min',
        render,
        ...props
      }: ICalendarWeekProps & { format?: 'min' | 'short' | 'full' },
      ref?: any
    ) => {
      const { weekDays } = useCalendarContext();

      // weekDays from context are already in 'min' format (Su, Mo, Tu)
      // We could transform them here if needed based on format prop
      const formattedWeekDays = weekDays;

      return (
        <StyledCalendarWeek
          ref={ref}
          {...props}
          role="row"
          aria-label="Week days"
        >
          {formattedWeekDays.map((weekday: string, index: number) => {
            const Weekday = render;
            return (
              <Weekday weekday={weekday} key={`key-${weekday}-${index}`} />
            );
          })}
        </StyledCalendarWeek>
      );
    }
  );
