import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import React, { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import { useHover, usePress } from '@gluestack-ui/utils/aria';
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

      const { focusProps: focusRingProps, isFocusVisible }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({});
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

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
        // @ts-ignore
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
