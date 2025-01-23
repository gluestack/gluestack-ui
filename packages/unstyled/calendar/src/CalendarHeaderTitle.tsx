import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';
export const CalendarHeaderTitle = (StyledCalendarHeaderTitle: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    const { title } = useCalendarContext();
    return (
      <StyledCalendarHeaderTitle
        ref={ref}
        {...props}
        role="heading"
        aria-label="Current month and year"
        accessibilityLabel="Current month and year"
        aria-live="polite"
        aria-atomic="true"
      >
        {title}
      </StyledCalendarHeaderTitle>
    );
  });
