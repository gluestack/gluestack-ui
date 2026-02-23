import type React from 'react';

export type CalendarMode = 'single' | 'multiple' | 'range';

export interface CalendarMarker {
  color?: string;
  dots?: Array<{ color: string; key?: string }>;
  type?: 'dot' | 'multi-dot' | 'period';
  content?: React.ReactNode;
}

export type CalendarMarkers = Record<string, CalendarMarker>;

export interface DayState {
  isSelected: boolean;
  isToday: boolean;
  isOutsideMonth: boolean;
  isDisabled: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  hasMarker: boolean;
  marker?: CalendarMarker;
}

// ===== Main Calendar Props =====

export interface ICalendarProps {
  // Selection Props (Gluestack pattern: value/onValueChange)
  mode?: CalendarMode;
  value?: Date | Date[] | { from: Date; to?: Date };
  defaultValue?: Date | Date[] | { from: Date; to?: Date };
  onValueChange?: (value: Date | Date[] | { from: Date; to?: Date }) => void;

  // Date Constraints
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[] | ((date: Date) => boolean);

  // Display Options
  initialMonth?: Date;
  numberOfMonths?: number;
  showWeekNumbers?: boolean;
  showOutsideDays?: boolean;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  fixedWeeks?: boolean;

  // Markers/Indicators
  markers?: CalendarMarkers;

  // Month/Year Selection
  enableMonthYearPicker?: boolean;
  minYear?: number;
  maxYear?: number;

  // Callbacks
  onMonthChange?: (month: Date) => void;
  onDayPress?: (date: Date) => void;
  onDayLongPress?: (date: Date) => void;

  // Animation
  enableAnimation?: boolean;
  animationDuration?: number;

  // Accessibility
  locale?: string;

  // State Management
  isDisabled?: boolean;
  isReadOnly?: boolean;

  // Custom Render
  renderDay?: (date: Date, state: DayState) => React.ReactNode;

  // Children
  children?: React.ReactNode;
}

// ===== Sub-Component Props =====

export interface ICalendarHeaderProps {
  children?: React.ReactNode;
}

export interface ICalendarHeaderButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export interface ICalendarHeaderTitleProps {
  format?: string;
  as?: 'text' | 'select';
  children?: React.ReactNode;
}

export interface ICalendarHeaderSelectProps {
  renderOption?: (value: string | number) => React.ReactNode;
  children?: React.ReactNode;
}

export interface ICalendarWeekDaysHeaderProps {
  format?: 'short' | 'narrow';
  children?: React.ReactNode;
}

export interface ICalendarWeekDayProps {
  children?: React.ReactNode;
}

export interface ICalendarBodyProps {
  children?: React.ReactNode;
}

export interface ICalendarGridProps {
  children?: React.ReactNode;
}

export interface ICalendarWeekProps {
  weekNumber?: number;
  children?: React.ReactNode;
}

export interface ICalendarDayProps {
  date?: Date;
  state?: DayState;
  children?: React.ReactNode;
}

export interface ICalendarDayTextProps {
  children?: React.ReactNode;
}

export interface ICalendarDayIndicatorProps {
  type?: 'dot' | 'multi-dot' | 'period';
  dots?: Array<{ color: string; key?: string }>;
  color?: string;
  children?: React.ReactNode;
}

export interface ICalendarWeekNumberProps {
  week?: number;
  children?: React.ReactNode;
}

export interface ICalendarFooterProps {
  children?: React.ReactNode;
}

// ===== Context Types =====

export interface CalendarContextType {
  mode?: CalendarMode;
  value?: Date | Date[] | { from: Date; to?: Date };
  currentMonth: Date;
  hoveredDate: Date | null;
  setHoveredDate: (date: Date | null) => void;
  handleDayPress: (date: Date) => void;
  handleDayLongPress: (date: Date) => void;
  navigateMonth: (direction: 'prev' | 'next') => void;
  setMonth: (month: Date) => void;
  setYear: (year: number) => void;
  calendarGrid: Array<{
    weekNumber?: number;
    days: Array<{
      date: Date;
      isCurrentMonth: boolean;
      isToday: boolean;
    }>;
  }>;
  isDateDisabled: (date: Date) => boolean;
  getDayState: (date: Date) => DayState;
  markers?: CalendarMarkers;
  showWeekNumbers?: boolean;
  showOutsideDays?: boolean;
  enableMonthYearPicker?: boolean;
  firstDayOfWeek?: number;
  locale?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  minDate?: Date;
  maxDate?: Date;
  minYear?: number;
  maxYear?: number;
  enableAnimation?: boolean;
  animationDuration?: number;
  renderDay?: (date: Date, state: DayState) => React.ReactNode;
}

// ===== Component Type Definitions for Creator =====

export interface ICalendarComponentType<
  RootProps,
  HeaderProps,
  HeaderPrevButtonProps,
  HeaderNextButtonProps,
  HeaderTitleProps,
  HeaderMonthSelectProps,
  HeaderYearSelectProps,
  WeekDaysHeaderProps,
  WeekDayProps,
  BodyProps,
  GridProps,
  WeekProps,
  DayProps,
  DayTextProps,
  DayIndicatorProps,
  WeekNumberProps,
  FooterProps
> extends React.ForwardRefExoticComponent<RootProps & React.RefAttributes<any>> {
  Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<any>>;
  HeaderPrevButton: React.ForwardRefExoticComponent<HeaderPrevButtonProps & React.RefAttributes<any>>;
  HeaderNextButton: React.ForwardRefExoticComponent<HeaderNextButtonProps & React.RefAttributes<any>>;
  HeaderTitle: React.ForwardRefExoticComponent<HeaderTitleProps & React.RefAttributes<any>>;
  HeaderMonthSelect: React.ForwardRefExoticComponent<HeaderMonthSelectProps & React.RefAttributes<any>>;
  HeaderYearSelect: React.ForwardRefExoticComponent<HeaderYearSelectProps & React.RefAttributes<any>>;
  WeekDaysHeader: React.ForwardRefExoticComponent<WeekDaysHeaderProps & React.RefAttributes<any>>;
  WeekDay: React.ForwardRefExoticComponent<WeekDayProps & React.RefAttributes<any>>;
  Body: React.ForwardRefExoticComponent<BodyProps & React.RefAttributes<any>>;
  Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<any>>;
  Week: React.ForwardRefExoticComponent<WeekProps & React.RefAttributes<any>>;
  Day: React.ForwardRefExoticComponent<DayProps & React.RefAttributes<any>>;
  DayText: React.ForwardRefExoticComponent<DayTextProps & React.RefAttributes<any>>;
  DayIndicator: React.ForwardRefExoticComponent<DayIndicatorProps & React.RefAttributes<any>>;
  WeekNumber: React.ForwardRefExoticComponent<WeekNumberProps & React.RefAttributes<any>>;
  Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<any>>;
}
