// @ts-nocheck
import { ButtonAria, useButton } from './useButton';
import type { ToggleState } from '@react-stately/toggle';
import { chain, mergeProps } from '@react-aria/utils';
import type { PressEvents } from '@react-native-aria/interactions';
import type { PressableProps } from 'react-native';

export type AriaButtonProps = PressableProps &
  PressEvents & {
    isDisabled: boolean;
  };

export interface AriaToggleButtonProps extends AriaButtonProps {
  /** Whether the element should be selected (controlled). */
  isSelected?: boolean;
  /** Whether the element should be selected (uncontrolled). */
  defaultSelected?: boolean;
  /** Handler that is called when the element's selection state changes. */
  onChange?: (isSelected: boolean) => void;
}

export function useToggleButton(
  props: AriaToggleButtonProps,
  state: ToggleState
): ButtonAria {
  const { isSelected } = state;
  const { isPressed, buttonProps } = useButton({
    ...props,
    onPress: chain(state.toggle, props.onPress),
  });

  return {
    isPressed,
    buttonProps: mergeProps(buttonProps, {
      'aria-selected': isSelected,
    }),
  };
}
