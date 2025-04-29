import type { RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import { mergeProps } from '@react-aria/utils';
import type { AccessibilityProps } from 'react-native';
import { useToggle } from '@react-native-aria/toggle';
import { AriaCheckboxProps } from '@react-types/checkbox';

export interface CheckboxAria extends AccessibilityProps {
  /** Props for the input or Pressable/Touchable element. */
  inputProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a checkbox component.
 * Checkboxes allow users to select multiple items from a list of individual items, or
 * to mark one individual item as selected.
 * @param props - Props for the checkbox.
 * @param state - State for the checkbox, as returned by `useToggleState`.
 * @param inputRef - A ref for the HTML input element.
 */
export function useCheckbox(
  props: AriaCheckboxProps,
  state: ToggleState,
  inputRef: RefObject<HTMLInputElement>
): CheckboxAria {
  let { inputProps } = useToggle(props, state, inputRef);
  let { isSelected } = state;

  let { isIndeterminate } = props;

  return {
    inputProps: mergeProps(inputProps, {
      'checked': isSelected,
      'role': 'checkbox',
      'aria-checked': isIndeterminate ? 'mixed' : isSelected,
      'aria-disabled': props.isDisabled,
    }),
  };
}
