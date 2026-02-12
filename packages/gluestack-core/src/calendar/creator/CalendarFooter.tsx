import React, { forwardRef } from 'react';
import type { ICalendarFooterProps } from './types';

export const CalendarFooterMain = (StyledCalendarFooter: any) =>
  forwardRef<any, ICalendarFooterProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
      <StyledCalendarFooter ref={ref} {...rest}>
        {children}
      </StyledCalendarFooter>
    );
  });
