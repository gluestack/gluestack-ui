import React from 'react';
import {
  Calendar,
  CalendarHeader,
  CalendarHeaderNext,
  CalendarHeaderPrev,
  CalendarHeaderTitle,
  CalendarGrid,
  CalendarGridWeek,
  CalendarGridDays,
} from '@/components/ui/calendar';

const CalendarBasic = () => {
  return (
    <Calendar value={new Date()} className="max-w-6xl">
      <CalendarHeader>
        <CalendarHeaderPrev />
        <CalendarHeaderTitle />
        <CalendarHeaderNext />
      </CalendarHeader>
      <CalendarGrid>
        <CalendarGridWeek />
        <CalendarGridDays />
      </CalendarGrid>
    </Calendar>
  );
};

CalendarBasic.description =
  'This is a basic Calendar component example. The Calendar component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default CalendarBasic;

export { Calendar };
