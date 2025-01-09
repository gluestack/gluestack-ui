import React, { forwardRef } from 'react';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocus, useFocusRing } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

const Pressable = forwardRef(
  (
    {
      isDisabled: isDisabledProp = false,
      isPressed: isPressedProp,
      isHovered: isHoveredProp,
      isFocused: isFocusedProp,
      isFocusVisible: isFocusVisibleProp,
      StyledComponent,
      onPress,
      states: statesProp,
      dataSet: dataSetProp,
      ...props
    }: any,
    ref?: any
  ) => {
    const { isHovered, hoverProps } = useHover();
    const { isPressed, pressProps } = usePress({
      onPress,
      isDisabled: isDisabledProp,
    });
    const { isFocused, focusProps } = useFocus();
    const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

    const defaultStates = {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabledProp,
      focusVisible: isFocusVisibleProp || isFocusVisible,
    };

    const defaultDataSet = {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabledProp,
      focusVisible: isFocusVisibleProp || isFocusVisible,
    };

    return (
      <StyledComponent
        ref={ref}
        {...props}
        disabled={isDisabledProp}
        states={{
          ...defaultStates,
          ...statesProp,
        }}
        dataSet={{
          ...defaultDataSet,
          ...dataSetProp,
        }}
        onPressIn={composeEventHandlers(props?.onPressIn, pressProps.onPressIn)}
        onPressOut={composeEventHandlers(
          props?.onPressOut,
          pressProps.onPressOut
        )}
        onPress={composeEventHandlers(props?.onPress, pressProps.onPress)}
        onHoverIn={composeEventHandlers(props?.onHoverIn, hoverProps.onHoverIn)}
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
      />
    );
  }
);

export default Pressable;
