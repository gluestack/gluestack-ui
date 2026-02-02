import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { DateTimePicker } from '@/components/ui/datetimepicker';
import { DateTimePickerTrigger } from '@/components/ui/datetimepicker';
import { DateTimePickerInput } from '@/components/ui/datetimepicker';
import { DateTimePickerIcon } from '@/components/ui/datetimepicker';
import { DateTimePickerPortal } from '@/components/ui/datetimepicker';
import { DateTimePickerBackdrop } from '@/components/ui/datetimepicker';
import { DateTimePickerContent } from '@/components/ui/datetimepicker';
import { DateTimePickerCalendar } from '@/components/ui/datetimepicker';
import { DateTimePickerCalendarHeader } from '@/components/ui/datetimepicker';
import { DateTimePickerCalendarGrid } from '@/components/ui/datetimepicker';
import { DateTimePickerCalendarDay } from '@/components/ui/datetimepicker';
import { DateTimePickerActionBar } from '@/components/ui/datetimepicker';
import { DateTimePickerActionButton } from '@/components/ui/datetimepicker';
import { CalendarDaysIcon } from '@/components/ui/icon';
import { useState } from 'react';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="{{mode}}"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="{{variant}}" size="{{size}}">
        <DateTimePickerInput placeholder="Select date" />
        <DateTimePickerIcon>
          <CalendarDaysIcon />
        </DateTimePickerIcon>
      </DateTimePickerTrigger>
      <DateTimePickerPortal>
        <DateTimePickerBackdrop />
        <DateTimePickerContent>
          <DateTimePickerCalendar>
            <DateTimePickerCalendarHeader />
            <DateTimePickerCalendarGrid />
          </DateTimePickerCalendar>
          <DateTimePickerActionBar>
            <DateTimePickerActionButton action="today" />
            <DateTimePickerActionButton action="cancel" />
            <DateTimePickerActionButton action="confirm" />
          </DateTimePickerActionBar>
        </DateTimePickerContent>
      </DateTimePickerPortal>
    </DateTimePicker>
  );
}`}
      argTypes={{
  "mode": {
    "control": {
      "type": "select"
    },
    "options": [
      "date",
      "time",
      "datetime"
    ],
    "defaultValue": "date"
  },
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "underlined",
      "outline",
      "rounded"
    ],
    "defaultValue": "outline"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "defaultValue": "md"
  }
}}
      reactLive={{ DateTimePicker, DateTimePickerTrigger, DateTimePickerInput, DateTimePickerIcon, DateTimePickerPortal, DateTimePickerBackdrop, DateTimePickerContent, DateTimePickerCalendar, DateTimePickerCalendarHeader, DateTimePickerCalendarGrid, DateTimePickerCalendarDay, DateTimePickerActionBar, DateTimePickerActionButton, CalendarDaysIcon, useState }}
    />
  );
}