import React, { forwardRef } from 'react';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocus, useFocusRing } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useCalendarContext } from './Context';

export const CalendarGridDays = (StyledCalendarGridDays: any) =>
  forwardRef(({ render, ...props }: any, ref?: any) => {
    const {
      getDaysInMonth,
      handleDateSelect,
      isToday,
      selectedDate,
      isDisabled,
    } = useCalendarContext();
    const days = getDaysInMonth();
    const { isHovered, hoverProps }: any = useHover();
    const { isFocused, focusProps } = useFocus();
    const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
    const { isPressed, pressProps } = usePress({
      onPress: (day: Date) => handleDateSelect(day),
    });

    // can move to context
    const isSameDate = (date1: Date, date2: Date): boolean => {
      if (!date1 || !date2) return false;
      return date1.getTime() === date2.getTime();
    };

    return (
      <StyledCalendarGridDays ref={ref} {...props}>
        {days.map((day) => {
          const DayProps = {
            key: day?.getDate(),
            states: {
              disabled: isDisabled(day),
              hover: isHovered,
              focus: isFocused,
              focusVisible: isFocusVisible,
              active: isPressed,
              today: isToday(day),
              selected: day && selectedDate && isSameDate(day, selectedDate),
            },
            dataSet: {
              disabled: isDisabled(day) ? 'true' : 'false',
              hover: isHovered ? 'true' : 'false',
              focus: isFocused ? 'true' : 'false',
              focusVisible: isFocusVisible ? 'true' : 'false',
              active: isPressed ? 'true' : 'false',
              today: isToday(day) ? 'true' : 'false',
              selected: day && selectedDate && isSameDate(day, selectedDate),
            },
            disabled: isDisabled(day),
            onPressIn: composeEventHandlers(pressProps.onPressIn),
            onPressOut: composeEventHandlers(pressProps.onPressOut),
            onPress: composeEventHandlers(() => handleDateSelect(day)),
            onHoverIn: composeEventHandlers(hoverProps.onHoverIn),
            onHoverOut: composeEventHandlers(hoverProps.onHoverOut),
            onFocus: composeEventHandlers(
              focusProps.onFocus,
              focusRingProps.onFocus
            ),
            onBlur: composeEventHandlers(
              focusProps.onBlur,
              focusRingProps.onBlur
            ),
          };
          const Day = render?.(day, DayProps);
          return Day;
        })}
      </StyledCalendarGridDays>
    );
  });
