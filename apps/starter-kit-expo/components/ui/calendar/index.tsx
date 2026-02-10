import React from 'react';
import DateTimePicker, {
  DateType,
  useDefaultClassNames,
} from 'react-native-ui-datepicker';
import { View } from 'react-native';
import { CalendarProps } from './types';

// Shadcn/ui inspired default classNames
const getShadcnClassNames = () => ({
  // Container
  container: '',

  // Header section
  header: 'flex flex-row items-center justify-between px-1 ',

  // Month/Year text in header
  month_text: 'text-sm font-medium text-foreground',
  year_text: 'text-sm font-medium text-foreground',

  // Navigation buttons
  button_prev:
    'h-7 w-7 flex items-center justify-center rounded-md hover:bg-accent active:bg-accent/80',
  button_next:
    'h-7 w-7 flex items-center justify-center rounded-md hover:bg-accent active:bg-accent/80',

  // Dropdowns for month/year selection
  dropdown: '',
  dropdown_root: '',

  // Weekday headers (Sun, Mon, etc.)
  weekday:
    'text-muted-foreground text-[0.8rem] font-normal w-9 h-9 flex items-center justify-center',

  // Day cells container
  weekdays: 'flex flex-row',

  // Week container
  week: 'flex flex-row mt-2',

  // Individual day cell
  day: 'h-8 w-8  font-normal aria-selected:opacity-100',

  // Day text/label
  day_label: 'text-sm text-foreground',

  // Today
  today: 'bg-accent text-accent-foreground rounded-md',
  today_label: '',

  // Selected (single mode)
  selected:
    'bg-primary rounded-md hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
  selected_label: 'text-primary-foreground',

  // Range selection
  range_start:
    'bg-primary rounded-l-md rounded-r-none hover:bg-primary hover:text-primary-foreground',
  range_start_label: 'text-primary-foreground',
  range_end:
    'bg-primary text-primary-foreground rounded-r-md rounded-l-none hover:bg-primary hover:text-primary-foreground',
  range_end_label: 'text-primary-foreground',
  range_middle:
    'bg-muted text-muted-foreground rounded-none hover:bg-muted hover:text-muted-foreground',
  range_middle_label: '',

  // Disabled
  disabled: 'text-muted-foreground opacity-50',
  disabled_label: '',

  // Outside current month
  outside:
    'text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
  outside_label: '',

  // Hidden
  hidden: 'invisible',

  // Week numbers
  week_number: 'text-[0.8rem] text-muted-foreground w-9',
  week_number_header: 'text-[0.8rem] text-muted-foreground w-9',
});

export function Calendar({
  mode = 'single',
  selected,
  onSelect,
  minDate,
  maxDate,
  className,
  classNames: customClassNames,
}: CalendarProps) {
  const defaultClassNames = useDefaultClassNames();
  const shadcnClassNames = getShadcnClassNames();

  // Merge classNames: defaults < shadcn < custom
  const mergedClassNames = {
    ...defaultClassNames,
    ...shadcnClassNames,
    ...customClassNames,
  };

  const getPickerProps = () => {
    switch (mode) {
      case 'single':
        return {
          mode: 'single' as const,
          date: selected as DateType,
          onChange: (params: { date: DateType }) => onSelect?.(params.date),
        };
      case 'range': {
        const range = selected as { from: Date; to: Date } | undefined;
        return {
          mode: 'range' as const,
          startDate: range?.from,
          endDate: range?.to,
          onChange: (params: { startDate: DateType; endDate: DateType }) => {
            if (params.startDate && params.endDate) {
              onSelect?.({ from: params.startDate, to: params.endDate });
            }
          },
        };
      }
      case 'multiple':
        return {
          mode: 'multiple' as const,
          dates: selected as Date[] | undefined,
          onChange: (params: { dates: DateType[] }) => onSelect?.(params.dates),
        };
      default:
        return { mode: 'single' as const };
    }
  };

  return (
    <View className={className}>
      <DateTimePicker
        {...getPickerProps()}
        minDate={minDate}
        maxDate={maxDate}
        classNames={mergedClassNames}
      />
    </View>
  );
}

export type { CalendarProps };
