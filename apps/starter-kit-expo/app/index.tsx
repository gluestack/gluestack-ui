import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Calendar } from '@/components/ui/calendar';

export default function DateTimePickerDemo() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [dateRange, setDateRange] = useState<
    { start: Date; end: Date } | undefined
  >({
    start: new Date(),
    end: new Date(),
  });

  return (
    <ScrollView className="flex-1 bg-background mt-safe p-4">
      <Text className="text-lg font-bold mb-2">Single Select</Text>
      <Calendar mode="single" value={singleDate} onChange={setSingleDate} />
      <Text className="text-sm text-muted-foreground mt-1">
        Selected: {singleDate ? singleDate.toDateString() : 'None'}
      </Text>

      <Text className="text-lg font-bold mt-6 mb-2">Multiple Select</Text>
      <Calendar
        mode="multiple"
        values={multipleDates}
        onValuesChange={setMultipleDates}
      />
      <Text className="text-sm text-muted-foreground mt-1">
        Selected:{' '}
        {multipleDates.length > 0
          ? multipleDates.map((d) => d.toDateString()).join(', ')
          : 'None'}
      </Text>

      <Text className="text-lg font-bold mt-6 mb-2">Range Select</Text>
      <Calendar
        mode="range"
        rangeValue={dateRange}
        onRangeChange={setDateRange}
      />
      <Text className="text-sm text-muted-foreground mt-1">
        Range:{' '}
        {dateRange
          ? `${dateRange.start.toDateString()} - ${dateRange.end.toDateString()}`
          : 'None'}
      </Text>

      <View className="h-10" />
    </ScrollView>
  );
}
