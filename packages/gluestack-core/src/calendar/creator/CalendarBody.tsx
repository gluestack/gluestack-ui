import React, { forwardRef } from 'react';
import type { ICalendarBodyProps } from './types';

export const CalendarBodyMain = (StyledCalendarBody: any) =>
  forwardRef<any, ICalendarBodyProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
      <StyledCalendarBody ref={ref} {...rest}>
        {children}
      </StyledCalendarBody>
    );
  });
