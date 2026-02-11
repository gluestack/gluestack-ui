import React, { forwardRef, useState } from 'react';
import type { PressableProps } from 'react-native';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useCalendarContext } from './Context';

export const CalendarDate = (StyledCalendarDate: React.ComponentType<any>) =>
  forwardRef(
    (
      {
        children,
        states: externalStates,
        dataSet: externalDataSet,
        day,
        render,
        ...props
      }: Omit<PressableProps, 'children'> & {
        states?: any;
        dataSet?: any;
        day: Date | null;
        render?: (props: {
          day: Date | null;
          isSelected: boolean;
          isRangeStart: boolean;
          isRangeEnd: boolean;
          isRangeMiddle: boolean;
          isToday: boolean;
          isDisabled: boolean;
        }) => React.ReactNode;
        children?: React.ReactNode;
      },
      ref?: any
    ) => {
      const {
        handleDateSelect,
        isToday,
        isSelected,
        isRangeStart,
        isRangeEnd,
        isRangeMiddle,
        isDisabled,
      } = useCalendarContext();

      // Simple state management without @react-native-aria
      const [isPressed, setIsPressed] = useState(false);
      const [isHovered, setIsHovered] = useState(false);
      const [isFocused, setIsFocused] = useState(false);
      const isFocusVisible = isFocused;

      const selected = isSelected(day);
      const rangeStart = isRangeStart(day);
      const rangeEnd = isRangeEnd(day);
      const rangeMiddle = isRangeMiddle(day);
      const today = isToday(day);
      const disabled = isDisabled(day);

      const label = day ? day.toLocaleDateString() : 'empty cell';

      if (render) {
        return (
          <StyledCalendarDate ref={ref} {...props}>
            {render({
              day,
              isSelected: selected,
              isRangeStart: rangeStart,
              isRangeEnd: rangeEnd,
              isRangeMiddle: rangeMiddle,
              isToday: today,
              isDisabled: disabled,
            })}
          </StyledCalendarDate>
        );
      }

      return (
        <StyledCalendarDate
          ref={ref}
          disabled={props.disabled || disabled}
          tabIndex={day === null ? -1 : undefined}
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: props.disabled || disabled ? true : false,
            focusVisible: isFocusVisible,
            today: today,
            selected: selected,
            rangeStart: rangeStart,
            rangeEnd: rangeEnd,
            rangeMiddle: rangeMiddle,
            ...externalStates,
          }}
          dataSet={{
            hover: isHovered ? 'true' : 'false',
            focus: isFocused ? 'true' : 'false',
            active: isPressed ? 'true' : 'false',
            disabled: props.disabled || disabled ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            today: today,
            selected: selected,
            rangeStart: rangeStart,
            rangeEnd: rangeEnd,
            rangeMiddle: rangeMiddle,
            ...externalDataSet,
          }}
          {...props}
          onPressIn={(e: any) => {
            setIsPressed(true);
            props.onPressIn?.(e);
          }}
          onPressOut={(e: any) => {
            setIsPressed(false);
            props.onPressOut?.(e);
          }}
          onPress={() => handleDateSelect(day)}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          role="gridcell"
          accessible
          accessibilityLabel={label}
          accessibilityElementsHidden={
            disabled || props.disabled || day === null
          }
          aria-selected={selected}
          aria-disabled={props.disabled || disabled || day === null}
          aria-label={label}
        >
          {children}
        </StyledCalendarDate>
      );
    }
  );
