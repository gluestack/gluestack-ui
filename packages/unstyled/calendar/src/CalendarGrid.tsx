import React, { forwardRef } from 'react';

export const CalendarGrid = (StyledCalendarGrid: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledCalendarGrid ref={ref} {...props}>
        {children}
      </StyledCalendarGrid>
    );
  });
