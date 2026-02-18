import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarHeaderTitleProps } from './types';
import { format } from './utils/dateUtils';

export const CalendarHeaderTitleMain = (StyledCalendarHeaderTitle: any) =>
  forwardRef<any, ICalendarHeaderTitleProps>((props, ref) => {
    const { format: formatString = 'MMMM yyyy', as = 'text', children, ...rest } = props;
    const { currentMonth } = useCalendarContext();

    const formattedTitle = format(currentMonth, formatString);

    return (
      <StyledCalendarHeaderTitle ref={ref} {...rest}>
        {children || formattedTitle}
      </StyledCalendarHeaderTitle>
    );
  });
