import React, { RefObject } from 'react';
import { mergeProps } from '@react-aria/utils';

export interface PressEvents {
  /** Handler that is called when the press is released over the target. */
  onPress?: (e: any) => void;
  /** Handler that is called when a press interaction starts. */
  onPressStart?: (e: any) => void;
  /**
   * Handler that is called when a press interaction ends, either
   * over the target or when the pointer leaves the target.
   */
  onPressEnd?: (e: any) => void;
  /** Handler that is called when the press state changes. */
  onPressChange?: (isPressed: boolean) => void;
  /**
   * Handler that is called when a press is released over the target, regardless of
   * whether it started on the target or not.
   */
  onPressUp?: (e: any) => void;
}

export interface PressProps extends PressEvents {
  /** Whether the target is in a controlled press state (e.g. an overlay it triggers is open). */
  isPressed?: boolean;
  /** Whether the press events should be disabled. */
  isDisabled?: boolean;
  /** Whether the target should not receive focus on press. */
  preventFocusOnPress?: boolean;
}

export interface PressHookProps extends PressProps {
  /** A ref to the target element. */
  ref?: RefObject<any>;
}

export type PressResult = {
  /** Whether the target is currently pressed. */
  isPressed: boolean;
  /** Props to spread on the target element. */
  pressProps: any;
};

export function usePress({
  isDisabled,
  onPress,
  onPressStart,
  onPressEnd,
  onPressUp, // No onPressUp on RN.
  onPressChange,
  isPressed: isPressedProp,
  ...restProps
}: PressHookProps): PressResult {
  let [isPressed, setPressed] = React.useState(false);

  let pressProps = {
    onPress: (e: any) => {
      if (isDisabled) return;
      onPress && onPress(e);
    },
    onPressIn: (e: any) => {
      if (isDisabled) return;
      onPressStart && onPressStart(e);
      setPressed(true);
      onPressChange && onPressChange(true);
    },
    onPressOut: (e: any) => {
      if (isDisabled) return;
      onPressEnd && onPressEnd(e);
      setPressed(false);
      onPressChange && onPressChange(false);
      onPressUp && onPressUp(e);
    },
  };

  pressProps = mergeProps(pressProps, restProps);

  return {
    isPressed: isPressedProp || isPressed,
    pressProps,
  };
}
