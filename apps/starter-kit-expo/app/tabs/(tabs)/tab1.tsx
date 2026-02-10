import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Calendar } from '@/components/ui/calendar';

export default function DateTimePickerDemo() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [dateRange, setDateRange] = useState<
    { from: Date; to: Date } | undefined
  >({
    from: new Date(),
    to: new Date(),
  });

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-lg font-bold mb-2">Single Select</Text>
      <Calendar
        mode="single"
        selected={singleDate}
        onSelect={setSingleDate}
        className="w-full"
      />
      <Text className="text-sm text-muted-foreground mt-1">
        Selected: {singleDate ? singleDate.toDateString() : 'None'}
      </Text>

      <Text className="text-lg font-bold mt-6 mb-2">Multiple Select</Text>
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="w-full"
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
        selected={dateRange}
        onSelect={setDateRange}
        className="w-full"
      />
      <Text className="text-sm text-muted-foreground mt-1">
        Range:{' '}
        {dateRange
          ? `${dateRange.from.toDateString()} - ${dateRange.to.toDateString()}`
          : 'None'}
      </Text>

      <View className="h-10" />
    </ScrollView>
  );
}
