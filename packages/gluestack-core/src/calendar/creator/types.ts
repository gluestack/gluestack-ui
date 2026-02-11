export type CalendarMode = 'single' | 'multiple' | 'range';

export interface ICalendarProps {
  /**
   * The mode of selection
   */
  mode?: CalendarMode;
  /**
   * The value of the date (for single mode).
   */
  value?: Date;
  /**
   * The values of the dates (for multiple mode).
   */
  values?: Date[];
  /**
   * The range value (for range mode).
   */
  rangeValue?: { start: Date; end: Date };
  /**
   * Event handler called when the selection of the date changes (single mode).
   */
  onChange?: (date: Date) => void;
  /**
   * Event handler called when multiple dates change.
   */
  onValuesChange?: (dates: Date[]) => void;
  /**
   * Event handler called when range changes.
   */
  onRangeChange?: (range: { start: Date; end: Date }) => void;
  /**
   * The minimum date that can be selected.
   */
  minDate?: Date;
  /**
   * The maximum date that can be selected.
   */
  maxDate?: Date;
  /**
   * Children components for compound API
   */
  children?: React.ReactNode;
}

export interface ICalendarNavProps {
  /**
   * If true, the button will be in pressed state.
   */
  isPressed?: boolean;
  /**
   * If true, the button will be in hovered state.
   */
  isHovered?: boolean;
  /**
   * If true, the button will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the button focus ring will be visible.
   */
  isFocusVisible?: boolean;
  /**
   * When true, prevents the user from interacting with the navigation button
   */
  isDisabled?: boolean;
}

export interface ICalendarWeekProps {
  /**
   * Format for weekday names: 'min' (Su), 'short' (Sun), 'full' (Sunday)
   */
  format?: 'min' | 'short' | 'full';
  /**
   * Render method for custom week rendering
   */
  render?: ({ weekday }: { [key: string]: any }) => React.ReactNode;
}

export interface ICalendarDaysProps {
  /**
   * Render method for custom day rendering
   */
  render?: ({ day, ...dayProps }: { [key: string]: any }) => React.ReactNode;
}

export interface ICalendarDateProps {
  /**
   * The date to be displayed
   */
  day: Date | null;
  /**
   * Render method for custom date rendering
   */
  render?: (props: {
    day: Date | null;
    isSelected: boolean;
    isRangeStart: boolean;
    isRangeEnd: boolean;
    isRangeMiddle: boolean;
    isToday: boolean;
    isDisabled: boolean;
  }) => React.ReactNode;
}

export interface ICalendarHeaderTitleProps {
  /**
   * Format for the title: 'MMMM yyyy' (January 2024), 'MMM yyyy' (Jan 2024)
   */
  format?: string;
}

export interface ICalendarContextValue {
  /**
   * Calendar mode
   */
  mode: CalendarMode;
  /**
   * Currently selected date (single mode)
   */
  selectedDate: Date | undefined;
  /**
   * Currently selected dates (multiple mode)
   */
  selectedDates: Date[];
  /**
   * Currently selected range (range mode)
   */
  selectedRange: { start: Date; end: Date } | undefined;
  /**
   * Currently displayed month
   */
  currentMonth: Date;
  /**
   * Handler for date selection
   */
  handleDateSelect: (day: Date | null) => void;
  /**
   * Navigate to previous month
   */
  prevMonth: () => void;
  /**
   * Navigate to next month
   */
  nextMonth: () => void;
  /**
   * Get array of days for current month
   */
  getDaysInMonth: () => (Date | null)[];
  /**
   * Check if a day is today
   */
  isToday: (day: Date | null) => boolean;
  /**
   * Check if a day is selected
   */
  isSelected: (day: Date | null) => boolean;
  /**
   * Check if a day is the start of a range
   */
  isRangeStart: (day: Date | null) => boolean;
  /**
   * Check if a day is the end of a range
   */
  isRangeEnd: (day: Date | null) => boolean;
  /**
   * Check if a day is in the middle of a range
   */
  isRangeMiddle: (day: Date | null) => boolean;
  /**
   * Weekdays
   */
  weekDays: string[];
  /**
   * Months
   */
  months: string[];
  /**
   * Current month and year title
   */
  title: string;
  /**
   * If true, the previous navigation button is disabled
   */
  isPrevDisabled: boolean;
  /**
   * If true, the next navigation button is disabled
   */
  isNextDisabled: boolean;
  /**
   * If true, the day is disabled
   */
  isDisabled: (day: Date | null) => boolean;
}

export type ICalendarComponentType<
  Root,
  Header,
  HeaderPrev,
  HeaderTitle,
  HeaderNext,
  Week,
  Days,
  Content,
  Date,
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Root> & React.RefAttributes<Root> & ICalendarProps
> & {
  Header: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Header> & React.RefAttributes<Header>
  >;
  HeaderPrev: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<HeaderPrev> &
      React.RefAttributes<HeaderPrev> &
      ICalendarNavProps
  >;
  HeaderNext: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<HeaderNext> &
      React.RefAttributes<HeaderNext> &
      ICalendarNavProps
  >;
  HeaderTitle: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<HeaderTitle> &
      React.RefAttributes<HeaderTitle> &
      ICalendarHeaderTitleProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Content> & React.RefAttributes<Content>
  >;
  Week: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Week> & React.RefAttributes<Week> & ICalendarWeekProps
  >;
  Days: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Days> & React.RefAttributes<Days> & ICalendarDaysProps
  >;
  Date: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Date> & React.RefAttributes<Date> & ICalendarDateProps
  >;
};
