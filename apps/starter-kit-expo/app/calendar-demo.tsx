import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Calendar } from '@/components/ui/calendar';

export default function CalendarDemo() {
  // Single mode state
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());

  // Multiple mode state
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);

  // Range mode state
  const [dateRange, setDateRange] = useState<
    { start: Date; end: Date } | undefined
  >({
    start: new Date(),
    end: new Date(),
  });

  return (
    <ScrollView className="flex-1 bg-background mt-safe p-4">
      {/* Simple API - Single Selection */}
      <Text className="text-lg font-bold mb-2">Simple API - Single Select</Text>
      <Calendar mode="single" value={singleDate} onChange={setSingleDate} />
      <Text className="text-sm text-muted-foreground mt-1 mb-6">
        Selected: {singleDate ? singleDate.toDateString() : 'None'}
      </Text>

      {/* Simple API - Multiple Selection */}
      <Text className="text-lg font-bold mb-2">
        Simple API - Multiple Select
      </Text>
      <Calendar
        mode="multiple"
        values={multipleDates}
        onValuesChange={setMultipleDates}
      />
      <Text className="text-sm text-muted-foreground mt-1 mb-6">
        Selected:{' '}
        {multipleDates.length > 0
          ? multipleDates.map((d) => d.toDateString()).join(', ')
          : 'None'}
      </Text>

      {/* Simple API - Range Selection */}
      <Text className="text-lg font-bold mb-2">Simple API - Range Select</Text>
      <Calendar
        mode="range"
        rangeValue={dateRange}
        onRangeChange={setDateRange}
      />
      <Text className="text-sm text-muted-foreground mt-1 mb-6">
        Range:{' '}
        {dateRange
          ? `${dateRange.start.toDateString()} - ${dateRange.end.toDateString()}`
          : 'None'}
      </Text>

      {/* Simple API - With min/max dates */}
      <Text className="text-lg font-bold mb-2">
        Simple API - With Min/Max Dates
      </Text>
      <Calendar
        mode="single"
        value={singleDate}
        onChange={setSingleDate}
        minDate={new Date()}
        maxDate={new Date(2025, 11, 31)}
      />
      <Text className="text-sm text-muted-foreground mt-1 mb-6">
        Min: Today, Max: Dec 31, 2025
      </Text>

      {/* Compound API - Single with Custom Header */}
      <Text className="text-lg font-bold mb-2">
        Compound API - Custom Header
      </Text>
      <Calendar mode="single" value={singleDate} onChange={setSingleDate}>
        <Calendar.Header className="bg-primary px-4 py-3">
          <Calendar.HeaderPrev className="text-white border-white" />
          <Calendar.HeaderTitle className="text-white font-bold" />
          <Calendar.HeaderNext className="text-white border-white" />
        </Calendar.Header>
        <Calendar.Content className="p-3">
          <Calendar.Week format="short" />
          <Calendar.Days />
        </Calendar.Content>
      </Calendar>
      <Text className="text-sm text-muted-foreground mt-1 mb-6">
        Selected: {singleDate ? singleDate.toDateString() : 'None'}
      </Text>

      {/* Compound API - Range with Custom Day Rendering */}
      <Text className="text-lg font-bold mb-2">
        Compound API - Custom Day Rendering
      </Text>
      <Calendar
        mode="range"
        rangeValue={dateRange}
        onRangeChange={setDateRange}
      >
        <Calendar.Header>
          <Calendar.HeaderPrev />
          <Calendar.HeaderTitle />
          <Calendar.HeaderNext />
        </Calendar.Header>
        <Calendar.Content>
          <Calendar.Week />
          <Calendar.Days
            render={({
              day,
              isSelected,
              isRangeStart,
              isRangeEnd,
              isRangeMiddle,
              isToday,
              isDisabled,
            }: {
              day: Date | null;
              isSelected: boolean;
              isRangeStart: boolean;
              isRangeEnd: boolean;
              isRangeMiddle: boolean;
              isToday: boolean;
              isDisabled: boolean;
            }) => {
              if (!day)
                return <View className="m-0.5 aspect-square basis-[12.6%]" />;

              let bgClass = 'bg-transparent';
              if (
                isRangeStart ||
                isRangeEnd ||
                (isSelected && !isRangeMiddle)
              ) {
                bgClass = 'bg-primary';
              } else if (isRangeMiddle) {
                bgClass = 'bg-primary/20';
              } else if (isToday) {
                bgClass = 'bg-accent';
              }

              const textClass =
                isSelected || isRangeStart || isRangeEnd
                  ? 'text-white'
                  : isDisabled
                    ? 'text-muted-foreground opacity-50'
                    : 'text-foreground';

              return (
                <Calendar.Date day={day}>
                  <View
                    className={`m-0.5 flex items-center justify-center aspect-square basis-[12.6%] rounded-lg ${bgClass}`}
                  >
                    <Text className={textClass}>{day.getDate()}</Text>
                  </View>
                </Calendar.Date>
              );
            }}
          />
        </Calendar.Content>
      </Calendar>
      <Text className="text-sm text-muted-foreground mt-1 mb-6">
        Range:{' '}
        {dateRange
          ? `${dateRange.start.toDateString()} - ${dateRange.end.toDateString()}`
          : 'None'}
      </Text>

      <View className="h-10" />
    </ScrollView>
  );
}
