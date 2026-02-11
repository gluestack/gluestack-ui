export type CalendarMode = 'single' | 'multiple' | 'range';

import type React from 'react';

export interface CalendarProps {
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
   * Additional CSS class names
   */
  className?: string;
  /**
   * Children components for compound API
   */
  children?: React.ReactNode;
}

export type ICalendarProps = CalendarProps;
