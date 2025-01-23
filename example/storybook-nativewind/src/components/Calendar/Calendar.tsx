import React from 'react';
import {
  Calendar,
  CalendarContent,
  CalendarDays,
  CalendarWeek,
  CalendarHeader,
  CalendarHeaderNext,
  CalendarHeaderPrev,
  CalendarHeaderTitle,
} from '@/components/ui/calendar';

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
      <CalendarContent>
        <CalendarWeek />
        <CalendarDays />
      </CalendarContent>
    </Calendar>
  );
};

CalendarBasic.description =
  'This is a basic Calendar component example. The Calendar component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default CalendarBasic;

export { Calendar };
