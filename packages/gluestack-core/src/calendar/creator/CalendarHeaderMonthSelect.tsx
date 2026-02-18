import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarHeaderSelectProps } from './types';
import { getMonth, format } from './utils/dateUtils';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CalendarHeaderMonthSelectMain = (StyledCalendarHeaderMonthSelect: any) =>
  forwardRef<any, ICalendarHeaderSelectProps>((props, ref) => {
    const { renderOption, children, ...rest } = props;
    const { currentMonth, setMonth } = useCalendarContext();

    const currentMonthIndex = getMonth(currentMonth);

    const handleSelect = (monthIndex: number) => {
      const newMonth = new Date(currentMonth);
      newMonth.setMonth(monthIndex);
      setMonth(newMonth);
    };

    return (
      <StyledCalendarHeaderMonthSelect
        ref={ref}
        value={currentMonthIndex}
        onSelect={handleSelect}
        {...rest}
      >
        {children || MONTHS.map((month, index) => (
          <MonthOption key={index} value={index}>
            {renderOption ? renderOption(month) : month}
          </MonthOption>
        ))}
      </StyledCalendarHeaderMonthSelect>
    );
  });

const MonthOption = ({ value, children }: { value: number; children: React.ReactNode }) => {
  return <option value={value}>{children}</option>;
};
