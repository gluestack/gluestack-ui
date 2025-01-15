import React, { forwardRef } from 'react';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocus, useFocusRing } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useCalendarContext } from './Context';

export const CalendarHeaderPrev = (StyledCalendarHeaderPrev: any) =>
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
      const { isPrevDisabled, prevMonth } = useCalendarContext();
      const handlePress = () => {
        if (!isDisabled && !isPrevDisabled) {
          prevMonth();
        }
      };
      const { isHovered, hoverProps }: any = useHover();
      const { isPressed, pressProps } = usePress({
        onPress: handlePress,
        isDisabled: isDisabled || isPrevDisabled,
      });
      const { isFocused, focusProps } = useFocus();
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      return (
        <StyledCalendarHeaderPrev
          ref={ref}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled || isPrevDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          dataSet={{
            hover: isHoveredProp || isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            active: isPressedProp || isPressed ? 'true' : 'false',
            disabled: isDisabled || isPrevDisabled ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
          }}
          disabled={isDisabled}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressProps.onPressOut
          )}
          onPress={composeEventHandlers(props?.onPress, handlePress)}
          onHoverIn={composeEventHandlers(
            props?.onHoverIn,
            hoverProps.onHoverIn
          )}
          onHoverOut={composeEventHandlers(
            props?.onHoverOut,
            hoverProps.onHoverOut
          )}
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          onBlur={composeEventHandlers(
            composeEventHandlers(props?.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          {...props}
        />
      );
    }
  );
