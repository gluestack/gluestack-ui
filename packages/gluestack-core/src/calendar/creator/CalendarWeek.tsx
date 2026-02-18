import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarWeekProps } from './types';

export const CalendarWeekMain = (StyledCalendarWeek: any) =>
  forwardRef<
    any,
    ICalendarWeekProps & {
      days?: any[];
      WeekNumberComponent?: any;
      DayComponent?: any;
      DayTextComponent?: any;
      DayIndicatorComponent?: any;
    }
  >((props, ref) => {
    const {
      weekNumber,
      children,
      days,
      WeekNumberComponent,
      DayComponent,
      DayTextComponent,
      DayIndicatorComponent,
      ...rest
    } = props;
    const { showWeekNumbers, getDayState, markers } = useCalendarContext();

    // If children provided, use them (custom rendering)
    if (children) {
      return (
        <StyledCalendarWeek ref={ref} {...rest}>
          {children}
        </StyledCalendarWeek>
      );
    }

    // Auto-render week with days
    return (
      <StyledCalendarWeek ref={ref} {...rest}>
        {showWeekNumbers && weekNumber && WeekNumberComponent && (
          <WeekNumberComponent week={weekNumber} />
        )}
        {days?.map((day, dayIndex) => {
          const dayState = getDayState(day.date);
          const dateKey = day.date.toISOString().split('T')[0];
          const marker = markers?.[dateKey];

          return (
            <DayComponent key={dayIndex} date={day.date} state={dayState}>
              <DayTextComponent state={dayState}>
                {day.date.getDate()}
              </DayTextComponent>
              {marker && (
                <DayIndicatorComponent
                  type={marker.type}
                  dots={marker.dots}
                  color={marker.color}
                />
              )}
            </DayComponent>
          );
        })}
      </StyledCalendarWeek>
    );
  });
