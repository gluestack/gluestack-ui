import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  DateTimePicker,
  DateTimePickerTrigger,
  DateTimePickerInput,
  DateTimePickerIcon,
} from '@/components/ui/date-time-picker';
import { Calendar } from '@/components/ui/calendar';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { CalendarDays, Clock } from 'lucide-react-native';

export default function DateTimePickerDemo() {
  const [dateTime, setDateTime] = useState<Date | undefined>(new Date());
  const [dateOnly, setDateOnly] = useState<Date | undefined>(undefined);
  const [timeOnly, setTimeOnly] = useState<Date | undefined>(undefined);
  const [formattedDate, setFormattedDate] = useState<Date | undefined>(
    new Date()
  );
  const [minMaxDate, setMinMaxDate] = useState<Date | undefined>(new Date());

  // Calendar states
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [rangeDates, setRangeDates] = useState<
    { from: Date; to: Date } | undefined
  >(undefined);
  const [markedDate, setMarkedDate] = useState<Date | undefined>(new Date());

  // Calendar handlers with proper type casting
  const handleSingleSelect = (
    date: Date | Date[] | { from: Date; to: Date }
  ) => {
    if (date instanceof Date) {
      setSingleDate(date);
    }
  };

  const handleMultipleSelect = (
    date: Date | Date[] | { from: Date; to: Date }
  ) => {
    if (Array.isArray(date)) {
      setMultipleDates(date);
    }
  };

  const handleRangeSelect = (
    date: Date | Date[] | { from: Date; to: Date }
  ) => {
    if (date && typeof date === 'object' && 'from' in date) {
      setRangeDates(date);
    }
  };

  const handleMarkedSelect = (
    date: Date | Date[] | { from: Date; to: Date }
  ) => {
    if (date instanceof Date) {
      setMarkedDate(date);
    }
  };

  // Set min/max dates for the last example
  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );

  return (
    <ScrollView className="flex-1 bg-background">
      <Box className="p-6">
        <VStack space="xl">
          {/* Header */}
          <Box>
            <Text className="text-2xl font-bold text-foreground mb-2">
              DateTimePicker Demo
            </Text>
            <Text className="text-foreground/60">
              Cross-platform date and time picker component
            </Text>
          </Box>

          {/* Date & Time Combined */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Date & Time
            </Text>

            {dateTime && (
              <Text className="text-sm text-muted-foreground mt-2">
                Selected: {dateTime.toLocaleString()}
              </Text>
            )}
          </Box>

          {/* Date Only */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Date Only
            </Text>
            <DateTimePicker
              value={dateOnly}
              onChange={setDateOnly}
              mode="date"
              placeholder="Select a date"
            >
              <DateTimePickerTrigger size="md" variant="outline">
                <DateTimePickerInput />
                <DateTimePickerIcon as={CalendarDays} className="mr-3" />
              </DateTimePickerTrigger>
            </DateTimePicker>
            {dateOnly && (
              <Text className="text-sm text-muted-foreground mt-2">
                Selected: {dateOnly.toLocaleDateString()}
              </Text>
            )}
          </Box>

          {/* Time Only */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Time Only
            </Text>
            <DateTimePicker
              value={timeOnly}
              onChange={setTimeOnly}
              mode="time"
              is24Hour={false}
              placeholder="Select time"
            >
              <DateTimePickerTrigger size="md" variant="outline">
                <DateTimePickerInput />
                <DateTimePickerIcon as={Clock} className="mr-3" />
              </DateTimePickerTrigger>
            </DateTimePicker>
            {timeOnly && (
              <Text className="text-sm text-muted-foreground mt-2">
                Selected: {timeOnly.toLocaleTimeString()}
              </Text>
            )}
          </Box>

          {/* Custom Format */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Custom Format (YYYY-MM-DD HH:mm)
            </Text>
            <DateTimePicker
              value={formattedDate}
              onChange={setFormattedDate}
              mode="datetime"
              format="YYYY-MM-DD HH:mm"
              placeholder="Select date and time"
            >
              <DateTimePickerTrigger size="md" variant="rounded">
                <DateTimePickerInput />
                <DateTimePickerIcon as={CalendarDays} className="mr-3" />
              </DateTimePickerTrigger>
            </DateTimePicker>
          </Box>

          {/* With Min/Max Dates */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Min/Max Date Restriction (±7 days)
            </Text>
            <DateTimePicker
              value={minMaxDate}
              onChange={setMinMaxDate}
              mode="date"
              minimumDate={minDate}
              maximumDate={maxDate}
              placeholder="Select date within range"
            >
              <DateTimePickerTrigger size="md" variant="underlined">
                <DateTimePickerInput />
                <DateTimePickerIcon as={CalendarDays} className="mr-3" />
              </DateTimePickerTrigger>
            </DateTimePicker>
            <Text className="text-xs text-muted-foreground mt-2">
              Min: {minDate.toLocaleDateString()} | Max:{' '}
              {maxDate.toLocaleDateString()}
            </Text>
          </Box>

          {/* Different Sizes */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Different Sizes
            </Text>
            <VStack space="md">
              <DateTimePicker
                value={new Date()}
                onChange={() => {}}
                mode="date"
              >
                <DateTimePickerTrigger size="sm" variant="outline">
                  <DateTimePickerInput />
                  <DateTimePickerIcon
                    as={CalendarDays}
                    size="sm"
                    className="mr-3"
                  />
                </DateTimePickerTrigger>
              </DateTimePicker>

              <DateTimePicker
                value={new Date()}
                onChange={() => {}}
                mode="date"
              >
                <DateTimePickerTrigger size="md" variant="outline">
                  <DateTimePickerInput />
                  <DateTimePickerIcon as={CalendarDays} className="mr-3" />
                </DateTimePickerTrigger>
              </DateTimePicker>

              <DateTimePicker
                value={new Date()}
                onChange={() => {}}
                mode="date"
              >
                <DateTimePickerTrigger size="lg" variant="outline">
                  <DateTimePickerInput />
                  <DateTimePickerIcon
                    as={CalendarDays}
                    size="lg"
                    className="mr-3"
                  />
                </DateTimePickerTrigger>
              </DateTimePicker>
            </VStack>
          </Box>

          {/* Calendar Section Header */}
          <Box className="mt-8">
            <Text className="text-2xl font-bold text-foreground mb-2">
              Calendar Demo
            </Text>
            <Text className="text-foreground/60">
              Inline calendar component with multiple selection modes
            </Text>
          </Box>

          {/* Calendar - Single Date Selection */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Single Date Selection
            </Text>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={handleSingleSelect}
              markedDates={{
                [new Date().toISOString().split('T')[0]]: {
                  marked: true,
                  dotColor: '#00adf5',
                },
              }}
              markingType="dot"
              enableSwipeMonths
              theme={{
                selectedDayBackgroundColor: '#00adf5',
                todayTextColor: '#00adf5',
                arrowColor: '#00adf5',
              }}
            />
            {singleDate && (
              <Text className="text-sm text-muted-foreground mt-4">
                Selected: {singleDate.toLocaleDateString()}
              </Text>
            )}
          </Box>

          {/* Calendar - Multiple Date Selection */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Multiple Date Selection
            </Text>
            <Calendar
              mode="multiple"
              selected={multipleDates}
              onSelect={handleMultipleSelect}
              enableSwipeMonths
              theme={{
                selectedDayBackgroundColor: '#10b981',
                todayTextColor: '#10b981',
                arrowColor: '#10b981',
              }}
            />
            {multipleDates.length > 0 && (
              <Text className="text-sm text-muted-foreground mt-4">
                Selected {multipleDates.length} dates
              </Text>
            )}
          </Box>

          {/* Calendar - Range Selection */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Range Selection
            </Text>
            <Calendar
              mode="range"
              selected={rangeDates}
              onSelect={handleRangeSelect}
              markingType="period"
              enableSwipeMonths
              theme={{
                selectedDayBackgroundColor: '#8b5cf6',
                todayTextColor: '#8b5cf6',
                arrowColor: '#8b5cf6',
              }}
            />
            {rangeDates && (
              <Text className="text-sm text-muted-foreground mt-4">
                From: {rangeDates.from.toLocaleDateString()} To:{' '}
                {rangeDates.to.toLocaleDateString()}
              </Text>
            )}
          </Box>

          {/* Calendar - With Marked Dates */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              With Marked Events
            </Text>
            <Calendar
              mode="single"
              selected={markedDate}
              onSelect={handleMarkedSelect}
              markedDates={{
                [new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split('T')[0]]: { marked: true, dotColor: '#ef4444' },
                [new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split('T')[0]]: { marked: true, dotColor: '#22c55e' },
                [new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split('T')[0]]: { marked: true, dotColor: '#f59e0b' },
              }}
              markingType="multi-dot"
              enableSwipeMonths
              showWeekNumbers
              firstDayOfWeek={1}
              theme={{
                selectedDayBackgroundColor: '#ec4899',
                todayTextColor: '#ec4899',
                arrowColor: '#ec4899',
              }}
            />
            <Text className="text-xs text-muted-foreground mt-4">
              Shows dots for events. Red = past, Green = future, Orange =
              upcoming
            </Text>
          </Box>

          {/* Calendar - Min/Max Date Constraints */}
          <Box className="bg-card p-4 rounded-lg border border-border">
            <Text className="text-lg font-semibold text-foreground mb-4">
              Min/Max Date Constraints
            </Text>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={handleSingleSelect}
              minDate={minDate}
              maxDate={maxDate}
              enableSwipeMonths
              theme={{
                selectedDayBackgroundColor: '#f97316',
                todayTextColor: '#f97316',
                arrowColor: '#f97316',
                textDisabledColor: '#d1d5db',
              }}
            />
            <Text className="text-xs text-muted-foreground mt-4">
              Can only select dates within ±7 days from today
            </Text>
          </Box>

          {/* Platform Info */}
          <Box className="bg-muted p-4 rounded-lg">
            <Text className="text-sm font-medium text-foreground mb-1">
              Platform Information
            </Text>
            <Text className="text-xs text-muted-foreground">
              This component uses native pickers on iOS and Android (via
              @react-native-community/datetimepicker), and a custom
              implementation on web. Works in Expo Go without any native builds
              required!
            </Text>
          </Box>
          <DateTimePicker
            value={dateTime}
            onChange={setDateTime}
            mode="datetime"
            placeholder="Select date and time"
          >
            <DateTimePickerTrigger size="md" variant="outline">
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDays} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </VStack>
      </Box>
    </ScrollView>
  );
}
