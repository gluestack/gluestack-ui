import React, { forwardRef } from 'react';
export const CalendarHeader = (StyledCalendarHeader: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledCalendarHeader
        ref={ref}
        {...props}
        aria-label="Calendar header"
        accessibilityLabel="Calendar header"
      >
        {children}
      </StyledCalendarHeader>
    );
  });
