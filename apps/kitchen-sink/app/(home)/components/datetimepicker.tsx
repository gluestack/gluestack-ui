import { DateTimePicker, DateTimePickerTrigger, DateTimePickerInput, DateTimePickerIcon, DateTimePickerPortal, DateTimePickerBackdrop, DateTimePickerContent, DateTimePickerCalendar, DateTimePickerCalendarHeader, DateTimePickerCalendarGrid, DateTimePickerCalendarDay, DateTimePickerActionBar, DateTimePickerActionButton } from '@/components/ui/datetimepicker'
import { CalendarDaysIcon } from '@/components/ui/icon'
import { useState } from 'react'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="outline" size="md">
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
  )
};

const VariantUnderlined = () => {
const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="underlined" size="md">
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
  )
};

const VariantRounded = () => {
const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="rounded" size="md">
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
  )
};

const SizeSm = () => {
const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="outline" size="sm">
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
  )
};

const SizeLg = () => {
const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="outline" size="lg">
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
  )
};

const SizeXl = () => {
const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger variant="outline" size="xl">
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
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "underlined",
    label: "Underlined",
    content: <VariantUnderlined />,
  },
  {
    value: "rounded",
    label: "Rounded",
    content: <VariantRounded />,
  },
  {
    value: "sm",
    label: "Sm",
    content: <SizeSm />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "xl",
    label: "Xl",
    content: <SizeXl />,
  }
];

export default function DatetimepickerScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}