import { filterDOMProps, mergeProps } from '@react-aria/utils';
import type { RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import { usePress } from '../../../interactions';
import type { RNAriaToggleProps, ToggleAria } from 'src/types';

/**
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */
export function useToggle(
  props: RNAriaToggleProps,
  state: ToggleState,
  _ref: RefObject<any>
): ToggleAria {
  let {
    isDisabled = false,
    isRequired,
    isReadOnly,
    value,
    name,
    children,
    accessibilityLabel,
    // validationState = 'valid', // No support for Invalid in RN
  } = props;

  let onPress = () => {
    state.setSelected(!state.isSelected);
  };

  let hasChildren = children != null;
  let hasAccessibilityLabel = accessibilityLabel != null;
  if (!hasChildren && !hasAccessibilityLabel) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  // This handles focusing the input on pointer down, which Safari does not do by default.
  let { pressProps } = usePress({
    isDisabled,
    onPress,
  });

  let domProps = filterDOMProps(props, { labelable: true });

  return {
    inputProps: mergeProps(domProps, {
      disabled: isDisabled,
      required: isRequired,
      readOnly: isReadOnly,
      value,
      name,
      ...pressProps,

      // RN props
      accessibilityState: {
        disabled: isDisabled,
      },
    }),
  };
}
