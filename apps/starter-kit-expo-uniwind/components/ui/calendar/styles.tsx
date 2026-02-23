import { tva } from '@gluestack-ui/utils/nativewind-utils';

// Main Calendar container
// Full width on native, max-width on web
export const calendarStyle = tva({
  base: 'w-full web:w-fit bg-background border border-border rounded-lg p-4 gap-2',
  variants: {
    size: {
      sm: 'p-2 gap-2',
      md: 'p-2 gap-1',
      lg: 'p-6 gap-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Header
export const calendarHeaderStyle = tva({
  base: 'flex-row items-center justify-between mb-2',
  variants: {},
});

export const calendarHeaderButtonStyle = tva({
  base: 'h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent active:bg-accent/80 data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed',
  variants: {},
});

export const calendarHeaderTitleStyle = tva({
  base: 'text-foreground text-base font-semibold',
  variants: {},
});

// Week Days Header
export const calendarWeekDaysHeaderStyle = tva({
  base: 'flex-row gap-0 mb-2',
  variants: {},
});

export const calendarWeekDayStyle = tva({
  base: 'flex-1 items-center justify-center min-w-[2.0rem] web:max-w-[2.5rem]',
  variants: {},
});

export const calendarWeekDayTextStyle = tva({
  base: 'text-muted-foreground text-xs font-medium uppercase',
  variants: {},
  parentVariants: {},
});

// Body & Grid
export const calendarBodyStyle = tva({
  base: 'gap-0',
  variants: {},
});

export const calendarGridStyle = tva({
  base: 'gap-0',
  variants: {},
});

export const calendarWeekStyle = tva({
  base: 'flex-row gap-0',
  variants: {},
});

// Day
export const calendarDayStyle = tva({
  base: 'flex-1 aspect-square items-center justify-center rounded-md web:max-w-[2.25rem] relative transition-colors',
  variants: {
    state: {
      'default': 'hover:bg-accent active:bg-accent/80',
      'selected': 'bg-primary hover:bg-primary/90 active:bg-primary/80',
      'today': 'bg-accent',
      'disabled': 'opacity-40 cursor-not-allowed',
      'outside-month': 'opacity-30',
      'range-start': 'bg-primary rounded-r-md',
      'range-end': 'bg-primary rounded-l-md',
      'range-middle': 'bg-primary/20 rounded-none',
    },
  },
});

export const calendarDayTextStyle = tva({
  base: 'text-foreground text-sm font-normal z-10',
  variants: {
    state: {
      'default': 'text-foreground',
      'selected': 'text-primary-foreground ',
      'today': 'text-accent-foreground',
      'disabled': 'text-muted-foreground',
      'outside-month': 'text-muted-foreground',
      'range-start': 'text-primary-foreground font-semibold',
      'range-end': 'text-primary-foreground font-semibold',
      'range-middle': 'text-foreground',
    },
  },
});

// Day Indicator (markers/dots)
export const calendarDayIndicatorStyle = tva({
  base: 'absolute bottom-1 flex-row gap-0.5 z-0',
  variants: {
    type: {
      'dot': 'flex-row gap-0.5',
      'multi-dot': 'flex-row gap-0.5',
      'period': 'absolute inset-0 rounded-md opacity-20',
    },
  },
});

export const calendarDotStyle = tva({
  base: 'w-1 h-1 rounded-full',
  variants: {},
});

// Week Number
export const calendarWeekNumberStyle = tva({
  base: 'w-8 items-center justify-center mr-1',
  variants: {},
});

export const calendarWeekNumberTextStyle = tva({
  base: 'text-muted-foreground text-xs font-normal',
  variants: {},
  parentVariants: {},
});

// Footer
export const calendarFooterStyle = tva({
  base: 'mt-4 pt-4 border-t border-border',
  variants: {},
});

// Month/Year Select
export const calendarHeaderSelectStyle = tva({
  base: 'bg-transparent border border-border rounded-md px-2 py-1 text-sm text-foreground',
  variants: {},
});
