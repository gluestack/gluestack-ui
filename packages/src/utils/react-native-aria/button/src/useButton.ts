import { ReactNode } from 'react';
import { PressEvents, usePress } from '@react-native-aria/interactions';
import { AccessibilityProps, PressableProps } from 'react-native';
import { mergeProps } from '@react-aria/utils';

interface ButtonProps extends PressEvents {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}

export interface RNAriaButtonProps extends AccessibilityProps, ButtonProps {}

export interface ButtonAria {
  /** Props for the button element. */
  buttonProps: PressableProps;
  /** Whether the button is currently pressed. */
  isPressed: boolean;
}

export function useButton(props: RNAriaButtonProps): ButtonAria {
  let {
    isDisabled,
    // @ts-ignore
    onPress,
    // @ts-ignore
    onPressStart,
    // @ts-ignore
    onPressEnd,
    // @ts-ignore
    onPressChange,
    ...rest
  } = props;

  let { pressProps, isPressed } = usePress({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
  });

  const mergedProps = mergeProps(pressProps, rest, {
    'aria-disabled': isDisabled,
    'role': 'button',
    'disabled': isDisabled,
  });

  return {
    isPressed,
    buttonProps: mergedProps,
  };
}
