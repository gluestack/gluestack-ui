# DateTimePicker Component

A comprehensive date and time picker component for gluestack-ui.

## Features

- **Multiple Modes**: date, time, datetime
- **Range Selection**: Select date ranges (start to end)
- **Date Constraints**: Min/max date validation
- **Custom Formatting**: Flexible date format strings (MM/DD/YYYY, DD-MM-YYYY, etc.)
- **Time Formats**: 12-hour and 24-hour support
- **Controlled/Uncontrolled**: Both state management patterns
- **Native Integration**: Uses native time picker on iOS/Android
- **Animations**: Smooth transitions with react-native-reanimated
- **Accessible**: Full keyboard navigation and screen reader support

## Basic Usage

```tsx
import { useState } from 'react';
import {
  DateTimePicker,
  DateTimePickerTrigger,
  DateTimePickerInput,
  DateTimePickerIcon,
  DateTimePickerPortal,
  DateTimePickerBackdrop,
  DateTimePickerContent,
  DateTimePickerCalendar,
  DateTimePickerCalendarHeader,
  DateTimePickerCalendarGrid,
  DateTimePickerActionBar,
  DateTimePickerActionButton,
} from '@/components/ui/datetimepicker';
import { CalendarDaysIcon } from '@/components/ui/icon';

function Example() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DateTimePicker
      mode="date"
      value={selectedDate}
      onValueChange={setSelectedDate}
    >
      <DateTimePickerTrigger>
        <DateTimePickerInput placeholder="Select date" />
        <DateTimePickerIcon>
          <CalendarDaysIcon />
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
  );
}
```

## Props

### DateTimePicker (Root)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'date' \| 'time' \| 'datetime'` | `'date'` | The picker mode |
| `rangeSelection` | `boolean` | `false` | Enable range selection |
| `value` | `Date \| [Date, Date] \| null` | - | Controlled value |
| `defaultValue` | `Date \| [Date, Date] \| null` | `null` | Default value for uncontrolled |
| `onValueChange` | `(value: Date \| [Date, Date] \| null) => void` | - | Value change callback |
| `isOpen` | `boolean` | - | Controlled open state |
| `defaultIsOpen` | `boolean` | `false` | Default open state |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `dateFormat` | `string` | `'MM/DD/YYYY'` | Date format string |
| `timeFormat` | `'12h' \| '24h'` | `'12h'` | Time format |
| `closeOnSelect` | `boolean` | `true` | Close picker on selection |
| `firstDayOfWeek` | `0 \| 1` | `0` | First day of week (0=Sunday) |
| `isDisabled` | `boolean` | `false` | Disable the picker |
| `isInvalid` | `boolean` | `false` | Mark as invalid |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size variant |
| `variant` | `'outline' \| 'underlined' \| 'rounded'` | `'outline'` | Style variant |

## Components

- `DateTimePicker` - Root component with state management
- `DateTimePickerTrigger` - Clickable trigger
- `DateTimePickerInput` - Text input display
- `DateTimePickerIcon` - Icon component
- `DateTimePickerPortal` - Modal portal
- `DateTimePickerBackdrop` - Dismissible backdrop
- `DateTimePickerContent` - Content container
- `DateTimePickerCalendar` - Calendar wrapper
- `DateTimePickerCalendarHeader` - Month/year header
- `DateTimePickerCalendarGrid` - Calendar grid
- `DateTimePickerCalendarDay` - Individual day cell
- `DateTimePickerTimePicker` - Native time picker
- `DateTimePickerModeToggle` - Date/time mode switcher
- `DateTimePickerActionBar` - Action buttons container
- `DateTimePickerActionButton` - Action button
- `DateTimePickerRangeLabel` - Range selection label

## Examples

### Date Only
```tsx
<DateTimePicker mode="date" value={date} onValueChange={setDate} />
```

### Time Only
```tsx
<DateTimePicker mode="time" value={time} onValueChange={setTime} />
```

### DateTime
```tsx
<DateTimePicker mode="datetime" value={datetime} onValueChange={setDatetime} />
```

### Range Selection
```tsx
<DateTimePicker
  mode="date"
  rangeSelection
  value={range}
  onValueChange={setRange}
/>
```

### With Constraints
```tsx
<DateTimePicker
  mode="date"
  minDate={new Date('2024-01-01')}
  maxDate={new Date('2024-12-31')}
  value={date}
  onValueChange={setDate}
/>
```

### Custom Format
```tsx
<DateTimePicker
  mode="date"
  dateFormat="DD-MM-YYYY"
  value={date}
  onValueChange={setDate}
/>
```

## Dependencies

- `@react-native-community/datetimepicker` - Native time picker for iOS/Android
- `react-native-reanimated` - Animations

## Architecture

The component uses a factory pattern with separated concerns:
- **Core logic** in `gluestack-core` package
- **Styling** in UI component with TVA
- **Context API** for state management
- **Controlled/Uncontrolled** state patterns

## Accessibility

- Full keyboard navigation support
- Screen reader compatible
- ARIA attributes
- Focus management
