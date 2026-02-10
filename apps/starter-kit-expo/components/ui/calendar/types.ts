export type CalendarMode = 'single' | 'multiple' | 'range';

export interface CalendarClassNames {
  container?: string;
  header?: string;
  month_text?: string;
  year_text?: string;
  button_prev?: string;
  button_next?: string;
  dropdown?: string;
  dropdown_root?: string;
  weekday?: string;
  weekdays?: string;
  week?: string;
  day?: string;
  day_label?: string;
  today?: string;
  today_label?: string;
  selected?: string;
  selected_label?: string;
  range_start?: string;
  range_end?: string;
  range_middle?: string;
  range_start_label?: string;
  range_end_label?: string;
  range_middle_label?: string;
  disabled?: string;
  disabled_label?: string;
  outside?: string;
  outside_label?: string;
  hidden?: string;
  week_number?: string;
  week_number_header?: string;
}

export interface CalendarProps {
  mode?: CalendarMode;
  selected?: Date | Date[] | { from: Date; to: Date };
  onSelect?: (value: any) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  classNames?: CalendarClassNames;
}
