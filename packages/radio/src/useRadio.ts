import type { AriaRadioProps } from '@react-types/radio';
import { mergeProps } from '@react-aria/utils';
import type { InputHTMLAttributes, RefObject } from 'react';
import type { RadioGroupState } from '@react-stately/radio';
import { usePress } from '@react-native-aria/interactions';
import type { AccessibilityProps } from 'react-native';
import { getLabel } from '@react-native-aria/utils';

export interface RadioAriaProps extends AriaRadioProps, AccessibilityProps {
  /**
   * Whether the Radio is required. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).
   */
  isRequired?: boolean;
  /**
   * Whether the Radio can be interacted with but cannot have its selection state changed.
   */
  isReadOnly?: boolean;
}

export interface RadioAria extends AccessibilityProps {
  /** Props for the input element. */
  inputProps: InputHTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for an individual
 * radio button in a radio group.
 * @param props - Props for the radio.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 * @param ref - Ref to the HTML input element.
 */
export function useRadio(
  props: RadioAriaProps,
  state: RadioGroupState,
  _ref: RefObject<HTMLElement>
): RadioAria {
  let { value, isReadOnly, isDisabled, children } = props;

  let hasChildren = children != null;
  const label = getLabel(props);

  if (!hasChildren && !label) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  let preventChanges = isDisabled || isReadOnly;
  preventChanges = preventChanges ?? false;

  let checked = state.selectedValue === value;

  let onPress = () => {
    state.setSelectedValue(value);
  };

  let { pressProps } = usePress({
    isDisabled: preventChanges,
    onPress,
  });

  return {
    inputProps: mergeProps(props, {
      ...pressProps,
      checked,
      'disabled': preventChanges,
      value,
      'aria-label': label,
      'role': 'radio',
      'aria-disabled': preventChanges,
      'aria-checked': checked,
    }),
  };
}
