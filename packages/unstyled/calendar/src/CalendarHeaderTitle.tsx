import React, { forwardRef } from 'react';
import { useCalendarContext } from './Context';
export const CalendarHeaderTitle = (StyledCalendarHeaderTitle: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    const { title } = useCalendarContext();
    return (
      <StyledCalendarHeaderTitle ref={ref} {...props}>
        {title}
      </StyledCalendarHeaderTitle>
    );
  });
