import React from 'react';
import {
  Calendar,
  CalendarGrid,
  CalendarGridDays,
  CalendarGridWeek,
  CalendarHeader,
  CalendarHeaderNext,
  CalendarHeaderPrev,
  CalendarHeaderTitle,
} from '@/components/ui/calendar';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { cssInterop } from 'nativewind';

// note: required for nativewind to work on Storybook
cssInterop(Pressable, {
  className: {
    target: 'style',
  },
});

const CalendarBasic = ({ ...props }: any) => {
  return (
    <Calendar
      {...props}
      value={new Date()}
      className="w-72"
      minDate={new Date(2024, 5, 1)}
      maxDate={new Date(2025, 1, 15)}
    >
      <CalendarHeader>
        <CalendarHeaderPrev />
        <CalendarHeaderTitle />
        <CalendarHeaderNext />
      </CalendarHeader>
      <CalendarGrid>
        <CalendarGridWeek />
        <CalendarGridDays
          render={(day, dayProps) => (
            <Pressable
              key={day?.getDate()}
              {...dayProps}
              className="w-[14.28%] p-2 flex items-center justify-center rounded-lg"
            >
              <Text>{day?.getDate()}</Text>
            </Pressable>
          )}
        />
      </CalendarGrid>
    </Calendar>
  );
};

CalendarBasic.description =
  'This is a basic Calendar component example. The Calendar component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default CalendarBasic;

export { Calendar };
