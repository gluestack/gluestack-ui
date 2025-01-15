import React, { forwardRef, useRef } from 'react';
import { useTimeInput } from './TimeInputContext';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import type { ITimeInputMeridiemProps } from './types';

export const TimeInputMeridiem = (StyledTimeInputMeridiem: any) =>
  forwardRef(
    (
      {
        children,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isFocusVisible: isFocusVisibleProp,
        isDisabled: isDisabledProp,
        ...props
      }: ITimeInputMeridiemProps & {
        children: React.ReactNode;
      },
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isInvalid,
        value,
        meridiem,
        setMeridiem,
        isRequired,
        setTimeValue,
        setMeridiemHovered,
        setMeridiemPressed,
        meridiemRef,
      } = useTimeInput('TimeInputContext');

      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { isFocused, focusProps } = useFocus();

      const { pressProps: pressableProps, isPressed } = usePress({
        isDisabled,
      });

      const pressableRef = useRef(null);
      const { isHovered } = useHover({}, pressableRef);

      const mergedRef = mergeRefs([ref, pressableRef, meridiemRef]);

      const updateMeridiem = (meridiem: string) => {
        if (meridiem === 'AM') {
          const newTimeValue = value.set('hour', value.get('hour') + 12);
          setMeridiem('PM');
          setTimeValue(newTimeValue);
        } else {
          const newTimeValue = value.set('hour', value.get('hour') - 12);
          setMeridiem('AM');
          setTimeValue(newTimeValue);
        }
      };

      return (
        <StyledTimeInputMeridiem
          accessible={true}
          ref={mergedRef}
          {...props}
          states={{
            disabled: isDisabled,
            invalid: isInvalid,
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            focusVisible: isFocusVisibleProp || isFocusVisible,
            active: isPressedProp || isPressed,
            pressed: isPressed,
            required: isRequired,
            readOnly: isReadOnly,
          }}
          dataSet={{
            disabled: isDisabled ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            hover: isHoveredProp && isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
            active: isPressedProp || isPressed ? 'true' : 'false',
            pressed: isPressed && isPressedProp ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            readOnly: isReadOnly ? 'true' : 'false',
          }}
          disabled={isDisabled || isDisabledProp || isReadOnly}
          onHoverIn={() => setMeridiemHovered(true)}
          onHoverOut={() => setMeridiemHovered(false)}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressableProps.onPressIn,
            () => {
              if (isPressedProp) {
                setMeridiemPressed(true);
              }
            }
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressableProps.onPressOut,
            () => {
              if (isPressedProp) {
                setMeridiemPressed(false);
              }
            }
          )}
          onPress={composeEventHandlers(props?.onPress, () =>
            updateMeridiem(meridiem)
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
          {children}
        </StyledTimeInputMeridiem>
      );
    }
  );
