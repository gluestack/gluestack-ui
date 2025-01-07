import React, { forwardRef } from 'react';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocus, useFocusRing } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

const Pressable = forwardRef(
  (
    {
      isDisabled = false,
      isPressed: isPressedProp,
      isHovered: isHoveredProp,
      isFocused: isFocusedProp,
      isFocusVisible: isFocusVisibleProp,
      children,
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
      isDisabled,
    });
    const { isFocused, focusProps } = useFocus();
    const { isFocusVisible, focusRingProps }: any = useFocusRing();

    const defaultStates = {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible,
    };

    const defaultDataSet = {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible,
    };

    return (
      <StyledComponent
        ref={ref}
        {...props}
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
        onPress={composeEventHandlers(props?.onPress, onPress)}
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
      >
        {children}
      </StyledComponent>
    );
  }
);

export default Pressable;
