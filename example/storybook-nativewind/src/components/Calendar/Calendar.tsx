import React from 'react';
import { Calendar } from '@/components/ui/calendar';

const CalendarBasic = ({ ...props }: any) => {
  return <Calendar {...props} defaultValue={new Date()} className="max-w-md" />;
};

CalendarBasic.description =
  'This is a basic Calendar component example. The Calendar component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default CalendarBasic;

export { Calendar };
