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

    return (
      <StyledCalendarHeaderYearSelect
        ref={ref}
        value={currentYear}
        onSelect={handleSelect}
        {...rest}
      >
        {children || years.map((year) => (
          <YearOption key={year} value={year}>
            {renderOption ? renderOption(year) : year}
          </YearOption>
        ))}
      </StyledCalendarHeaderYearSelect>
    );
  });

const YearOption = ({ value, children }: { value: number; children: React.ReactNode }) => {
  return <option value={value}>{children}</option>;
};
