import { ButtonAria, useButton } from './useButton';
import type { ToggleState } from '@react-stately/toggle';
import type { RefObject } from 'react';
import { chain, mergeProps } from '@react-aria/utils';
import type { PressEvents } from '../../../interactions';
import type { TouchableOpacityProps } from 'react-native';

export type AriaButtonProps = TouchableOpacityProps &
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
  state: ToggleState,
  ref: RefObject<any>
): ButtonAria {
  const { isSelected } = state;
  const { isPressed, buttonProps } = useButton(
    {
      ...props,
      onPress: chain(state.toggle, props.onPress),
    },
    ref
  );

  return {
    isPressed,
    buttonProps: mergeProps(buttonProps, {
      accessibilityState: {
        selected: isSelected,
      },
    }),
  };
}
