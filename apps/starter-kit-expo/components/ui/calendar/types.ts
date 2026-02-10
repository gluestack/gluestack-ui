export type CalendarMode = 'single' | 'multiple' | 'range';

export interface MarkedDate {
  marked?: boolean;
  dotColor?: string;
  dots?: Array<{ key: string; color: string }>;
  selected?: boolean;
  selectedColor?: string;
  disabled?: boolean;
  disableTouchEvent?: boolean;
  startingDay?: boolean;
  endingDay?: boolean;
  color?: string;
  period?: {
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
  };
  periods?: Array<{
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
  }>;
  customStyles?: {
    container?: any;
    text?: any;
  };
}

export type MarkedDates = Record<string, MarkedDate>;

export interface DayState {
  disabled?: boolean;
  selected?: boolean;
  marking?: MarkedDate;
}

export interface CalendarTheme {
  backgroundColor?: string;
  calendarBackground?: string;
  textSectionTitleColor?: string;
  textSectionTitleDisabledColor?: string;
  selectedDayBackgroundColor?: string;
  selectedDayTextColor?: string;
  todayTextColor?: string;
  todayBackgroundColor?: string;
  dayTextColor?: string;
  textDisabledColor?: string;
  dotColor?: string;
  selectedDotColor?: string;
  arrowColor?: string;
  disabledArrowColor?: string;
  monthTextColor?: string;
  indicatorColor?: string;
  textDayFontFamily?: string;
  textMonthFontFamily?: string;
  textDayHeaderFontFamily?: string;
  textDayFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textMonthFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDayHeaderFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
}

export type MarkingType =
  | 'dot'
  | 'multi-dot'
  | 'period'
  | 'multi-period'
  | 'custom';

export interface CalendarProps {
  mode?: CalendarMode;
  selected?: Date | Date[] | { from: Date; to: Date };
  onSelect?: (value: any) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  markedDates?: MarkedDates;
  markingType?: MarkingType;
  initialDate?: Date;
  showWeekNumbers?: boolean;
  hideExtraDays?: boolean;
  showSixWeeks?: boolean;
  firstDayOfWeek?: number;
  enableSwipeMonths?: boolean;
  onMonthChange?: (month: Date) => void;
  onDayPress?: (date: Date) => void;
  onDayLongPress?: (date: Date) => void;
  theme?: CalendarTheme;
  displayLoadingIndicator?: boolean;
  renderDay?: (date: Date, state: DayState) => React.ReactNode;
  renderHeader?: (date: Date) => React.ReactNode;
  renderArrow?: (direction: 'left' | 'right') => React.ReactNode;
  className?: string;
  style?: any;
  animate?: boolean;
}
