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
import { useCalendarTheme } from '@/components/ui/gluestack-ui-provider/useGluestackColors';
import { useGluestackColors } from '@/components/ui/gluestack-ui-provider/useGluestackColors';
export default function DateTimePickerDemo() {
  const calendarTheme = useCalendarTheme();
  const colors = useGluestackColors();
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
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={handleMultipleSelect}
        enableSwipeMonths
      />
    </ScrollView>
  );
}
