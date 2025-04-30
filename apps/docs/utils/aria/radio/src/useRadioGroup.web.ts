import { useRadioGroup as useRadioGroupWeb } from '@react-aria/radio';
import { RadioGroupState } from '@react-stately/radio';
import { mergeProps } from '@react-aria/utils';
import { AriaRadioGroupProps } from '@react-types/radio';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface RadioGroupAria {
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
  props: AriaRadioGroupProps,
  state: RadioGroupState
): RadioGroupAria {
  const params = useRadioGroupWeb(props, state);

  const newParams = {
    radioGroupProps: mergeProps(
      params.radioGroupProps,
      mapDomPropsToRN(params.radioGroupProps)
    ),
    labelProps: mergeProps(
      params.labelProps,
      mapDomPropsToRN(params.labelProps)
    ),
  };

  return newParams;
}
