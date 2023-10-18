import type { AriaRadioGroupProps } from '@react-types/radio';
import type { RadioGroupState } from '@react-stately/radio';
import { getLabel } from '@react-native-aria/utils';

export interface RNAriaRadioGroupProps extends AriaRadioGroupProps {
  children?: React.ReactNode;
}

export interface RadioGroupAria {
  /** Props for the radio group wrapper element. */
  radioGroupProps: any;
  /** Props for the radio group's visible label (if any). */
  labelProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */
export function useRadioGroup(
  props: RNAriaRadioGroupProps,
  _state: RadioGroupState
): RadioGroupAria {
  let { isDisabled } = props;

  return {
    radioGroupProps: {
      'aria-label': getLabel(props),
      'role': 'radiogroup',
      'aria-disabled': isDisabled,
    },
    labelProps: {},
  };
}
