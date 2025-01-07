import React, { forwardRef } from 'react';
import CommonPressable from './Pressable';
import { useCalendarContext } from './Context';

export const CalendarGridDays = (StyledCalendarGridDays: any) =>
  forwardRef(({ render, ...props }: any, ref?: any) => {
    const {
      getDaysInMonth,
      handleDateSelect,
      isToday,
      selectedDate,
      isDisabled,
    } = useCalendarContext();
    const days = getDaysInMonth();

    const isSameDate = (date1: Date, date2: Date): boolean => {
      if (!date1 || !date2) return false;
      return date1.getTime() === date2.getTime();
    };

    return (
      <StyledCalendarGridDays ref={ref} {...props}>
        {days.map((day) => {
          return (
            <CommonPressable
              ref={ref}
              {...props}
              isDisabled={isDisabled(day)}
              onPress={() => handleDateSelect(day)}
              states={{
                today: isToday(day),
                selected: day && selectedDate && isSameDate(day, selectedDate),
              }}
              dataSet={{
                today: isToday(day) ? 'true' : 'false',
                selected: day && selectedDate && isSameDate(day, selectedDate),
              }}
              StyledComponent={(dayProps: any) => render(day, dayProps)}
            />
          );
        })}
      </StyledCalendarGridDays>
    );
  });
