'use client';

import React from 'react';
import { View } from 'react-native';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cssInterop } from 'nativewind';
import type { CalendarProps } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

// Apply cssInterop for Tailwind support
cssInterop(View, {
  className: {
    target: 'style',
  },
});

// Simple className helper (replaces cn)
const cx = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

const Calendar = React.forwardRef<
  React.ComponentRef<typeof View>,
  CalendarProps & { className?: string }
>(({ className, showOutsideDays = true, ...props }, ref) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <View ref={ref} className={cx('p-2 bg-background', className)}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className="w-fit"
        numberOfMonths={2}
        classNames={{
          months: 'flex flex-col sm:flex-row gap-4 relative',
          month: 'flex flex-col w-full gap-4',
          nav: 'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between px-1',
          button_previous:
            'size-9 flex items-center justify-center rounded-md bg-transparent text-foreground hover:bg-accent',

          button_next:
            'size-9 flex items-center justify-center rounded-md bg-transparent text-foreground hover:bg-accent',
          month_caption: 'flex items-center justify-center h-9 w-full px-9',
          caption_label: 'text-sm font-medium text-foreground',
          table: 'w-full border-collapse',
          weekdays: 'flex',
          weekday:
            'text-muted-foreground rounded-md flex-1 font-normal text-xs select-none h-9 w-9 text-center',
          week: 'flex w-full mt-2',
          day: 'relative w-full h-full p-0 text-center aspect-square select-none',
          day_button:
            'size-9 flex items-center justify-center rounded-md text-sm font-normal transition-colors',
          selected: 'bg-primary text-primary-foreground rounded-lg',
          today: 'bg-accent text-accent-foreground rounded-md',
          outside: 'text-muted-foreground opacity-50',
          disabled: 'text-muted-foreground opacity-50',
          hidden: 'invisible',
          range_start: 'bg-primary text-white rounded-l-md',
          range_end: 'bg-primary text-white rounded-r-md',
          range_middle: 'bg-muted text-foreground rounded-none',
        }}
        components={{
          Chevron: ({ orientation, className: iconClassName }) => {
            const baseClass = 'size-4 text-foreground';
            if (orientation === 'left') {
              return <ChevronLeft />;
            }
            return <ChevronRight/>;
          },
        }}
        {...props}
      />
    </View>
  );
});

Calendar.displayName = 'Calendar';

export { Calendar };
export type { CalendarProps };
