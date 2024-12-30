import React, { forwardRef, useRef } from 'react';
import { useTimeInput } from './TimeInputContext';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover, usePress } from '@react-native-aria/interactions';

export const TimeInputMeridiem = (StyledTimeInputMeridiem: any) =>
  forwardRef(
    (
      {
        children,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isFocusVisible: isFocusVisibleProp,
        // editable,
        isDisabled: isDisabledProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        isDisabled,
        isReadOnly,
        isFocused,
        isInvalid,
        // setIsFocused,
        isFocusVisible,
        isRequired,
        format,
        updateMeridiem,
        setMeridiemHovered,
        meridiemValue,
        setMeridiemPressed,
      } = useTimeInput('TimeInputContext');
      const { pressProps: pressableProps, isPressed } = usePress({
        isDisabled,
      });

      const buttonRef = useRef(null);
      const { isHovered } = useHover({}, buttonRef);
      const mergedRef = mergeRefs([ref, buttonRef]);

      if (format !== 12) {
        return null;
      }
      return (
        <StyledTimeInputMeridiem
          accessible={true}
          ref={mergedRef}
          {...props}
          states={{
            disabled: isDisabled,
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            focusVisible: isFocusVisibleProp || isFocusVisible,
            active: isPressedProp || isPressed,
            pressed: isPressed,
            invalid: isInvalid,
            required: isRequired,
            readOnly: isReadOnly,
          }}
          dataSet={{
            disabled: isDisabled ? 'true' : 'false',
            hover: isHoveredProp && isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
            active: isPressedProp || isPressed ? 'true' : 'false',
            pressed: isPressed && isPressedProp ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            readOnly: isReadOnly ? 'true' : 'false',
          }}
          disabled={isDisabled || isDisabledProp}
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
            updateMeridiem(meridiemValue)
          )}
        >
          {children}
        </StyledTimeInputMeridiem>
      );
    }
  );
