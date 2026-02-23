import React, { forwardRef } from 'react';
import type { ICalendarHeaderProps } from './types';

export const CalendarHeaderMain = (StyledCalendarHeader: any) =>
  forwardRef<any, ICalendarHeaderProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
      <StyledCalendarHeader ref={ref} {...rest}>
        {children}
      </StyledCalendarHeader>
    );
  });
