import { Calendar, CalendarHeader, CalendarHeaderPrevButton, CalendarHeaderNextButton, CalendarHeaderTitle, CalendarWeekDaysHeader, CalendarBody, CalendarGrid, CalendarWeek, CalendarDay, CalendarDayText, CalendarDayIndicator, CalendarHeaderMonthSelect, CalendarHeaderYearSelect, CalendarWeekNumber } from '@/components/ui/calendar'
import { Icon, ChevronLeftIcon, ChevronRightIcon, CircleIcon } from '@/components/ui/icon'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { HStack } from '@/components/ui/hstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasicCalendar = () => {
const [selected, setSelected] = React.useState(new Date());

  return (
    <Calendar mode="single" value={selected} onValueChange={setSelected}>
      <CalendarHeader>
        <CalendarHeaderPrevButton>
          <Icon as={ChevronLeftIcon} />
        </CalendarHeaderPrevButton>
        <CalendarHeaderTitle />
        <CalendarHeaderNextButton>
          <Icon as={ChevronRightIcon} />
        </CalendarHeaderNextButton>
      </CalendarHeader>

      <CalendarWeekDaysHeader />

      <CalendarBody>
        <CalendarGrid>
          {/* Calendar will auto-render the grid */}
        </CalendarGrid>
      </CalendarBody>
    </Calendar>
  )
};

const ExampleSelectionModes = () => {
const [singleDate, setSingleDate] = React.useState(new Date());
  const [multipleDates, setMultipleDates] = React.useState([new Date()]);
  const [dateRange, setDateRange] = React.useState({ from: new Date(), to: null });

  const renderCalendar = (mode, value, onChange, title) => (
    <Box className="p-4 border border-border rounded-lg bg-card">
      <Text className="text-sm font-semibold mb-3 text-card-foreground">{title}</Text>
      <Calendar
        mode={mode}
        value={value}
        onValueChange={onChange}
        className="w-full"
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
    </Box>
  );

  return (
    <VStack space="lg" className="w-full">
      {renderCalendar("single", singleDate, setSingleDate, "Single Date Selection")}
      {renderCalendar("multiple", multipleDates, setMultipleDates, "Multiple Dates Selection")}
      {renderCalendar("range", dateRange, setDateRange, "Date Range Selection")}
    </VStack>
  )
};

const ExampleMonthYearPicker = () => {
const [selected, setSelected] = React.useState(new Date());

  return (
    <Calendar
      mode="single"
      value={selected}
      onValueChange={setSelected}
      enableMonthYearPicker={true}
      minYear={2020}
      maxYear={2030}
    >
      <CalendarHeader>
        <CalendarHeaderPrevButton>
          <Icon as={ChevronLeftIcon} size="sm" />
        </CalendarHeaderPrevButton>
        <CalendarHeaderMonthSelect />
        <CalendarHeaderYearSelect />
        <CalendarHeaderNextButton>
          <Icon as={ChevronRightIcon} size="sm" />
        </CalendarHeaderNextButton>
      </CalendarHeader>

      <CalendarWeekDaysHeader />

      <CalendarBody>
        <CalendarGrid />
      </CalendarBody>
    </Calendar>
  )
};

const ExampleWithEventMarkers = () => {
const [selected, setSelected] = React.useState(new Date());
  
  const today = new Date();
  const year = today.getFullYear();
  const monthNum = today.getMonth() + 1;
  const month = monthNum < 10 ? '0' + monthNum : monthNum;
  
  // Create markers for the current month with shadcn-style colors
  const markers = {};
  markers[year + '-' + month + '-05'] = { 
    type: 'dot', 
    color: 'hsl(var(--primary))' 
  };
  markers[year + '-' + month + '-12'] = { 
    type: 'multi-dot', 
    dots: [
      { color: 'hsl(var(--primary))', key: '1' },
      { color: 'hsl(var(--destructive))', key: '2' }
    ]
  };
  markers[year + '-' + month + '-20'] = { 
    type: 'period', 
    color: 'hsl(var(--secondary))' 
  };
  markers[year + '-' + month + '-25'] = { 
    type: 'dot', 
    color: 'hsl(var(--accent))' 
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
  )
};

const ExampleWithDisabledDates = () => {
const [selected, setSelected] = React.useState(new Date());
  
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
  
  // Disable weekends
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  return (
    <VStack space="lg" className="w-full">
      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Min/Max Date Constraints</Text>
        <Calendar
          mode="single"
          value={selected}
          onValueChange={setSelected}
          minDate={today}
          maxDate={twoWeeksLater}
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
        <Text className="text-xs text-muted-foreground mt-2">
          Only dates between today and two weeks later are selectable
        </Text>
      </Box>

      <Box className="p-4 border border-border rounded-lg bg-card">
        <Text className="text-sm font-semibold mb-3 text-card-foreground">Disabled Weekends</Text>
        <Calendar
          mode="single"
          value={selected}
          onValueChange={setSelected}
          disabledDates={isWeekend}
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
        <Text className="text-xs text-muted-foreground mt-2">
          Saturdays and Sundays are disabled
        </Text>
      </Box>
    </VStack>
  )
};

const ExampleWithWeekNumbers = () => {
const [selected, setSelected] = React.useState(new Date());

  return (
    <Calendar
      mode="single"
      value={selected}
      onValueChange={setSelected}
      showWeekNumbers={true}
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
  )
};

const ExampleCustomizedStyling = () => {
const [selected, setSelected] = React.useState(new Date());

  return (
    <VStack space="lg" className="w-full">
      <Box className="p-4 border border-border rounded-xl bg-primary/5">
        <Text className="text-sm font-semibold mb-3 text-primary">Primary Theme</Text>
        <Calendar
          mode="single"
          value={selected}
          onValueChange={setSelected}
          className="md"
        >
          <CalendarHeader className="bg-primary/10 rounded-t-lg p-2">
            <CalendarHeaderPrevButton className="bg-background rounded-full p-1 shadow-sm">
              <Icon as={ChevronLeftIcon} size="sm" className="text-primary" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderTitle className="text-primary font-bold" />
            <CalendarHeaderNextButton className="bg-background rounded-full p-1 shadow-sm">
              <Icon as={ChevronRightIcon} size="sm" className="text-primary" />
            </CalendarHeaderNextButton>
          </CalendarHeader>

          <CalendarWeekDaysHeader className="bg-primary/5" />

          <CalendarBody className="bg-background rounded-b-lg">
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
      </Box>

      <Box className="p-4 border border-border rounded-xl bg-secondary/30">
        <Text className="text-sm font-semibold mb-3 text-secondary-foreground">Secondary Theme</Text>
        <Calendar
          mode="single"
          value={selected}
          onValueChange={setSelected}
          className="md"
        >
          <CalendarHeader className="bg-secondary rounded-t-lg p-2">
            <CalendarHeaderPrevButton className="bg-background rounded-full p-1 shadow-sm">
              <Icon as={ChevronLeftIcon} size="sm" className="text-secondary-foreground" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderTitle className="text-secondary-foreground font-bold" />
            <CalendarHeaderNextButton className="bg-background rounded-full p-1 shadow-sm">
              <Icon as={ChevronRightIcon} size="sm" className="text-secondary-foreground" />
            </CalendarHeaderNextButton>
          </CalendarHeader>

          <CalendarWeekDaysHeader className="bg-secondary/50" />

          <CalendarBody className="bg-background rounded-b-lg">
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
      </Box>
    </VStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic-calendar",
    label: "Basic Calendar",
    content: <ExampleBasicCalendar />,
  },
  {
    value: "selection-modes",
    label: "Selection Modes",
    content: <ExampleSelectionModes />,
  },
  {
    value: "month-year-picker",
    label: "Month & Year Picker",
    content: <ExampleMonthYearPicker />,
  },
  {
    value: "with-event-markers",
    label: "With Event Markers",
    content: <ExampleWithEventMarkers />,
  },
  {
    value: "with-disabled-dates",
    label: "With Disabled Dates",
    content: <ExampleWithDisabledDates />,
  },
  {
    value: "with-week-numbers",
    label: "With Week Numbers",
    content: <ExampleWithWeekNumbers />,
  },
  {
    value: "customized-styling",
    label: "Customized Styling",
    content: <ExampleCustomizedStyling />,
  }
];

export default function CalendarScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}