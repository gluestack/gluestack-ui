import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarGridProps } from './types';

export const CalendarGridMain = (
  StyledCalendarGrid: any,
  WeekComponent: any,
  DayComponent: any,
  DayTextComponent: any,
  DayIndicatorComponent: any,
  WeekNumberComponent: any
) =>
  forwardRef<any, ICalendarGridProps>((props, ref) => {
    const { children, ...rest } = props;
    const { calendarGrid, showWeekNumbers } = useCalendarContext();

    // If children provided, use them (custom rendering)
    if (children) {
      return (
        <StyledCalendarGrid ref={ref} {...rest}>
          {children}
        </StyledCalendarGrid>
      );
    }

    // Auto-render grid based on calendarGrid data
    return (
      <StyledCalendarGrid ref={ref} {...rest}>
        {calendarGrid.map((week, weekIndex) => (
          <WeekComponent
            key={weekIndex}
            weekNumber={week.weekNumber}
            days={week.days}
            WeekNumberComponent={WeekNumberComponent}
            DayComponent={DayComponent}
            DayTextComponent={DayTextComponent}
            DayIndicatorComponent={DayIndicatorComponent}
          />
        ))}
      </StyledCalendarGrid>
    );
  });
