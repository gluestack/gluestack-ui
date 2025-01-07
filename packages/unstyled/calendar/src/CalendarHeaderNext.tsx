import React, { forwardRef } from 'react';
import CommonPressable from './Pressable';
import { useCalendarContext } from './Context';

export const CalendarHeaderNext = (StyledCalendarHeaderNext: any) =>
  forwardRef(({ isDisabled, ...props }: any, ref?: any) => {
    const { isNextDisabled, nextMonth } = useCalendarContext();
    const handlePress = () => {
      if (!isDisabled && !isNextDisabled) {
        nextMonth();
      }
    };

    return (
      <CommonPressable
        ref={ref}
        {...props}
        isDisabled={isDisabled || isNextDisabled}
        onPress={handlePress}
        StyledComponent={StyledCalendarHeaderNext}
      />
    );
  });
