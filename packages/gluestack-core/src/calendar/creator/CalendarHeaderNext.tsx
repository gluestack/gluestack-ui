import React, { forwardRef, useState } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useCalendarContext } from './Context';

export const CalendarHeaderNext = (StyledCalendarHeaderNext: any) =>
  forwardRef(
    (
      {
        isDisabled,
        isPressed: isPressedProp,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const { isNextDisabled, nextMonth } = useCalendarContext();
      const handlePress = () => {
        if (!isDisabled && !isNextDisabled) {
          nextMonth();
        }
      };

      // Simple state management without @react-native-aria
      const [isHovered, setIsHovered] = useState(false);
      const [isPressed, setIsPressed] = useState(false);
      const [isFocused, setIsFocused] = useState(false);
      const isFocusVisible = isFocused;

      return (
        <StyledCalendarHeaderNext
          ref={ref}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled || isNextDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          dataSet={{
            hover: isHoveredProp || isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            active: isPressedProp || isPressed ? 'true' : 'false',
            disabled: isDisabled || isNextDisabled ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
          }}
          role="button"
          aria-label="Next month"
          aria-disabled={isDisabled || isNextDisabled}
          aria-selected={isPressedProp || isPressed}
          accessibilityLabel="Next month"
          disabled={isDisabled}
          accessibilityElementsHidden={isDisabled || isNextDisabled}
          onPressIn={(e: any) => {
            setIsPressed(true);
            props.onPressIn?.(e);
          }}
          onPressOut={(e: any) => {
            setIsPressed(false);
            props.onPressOut?.(e);
          }}
          onPress={() => handlePress()}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      );
    }
  );
