import { useRadioGroup as useRadioGroupWeb } from "@react-aria/radio";
import { RadioGroupState } from "@react-stately/radio";
import { AriaRadioGroupProps } from "@react-types/radio";

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

  return {
    radioGroupProps: {
      ...params,
      nativeID: params.radioGroupProps.id,
      accessibilityRole: params.radioGroupProps.role,
    },
    labelProps: {
      ...params,
      nativeID: params.labelProps.id,
    },
  };
}
