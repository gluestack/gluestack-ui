import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import {
  DateTimePicker,
  DateTimePickerCalendarGrid,
  DateTimePickerCalendar,
  DateTimePickerBackdrop,
  DateTimePickerContent,
  DateTimePickerIcon,
  DateTimePickerInput,
  DateTimePickerPortal,
  DateTimePickerTrigger,
  DateTimePickerCalendarHeader,
  DateTimePickerActionBar,
  DateTimePickerActionButton,
  DateTimePickerModeToggle,
  DateTimePickerTimePicker,
} from '@/components/ui/datetimepicker';
import { CalendarDaysIcon } from 'lucide-react-native';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { View } from 'react-native';

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    ScreenOrientation.unlockAsync();
  }, []);

  return (
    <Center className="flex-1 p-4">
      <VStack className="gap-6 w-full max-w-md">
        <Text className="text-2xl font-bold">DateTimePicker Test</Text>

        {/* Display selected value */}
        <View className="bg-muted p-4 rounded-lg">
          <Text className="text-sm text-muted-foreground mb-1">Selected:</Text>
          <Text className="text-base font-medium">
            {selectedDate ? selectedDate.toLocaleString() : 'None'}
          </Text>
        </View>

        {/* Date picker */}
        <VStack className="gap-2">
          <Text className="text-sm font-semibold">Date Only</Text>
          <DateTimePicker
            mode="date"
            value={selectedDate}
            onValueChange={(newDate: Date | [Date, Date] | null) => {
              console.log('Date changed:', newDate);
              setSelectedDate(newDate as Date | null);
            }}
          >
            <DateTimePickerTrigger variant="outline" size="md">
              <DateTimePickerInput placeholder="Select date" />
              <DateTimePickerIcon>
                <CalendarDaysIcon size={18} />
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
        </VStack>

        {/* DateTime picker */}
        <VStack className="gap-2">
          <Text className="text-sm font-semibold">Date & Time</Text>
          <DateTimePicker
            mode="datetime"
            value={selectedDate}
            onValueChange={(newDate: Date | [Date, Date] | null) => {
              console.log('DateTime changed:', newDate);
              setSelectedDate(newDate as Date | null);
            }}
          >
            <DateTimePickerTrigger variant="outline" size="md">
              <DateTimePickerInput placeholder="Select date & time" />
              <DateTimePickerIcon>
                <CalendarDaysIcon size={18} />
              </DateTimePickerIcon>
            </DateTimePickerTrigger>
            <DateTimePickerPortal>
              <DateTimePickerBackdrop />
              <DateTimePickerContent>
                <DateTimePickerModeToggle />
                <DateTimePickerCalendar>
                  <DateTimePickerCalendarHeader />
                  <DateTimePickerCalendarGrid />
                </DateTimePickerCalendar>
                <DateTimePickerTimePicker />
                <DateTimePickerActionBar>
                  <DateTimePickerActionButton action="today" />
                  <DateTimePickerActionButton action="cancel" />
                  <DateTimePickerActionButton action="confirm" />
                </DateTimePickerActionBar>
              </DateTimePickerContent>
            </DateTimePickerPortal>
          </DateTimePicker>
        </VStack>

        <View className="mt-4 p-4 bg-info/10 rounded-lg">
          <Text className="text-xs text-muted-foreground">
            💡 Tip: Click on the month/year to switch between calendar, month, and year views!
          </Text>
        </View>
      </VStack>
    </Center>
  );
}
