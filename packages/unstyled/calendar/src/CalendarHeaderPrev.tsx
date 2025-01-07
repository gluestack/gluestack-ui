import React, { forwardRef } from 'react';
import CommonPressable from './Pressable';
import { useCalendarContext } from './Context';

export const CalendarHeaderPrev = (StyledCalendarHeaderPrev: any) =>
  forwardRef(({ isDisabled, ...props }: any, ref?: any) => {
    const { isPrevDisabled, prevMonth } = useCalendarContext();
    const handlePress = () => {
      if (!isDisabled && !isPrevDisabled) {
        prevMonth();
      }
    };
    return (
      <CommonPressable
        ref={ref}
        {...props}
        isDisabled={isDisabled || isPrevDisabled}
        onPress={handlePress}
        StyledComponent={StyledCalendarHeaderPrev}
      />
    );
  });
