import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  DateTimePicker,
  DateTimePickerTrigger,
  DateTimePickerInput,
  DateTimePickerIcon,
} from '@/components/ui/date-time-picker';
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
        </VStack>
      </Box>
    </ScrollView>
  );
}
