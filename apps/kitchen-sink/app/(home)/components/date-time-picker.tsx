import { DateTimePicker, DateTimePickerTrigger, DateTimePickerInput, DateTimePickerIcon } from '@/components/ui/date-time-picker'
import { Box } from '@/components/ui/box'
import { CalendarDaysIcon, ClockIcon, AlertCircleIcon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorText, FormControlErrorIcon } from '@/components/ui/form-control'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
const [date, setDate] = React.useState(new Date());

  return (
    <Box className="p-4 w-full">
      <DateTimePicker
        value={date}
        onChange={setDate}
        mode="datetime"
        placeholder="Select date and time"
      >
        <DateTimePickerTrigger>
          <DateTimePickerInput />
          <DateTimePickerIcon as={CalendarDaysIcon} />
        </DateTimePickerTrigger>
      </DateTimePicker>
    </Box>
  )
};

const ExampleDifferentModes = () => {
const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const [dateTime, setDateTime] = React.useState(new Date());

  return (
    <VStack space="lg" className="w-full">
      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Date Only</Text>
        <DateTimePicker
          value={date}
          onChange={setDate}
          mode="date"
          placeholder="Select a date"
        >
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Box>

      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Time Only (12-hour)</Text>
        <DateTimePicker
          value={time}
          onChange={setTime}
          mode="time"
          placeholder="Select time"
        >
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={ClockIcon} />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Box>

      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Date & Time</Text>
        <DateTimePicker
          value={dateTime}
          onChange={setDateTime}
          mode="datetime"
          placeholder="Select date and time"
        >
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Box>
    </VStack>
  )
};

const ExampleVariantsSizes = () => {
const [date, setDate] = React.useState(new Date());

  return (
    <VStack space="lg" className="w-full">
      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Outline Variant (Default)</Text>
        <DateTimePicker
          value={date}
          onChange={setDate}
          mode="date"
          placeholder="Select date"
        >
          <DateTimePickerTrigger variant="outline">
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Box>

      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Underlined Variant</Text>
        <DateTimePicker
          value={date}
          onChange={setDate}
          mode="date"
          placeholder="Select date"
        >
          <DateTimePickerTrigger variant="underlined">
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Box>

      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Rounded Variant</Text>
        <DateTimePicker
          value={date}
          onChange={setDate}
          mode="date"
          placeholder="Select date"
        >
          <DateTimePickerTrigger variant="rounded">
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Box>

      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Different Sizes</Text>
        <VStack space="md">
          <DateTimePicker
            value={date}
            onChange={setDate}
            mode="date"
          >
            <DateTimePickerTrigger size="sm" variant="outline">
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} size="sm" />
            </DateTimePickerTrigger>
          </DateTimePicker>

          <DateTimePicker
            value={date}
            onChange={setDate}
            mode="date"
          >
            <DateTimePickerTrigger size="md" variant="outline">
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} size="md" />
            </DateTimePickerTrigger>
          </DateTimePicker>

          <DateTimePicker
            value={date}
            onChange={setDate}
            mode="date"
          >
            <DateTimePickerTrigger size="lg" variant="outline">
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} size="lg" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </VStack>
      </Box>
    </VStack>
  )
};

const ExampleWithFormControl = () => {
const [date, setDate] = React.useState(null);
  const [isInvalid, setIsInvalid] = React.useState(false);

  // Validate that date is not in the past
  React.useEffect(() => {
    if (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      setIsInvalid(date < today);
    }
  }, [date]);

  return (
    <FormControl isInvalid={isInvalid} className="w-full">
      <FormControlLabel>
        <FormControlLabelText>Event Date</FormControlLabelText>
      </FormControlLabel>
      <DateTimePicker
        value={date}
        onChange={setDate}
        mode="date"
        placeholder="Select event date"
      >
        <DateTimePickerTrigger isInvalid={isInvalid}>
          <DateTimePickerInput />
          <DateTimePickerIcon as={CalendarDaysIcon} />
        </DateTimePickerTrigger>
      </DateTimePicker>
      <FormControlHelper>
        <FormControlHelperText>
          Choose a future date for your event
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Event date cannot be in the past
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "different-modes",
    label: "Different Modes",
    content: <ExampleDifferentModes />,
  },
  {
    value: "variants-sizes",
    label: "Variants & Sizes",
    content: <ExampleVariantsSizes />,
  },
  {
    value: "with-form-control",
    label: "With Form Control",
    content: <ExampleWithFormControl />,
  }
];

export default function DateTimePickerScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}