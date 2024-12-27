import type { PropsWithoutRef, RefAttributes } from 'react';

export interface ICalendarProps {
  /**
   * The value of the date.
   */
  value?: Date;
  /**
   * The default value of the date in uncontrolled mode.
   */
  defaultValue?: Date;
  /**
   * Event handler called when the selection of the date changes.
   */
  onChange?: (date: Date) => void;
  /**
   * The minimum date that can be selected.
   */
  minDate?: Date;
  /**
   * The maximum date that can be selected.
   */
  maxDate?: Date;
  /**
   * Children components
   */
  children?: React.ReactNode;
}

export interface ICalendarHeaderNavProps {
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

export interface ICalendarGridWeekProps {
  /**
   * Render method for custom day rendering
   */
  render?: (
    weekdays: string,
    Component: React.ComponentType<React.ReactNode>
  ) => React.ReactNode;
}

export interface ICalendarDayProps {
  /**
   * The day number or null for empty cells
   */
  day: Date | null;
  /**
   * When true, indicates this day is selected
   */
  isSelected?: boolean;
  /**
   * When true, indicates this is today's date
   */
  isToday?: boolean;
  /**
   * When true, indicates this day cannot be selected
   */
  isDisabled?: boolean;
  /**
   * Handler for when the day is pressed
   */
  onPress?: (date: Date) => void;
}

export interface ICalendarGridDaysProps {
  /**
   * Render method for custom day rendering
   */
  render?: (days: Date | null, props: ICalendarDayProps) => React.ReactNode;
}

export interface ICalendarContextValue {
  /**
   * Currently selected date
   */
  selectedDate: Date | undefined;
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
   * Weekdays
   */
  weekDays: string[];
  /**
   * Months
   */
  months: string[];
  /**
   * Current month and year
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
  GridWeek,
  GridDays,
  Grid
> = React.ForwardRefExoticComponent<
  PropsWithoutRef<Root> & RefAttributes<Root> & ICalendarProps
> & {
  Header: React.ForwardRefExoticComponent<
    PropsWithoutRef<Header> & RefAttributes<Header>
  >;
  HeaderPrev: React.ForwardRefExoticComponent<
    PropsWithoutRef<HeaderPrev> &
      RefAttributes<HeaderPrev> &
      ICalendarHeaderNavProps
  >;
  HeaderNext: React.ForwardRefExoticComponent<
    PropsWithoutRef<HeaderNext> &
      RefAttributes<HeaderNext> &
      ICalendarHeaderNavProps
  >;
  HeaderTitle: React.ForwardRefExoticComponent<
    PropsWithoutRef<HeaderTitle> & RefAttributes<HeaderTitle>
  >;
  Grid: React.ForwardRefExoticComponent<
    PropsWithoutRef<Grid> & RefAttributes<Grid>
  >;
  GridWeek: React.ForwardRefExoticComponent<
    PropsWithoutRef<GridWeek> & RefAttributes<GridWeek> & ICalendarGridWeekProps
  >;
  GridDays: React.ForwardRefExoticComponent<
    PropsWithoutRef<GridDays> & RefAttributes<GridDays> & ICalendarGridDaysProps
  >;
};
