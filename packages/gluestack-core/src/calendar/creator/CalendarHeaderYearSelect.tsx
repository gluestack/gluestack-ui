import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarHeaderSelectProps } from './types';
import { getYear } from './utils/dateUtils';

export const CalendarHeaderYearSelectMain = (StyledCalendarHeaderYearSelect: any) =>
  forwardRef<any, ICalendarHeaderSelectProps>((props, ref) => {
    const { renderOption, children, ...rest } = props;
    const { currentMonth, setYear, minYear, maxYear } = useCalendarContext();

    const currentYear = getYear(currentMonth);
    const startYear = minYear || currentYear - 100;
    const endYear = maxYear || currentYear + 100;

    const years = Array.from(
      { length: endYear - startYear + 1 },
      (_, i) => startYear + i
    );

    const handleSelect = (year: number) => {
      setYear(year);
    };

    const items = years.map((year) => ({
      label: renderOption ? String(renderOption(year)) : String(year),
      value: year,
    }));

    return (
      <StyledCalendarHeaderYearSelect
        ref={ref}
        items={items}
        selectedValue={currentYear}
        onValueChange={handleSelect}
        {...rest}
      >
        {children}
      </StyledCalendarHeaderYearSelect>
    );
  });
