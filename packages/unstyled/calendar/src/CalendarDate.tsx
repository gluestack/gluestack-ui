import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import { useHover, usePress } from '@react-native-aria/interactions';
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
        ...props
      }: Omit<PressableProps, 'children'> & {
        states?: any;
        dataSet?: any;
        day: Date | null;
        children?:
          | (({
              hovered,
              pressed,
              focused,
              focusVisible,
              disabled,
            }: {
              hovered?: boolean;
              pressed?: boolean;
              focused?: boolean;
              focusVisible?: boolean;
              disabled?: boolean;
            }) => React.ReactNode)
          | React.ReactNode;
      },
      ref?: any
    ) => {
      const { handleDateSelect, isToday, selectedDate, isDisabled } =
        useCalendarContext();
      const { focusProps: focusRingProps, isFocusVisible }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({});
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      const isSameDate = (date: Date | null): boolean => {
        if (!date) return false;
        return date.getTime() === selectedDate?.getTime();
      };
      return (
        // @ts-ignore
        <StyledCalendarDate
          ref={ref}
          disabled={props.disabled || isDisabled(day)}
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: props.disabled || isDisabled(day) ? true : false,
            focusVisible: isFocusVisible,
            today: isToday(day),
            selected: day ? isSameDate(day) : false,
            ...externalStates,
          }}
          dataSet={{
            hover: isHovered ? 'true' : 'false',
            focus: isFocused ? 'true' : 'false',
            active: isPressed ? 'true' : 'false',
            disabled: props.disabled || isDisabled(day) ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            today: isToday(day),
            selected: day ? isSameDate(day) : false,
            ...externalDataSet,
          }}
          {...props}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressProps.onPressOut
          )}
          onPress={composeEventHandlers(() => handleDateSelect(day))}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(
            props?.onHoverIn,
            hoverProps.onHoverIn
          )}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(
            props?.onHoverOut,
            hoverProps.onHoverOut
          )}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(props?.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
        >
          {typeof children === 'function'
            ? children({
                hovered: isHovered,
                focused: isFocused,
                pressed: isPressed,
                disabled: props.disabled ?? undefined,
                focusVisible: isFocusVisible,
              })
            : children}
        </StyledCalendarDate>
      );
    }
  );
