'use client';
import {
  Calendar,
  CalendarHeader,
  CalendarHeaderPrevButton,
  CalendarHeaderNextButton,
  CalendarHeaderTitle,
  CalendarWeekDaysHeader,
  CalendarBody,
  CalendarGrid,
  CalendarDay,
  CalendarDayText,
  CalendarDayIndicator,
} from '@/components/ui/calendar';
import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import {
  Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
} from '@/components/ui/icon';

export default function Example() {
  const [selected, setSelected] = React.useState(new Date());

  const today = new Date();
  const year = today.getFullYear();
  const monthNum = today.getMonth() + 1;
  const month = monthNum < 10 ? '0' + monthNum : monthNum;

  // Create markers for the current month with shadcn-style colors
  const markers: Record<string, any> = {};
  markers[year + '-' + month + '-05'] = {
    type: 'dot',
    color: '#FF0000',
  };
  markers[year + '-' + month + '-12'] = {
    type: 'multi-dot',
    dots: [
      { color: '#FF0000', key: '1' },
      { color: '#FF0000', key: '2' },
    ],
  };
  markers[year + '-' + month + '-20'] = {
    type: 'period',
    color: '#FF0000',
  };
  markers[year + '-' + month + '-25'] = {
    type: 'dot',
    color: '#FF0000',
  };

  return (
    <VStack space="md">
      <Calendar
        mode="single"
        value={selected}
        onValueChange={setSelected}
        markers={markers}
      >
        <CalendarHeader>
          <CalendarHeaderPrevButton>
            <Icon as={ChevronLeftIcon} size="sm" />
          </CalendarHeaderPrevButton>
          <CalendarHeaderTitle />
          <CalendarHeaderNextButton>
            <Icon as={ChevronRightIcon} size="sm" />
          </CalendarHeaderNextButton>
        </CalendarHeader>

        <CalendarWeekDaysHeader />

        <CalendarBody>
          <CalendarGrid />
        </CalendarBody>
      </Calendar>

      <HStack space="sm" className="mt-4 flex-wrap">
        <HStack space="xs" className="items-center">
          <Box className="w-2 h-2 rounded-full bg-primary" />
          <Text className="text-xs text-muted-foreground">Meeting</Text>
        </HStack>
        <HStack space="xs" className="items-center">
          <Box className="w-2 h-2 rounded-full bg-destructive" />
          <Text className="text-xs text-muted-foreground">Reminder</Text>
        </HStack>
        <HStack space="xs" className="items-center">
          <Box className="w-2 h-2 rounded-full bg-secondary" />
          <Text className="text-xs text-muted-foreground">Event</Text>
        </HStack>
        <HStack space="xs" className="items-center">
          <Box className="w-2 h-2 rounded-full bg-accent" />
          <Text className="text-xs text-muted-foreground">Deadline</Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
