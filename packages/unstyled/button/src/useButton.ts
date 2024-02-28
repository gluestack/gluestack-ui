import { useButton as useAriaButton } from '@react-aria/button';
import { useFocus, useFocusRing } from '@react-native-aria/focus';
import { useHover, usePress } from '@react-native-aria/interactions';
import React from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';

import { useRef } from 'react';
export const useButton = ({
  isHovered: isHoveredProp,
  isPressed: isPressedProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  isDisabled,
  ...props
}: any) => {
  let ref: any = useRef();
  // let { buttonProps } = useAriaButton(props, ref);
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  const { pressProps: pressableProps, isPressed } = usePress({
    isDisabled,
  });

  const { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();
  const role = props?.role || 'button';
  const states = {
    hover: isHoveredProp || isHovered,
    focus: isFocusedProp || isFocused,
    active: isPressedProp || isPressed,
    disabled: isDisabled,
    focusVisible: isFocusVisibleProp || isFocusVisible,
  };
  const dataSet = {
    hover: isHoveredProp || isHovered ? 'true' : 'false',
    focus: isFocusedProp || isFocused ? 'true' : 'false',
    active: isPressedProp || isPressed ? 'true' : 'false',
    disabled: isDisabled ? 'true' : 'false',
    focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
  };
  const disabled = isDisabled;
  const onPressIn = composeEventHandlers(
    props?.onPressIn,
    pressableProps.onPressIn
    // () => {
    //   console.log('onPressIn');
    // }
  );
  const onPressOut = composeEventHandlers(
    props?.onPressOut,
    pressableProps.onPressOut
    // ,() => {
    //   console.log('onPressOut');
    // }
  );
  // @ts-ignore - web only
  const onHoverIn = composeEventHandlers(
    props?.onHoverIn,
    hoverProps.onHoverIn
  );
  // @ts-ignore - web only
  const onHoverOut = composeEventHandlers(
    props?.onHoverOut,
    hoverProps.onHoverOut
  );
  // @ts-ignore - web only
  const onFocus = composeEventHandlers(
    composeEventHandlers(props?.onFocus, focusProps.onFocus),
    focusRingProps.onFocus
  );
  // @ts-ignore - web only
  const onBlur = composeEventHandlers(
    composeEventHandlers(props?.onBlur, focusProps.onBlur),
    focusRingProps.onBlur
  );

  return {
    role,
    states,
    dataSet,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    disabled,
    ref,
    pressableProps,
    focusProps,
    hoverProps,
    focusRingProps,
    buttonProps: props,
  };
};
