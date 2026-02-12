import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  Calendar,
  CalendarHeader,
  CalendarHeaderPrevButton,
  CalendarHeaderNextButton,
  CalendarHeaderTitle,
  CalendarWeekDaysHeader,
  CalendarBody,
  CalendarGrid,
  CalendarWeek,
  CalendarDay,
  CalendarDayText,
  CalendarDayIndicator,
} from '@/components/ui/calendar';
import { Icon, ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icon';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';

export default function CalendarDemo() {
  const [singleDate, setSingleDate] = useState<Date>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([new Date()]);
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
    from: new Date(),
    to: undefined,
  });

  // Type-safe handlers
  const handleSingleChange = (value: Date | Date[] | { from: Date; to?: Date }) => {
    if (value instanceof Date) {
      setSingleDate(value);
    }
  };

  const handleMultipleChange = (value: Date | Date[] | { from: Date; to?: Date }) => {
    if (Array.isArray(value)) {
      setMultipleDates(value);
    }
  };

  const handleRangeChange = (value: Date | Date[] | { from: Date; to?: Date }) => {
    if (value && typeof value === 'object' && 'from' in value) {
      setDateRange(value as { from: Date; to?: Date });
    }
  };

  // Demo markers
  const markers = {
    [new Date(2024, 11, 25).toISOString().split('T')[0]]: {
      type: 'dot' as const,
      color: '#ef4444',
    },
    [new Date(2024, 11, 31).toISOString().split('T')[0]]: {
      type: 'multi-dot' as const,
      dots: [
        { color: '#3b82f6', key: 'event1' },
        { color: '#10b981', key: 'event2' },
      ],
    },
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6 gap-8">
        <VStack space="md">
          <Heading size="2xl">Calendar Component Demo</Heading>
          <Text className="text-typography-500">
            Interactive calendar with single, multiple, and range selection modes
          </Text>
        </VStack>

        {/* Single Selection */}
        <VStack space="md">
          <Heading size="lg">Single Selection</Heading>
          <Text className="text-typography-500 text-sm">
            Selected: {singleDate.toDateString()}
          </Text>

          <Calendar mode="single" value={singleDate} onValueChange={handleSingleChange}>
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="text-typography-900" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="text-typography-900" />
              </CalendarHeaderNextButton>
            </CalendarHeader>

            <CalendarWeekDaysHeader />

            <CalendarBody>
              <CalendarGrid>
                {/* Grid will be auto-rendered by the component */}
              </CalendarGrid>
            </CalendarBody>
          </Calendar>
        </VStack>

        {/* Multiple Selection */}
        <VStack space="md">
          <Heading size="lg">Multiple Selection</Heading>
          <Text className="text-typography-500 text-sm">
            Selected {multipleDates.length} date(s)
          </Text>

          <Calendar
            mode="multiple"
            value={multipleDates}
            onValueChange={handleMultipleChange}
          >
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="text-typography-900" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="text-typography-900" />
              </CalendarHeaderNextButton>
            </CalendarHeader>

            <CalendarWeekDaysHeader />

            <CalendarBody>
              <CalendarGrid />
            </CalendarBody>
          </Calendar>
        </VStack>

        {/* Range Selection */}
        <VStack space="md">
          <Heading size="lg">Range Selection</Heading>
          <Text className="text-typography-500 text-sm">
            From: {dateRange.from.toDateString()}
            {dateRange.to && ` → To: ${dateRange.to.toDateString()}`}
          </Text>

          <Calendar mode="range" value={dateRange} onValueChange={handleRangeChange}>
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="text-typography-900" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="text-typography-900" />
              </CalendarHeaderNextButton>
            </CalendarHeader>

            <CalendarWeekDaysHeader />

            <CalendarBody>
              <CalendarGrid />
            </CalendarBody>
          </Calendar>
        </VStack>

        {/* With Markers */}
        <VStack space="md">
          <Heading size="lg">With Event Markers</Heading>
          <Text className="text-typography-500 text-sm">
            Calendar with event indicators
          </Text>

          <Calendar
            mode="single"
            value={singleDate}
            onValueChange={handleSingleChange}
            markers={markers}
          >
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="text-typography-900" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="text-typography-900" />
              </CalendarHeaderNextButton>
            </CalendarHeader>

            <CalendarWeekDaysHeader />

            <CalendarBody>
              <CalendarGrid />
            </CalendarBody>
          </Calendar>
        </VStack>

        {/* With Min/Max Dates */}
        <VStack space="md">
          <Heading size="lg">With Min/Max Constraints</Heading>
          <Text className="text-typography-500 text-sm">
            Only next 30 days are selectable
          </Text>

          <Calendar
            mode="single"
            value={singleDate}
            onValueChange={handleSingleChange}
            minDate={new Date()}
            maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
          >
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="text-typography-900" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="text-typography-900" />
              </CalendarHeaderNextButton>
            </CalendarHeader>

            <CalendarWeekDaysHeader />

            <CalendarBody>
              <CalendarGrid />
            </CalendarBody>
          </Calendar>
        </VStack>

        {/* With Week Numbers */}
        <VStack space="md">
          <Heading size="lg">With Week Numbers</Heading>

          <Calendar
            mode="single"
            value={singleDate}
            onValueChange={handleSingleChange}
            showWeekNumbers={true}
          >
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="text-typography-900" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="text-typography-900" />
              </CalendarHeaderNextButton>
            </CalendarHeader>

            <CalendarWeekDaysHeader />

            <CalendarBody>
              <CalendarGrid />
            </CalendarBody>
          </Calendar>
        </VStack>

        {/* Action Buttons */}
        <HStack space="md" className="mt-4">
          <Button onPress={() => setSingleDate(new Date())} className="flex-1">
            <ButtonText>Reset to Today</ButtonText>
          </Button>
          <Button
            onPress={() => setMultipleDates([])}
            variant="outline"
            className="flex-1"
          >
            <ButtonText>Clear Multiple</ButtonText>
          </Button>
        </HStack>
      </View>
    </ScrollView>
  );
}
