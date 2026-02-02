import type { ViewProps, TextProps, PressableProps } from 'react-native';

export type DateTimeValue = Date | [Date, Date] | null;

export interface DateTimePickerProps {
  // Core
  mode?: 'date' | 'time' | 'datetime';
  rangeSelection?: boolean;

  // Value (controlled/uncontrolled)
  value?: DateTimeValue;
  defaultValue?: DateTimeValue;
  onValueChange?: (value: DateTimeValue) => void;

  // Open state
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;

  // Constraints
  minDate?: Date;
  maxDate?: Date;
  minTime?: { hour: number; minute: number };
  maxTime?: { hour: number; minute: number };
  disabledDates?: Date[] | ((date: Date) => boolean);

  // Formatting
  dateFormat?: string; // "MM/DD/YYYY", "DD-MM-YYYY"
  timeFormat?: '12h' | '24h';
  locale?: string;
  displayFormat?: (value: DateTimeValue) => string;

  // Behavior
  closeOnSelect?: boolean;
  showTodayButton?: boolean;
  firstDayOfWeek?: 0 | 1; // 0=Sunday, 1=Monday

  // FormControl integration
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;

  // Positioning
  placement?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;

  // Style variants
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'outline' | 'underlined' | 'rounded';

  children?: React.ReactNode;
}

export interface DateTimePickerContextValue {
  // State
  value: DateTimeValue;
  isOpen: boolean;
  currentMonth: Date;
  activeView: 'date' | 'time';
  calendarView: 'calendar' | 'month' | 'year';
  rangeStep: 'start' | 'end';
  tempRangeStart: Date | null;

  // Props
  mode: 'date' | 'time' | 'datetime';
  rangeSelection: boolean;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  locale: string;
  firstDayOfWeek: 0 | 1;
  closeOnSelect: boolean;
  showTodayButton: boolean;

  // Constraints
  minDate?: Date;
  maxDate?: Date;
  minTime?: { hour: number; minute: number };
  maxTime?: { hour: number; minute: number };
  disabledDates?: Date[] | ((date: Date) => boolean);

  // FormControl
  isDisabled: boolean;
  isInvalid: boolean;
  isReadOnly: boolean;
  isRequired: boolean;

  // Style
  size: 'sm' | 'md' | 'lg' | 'xl';
  variant: 'outline' | 'underlined' | 'rounded';

  // Actions
  setValue: (value: DateTimeValue) => void;
  setIsOpen: (isOpen: boolean) => void;
  setCurrentMonth: (month: Date) => void;
  setActiveView: (view: 'date' | 'time') => void;
  setCalendarView: (view: 'calendar' | 'month' | 'year') => void;
  handleDateSelect: (date: Date) => void;
  handleTimeSelect: (time: Date) => void;
  handleMonthSelect: (month: number) => void;
  handleYearSelect: (year: number) => void;
  handleTodayClick: () => void;
  handleCancelClick: () => void;
  handleConfirmClick: () => void;
  navigateMonth: (direction: 'prev' | 'next') => void;

  // Display
  displayFormat?: (value: DateTimeValue) => string;
  getDisplayValue: () => string;
}

export interface DateTimePickerTriggerProps extends PressableProps {
  children?: React.ReactNode;
}

export interface DateTimePickerInputProps extends TextProps {
  placeholder?: string;
  children?: React.ReactNode;
}

export interface DateTimePickerIconProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerPortalProps {
  children?: React.ReactNode;
}

export interface DateTimePickerBackdropProps extends PressableProps {
  children?: React.ReactNode;
}

export interface DateTimePickerContentProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerCalendarProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerCalendarHeaderProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerCalendarGridProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerCalendarDayProps extends PressableProps {
  date: Date;
  children?: React.ReactNode;
}

export interface DateTimePickerTimePickerProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerModeToggleProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerActionBarProps extends ViewProps {
  children?: React.ReactNode;
}

export interface DateTimePickerActionButtonProps extends PressableProps {
  action: 'today' | 'cancel' | 'confirm';
  children?: React.ReactNode;
}

export interface DateTimePickerRangeLabelProps extends ViewProps {
  type: 'start' | 'end';
  children?: React.ReactNode;
}
