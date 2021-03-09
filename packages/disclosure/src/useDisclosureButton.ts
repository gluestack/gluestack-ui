import { ToggleState } from '@react-stately/toggle';
import { mergeProps } from '@react-aria/utils';
import { PressableProps } from 'react-native';

export function useDisclosureButton(
  props: Partial<PressableProps>,
  state: ToggleState
) {
  const onPress = state.toggle;

  const accessibilityState = props.accessibilityState || {};

  accessibilityState.expanded = state.isSelected;

  return {
    buttonProps: mergeProps(props, {
      onPress,
      accessibilityState,
      accessibilityRole: 'button',
    }),
  };
}
