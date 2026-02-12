import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarHeaderButtonProps } from './types';
import { isBefore, startOfMonth } from './utils/dateUtils';

export const CalendarHeaderPrevButtonMain = (StyledCalendarHeaderPrevButton: any) =>
  forwardRef<any, ICalendarHeaderButtonProps>((props, ref) => {
    const { onPress, disabled, children, icon, ...rest } = props;
    const { navigateMonth, currentMonth, minDate, isDisabled } = useCalendarContext();

    // Check if prev button should be disabled
    const isPrevDisabled = React.useMemo(() => {
      if (disabled || isDisabled) return true;
      if (!minDate) return false;

      // Disable if current month is the minimum allowed month
      const prevMonth = new Date(currentMonth);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      return isBefore(startOfMonth(prevMonth), startOfMonth(minDate));
    }, [disabled, isDisabled, currentMonth, minDate]);

    const handlePress = () => {
      if (isPrevDisabled) return;
      navigateMonth('prev');
      onPress?.();
    };

    return (
      <StyledCalendarHeaderPrevButton
        ref={ref}
        onPress={handlePress}
        disabled={isPrevDisabled}
        {...rest}
      >
        {icon || children}
      </StyledCalendarHeaderPrevButton>
    );
  });
