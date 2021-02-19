import { mergeProps } from '@react-aria/utils';
import type { RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import { usePress } from '@react-native-aria/interactions';
import { getLabel } from '@react-native-aria/utils';
import { AriaToggleProps } from '@react-types/checkbox';

export interface ToggleAria {
  /**
   * Props to be spread on the input element.
   */
  inputProps: any;
}

/**
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */
export function useToggle(
  props: AriaToggleProps,
  state: ToggleState,
  _ref: RefObject<any>
): ToggleAria {
  let {
    isDisabled = false,
    isRequired,
    isReadOnly,
    value,
    name,
    // validationState = 'valid', // No support for Invalid in RN
  } = props;

  let onPress = () => {
    state.setSelected(!state.isSelected);
  };

  let hasChildren = props.children != null;

  const label = getLabel(props);

  if (!hasChildren && !label) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  // This handles focusing the input on pointer down, which Safari does not do by default.
  let { pressProps } = usePress({
    isDisabled,
    onPress,
  });

  return {
    inputProps: mergeProps(props, {
      disabled: isDisabled,
      required: isRequired,
      readOnly: isReadOnly,
      value,
      name,
      ...pressProps,
      accessibilityLabel: label,
      accessibilityState: {
        disabled: isDisabled,
      },
    }),
  };
}
