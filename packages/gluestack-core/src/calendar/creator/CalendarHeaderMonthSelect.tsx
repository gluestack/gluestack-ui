import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarHeaderSelectProps } from './types';
import { getMonth } from './utils/dateUtils';

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

    const items = MONTHS.map((month, index) => ({
      label: renderOption ? String(renderOption(month)) : month,
      value: index,
    }));

    return (
      <StyledCalendarHeaderMonthSelect
        ref={ref}
        items={items}
        selectedValue={currentMonthIndex}
        onValueChange={handleSelect}
        {...rest}
      >
        {children}
      </StyledCalendarHeaderMonthSelect>
    );
  });
