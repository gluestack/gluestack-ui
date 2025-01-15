import React, { forwardRef } from 'react';

export const CalendarContent = (StyledCalendarContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledCalendarContent ref={ref} {...props}>
        {children}
      </StyledCalendarContent>
    );
  });
