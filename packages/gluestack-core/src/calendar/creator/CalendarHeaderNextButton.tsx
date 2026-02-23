import React, { forwardRef } from 'react';
import { useCalendarContext } from './CalendarContext';
import type { ICalendarHeaderButtonProps } from './types';
import { isAfter, endOfMonth } from './utils/dateUtils';

export const CalendarHeaderNextButtonMain = (StyledCalendarHeaderNextButton: any) =>
  forwardRef<any, ICalendarHeaderButtonProps>((props, ref) => {
    const { onPress, disabled, children, icon, ...rest } = props;
    const { navigateMonth, currentMonth, maxDate, isDisabled } = useCalendarContext();

    // Check if next button should be disabled
    const isNextDisabled = React.useMemo(() => {
      if (disabled || isDisabled) return true;
      if (!maxDate) return false;

      // Disable if current month is the maximum allowed month
      const nextMonth = new Date(currentMonth);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return isAfter(endOfMonth(nextMonth), endOfMonth(maxDate));
    }, [disabled, isDisabled, currentMonth, maxDate]);

    const handlePress = () => {
      if (isNextDisabled) return;
      navigateMonth('next');
      onPress?.();
    };

    return (
      <StyledCalendarHeaderNextButton
        ref={ref}
        onPress={handlePress}
        disabled={isNextDisabled}
        {...rest}
      >
        {icon || children}
      </StyledCalendarHeaderNextButton>
    );
  });
