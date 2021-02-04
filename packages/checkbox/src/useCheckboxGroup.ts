import type { CheckboxGroupState } from "@react-stately/checkbox";
import { mergeProps, filterDOMProps } from "@react-aria/utils";
import { getLabel } from "@react-native-aria/utils";
import { AriaCheckboxGroupProps } from "@react-types/checkbox";

interface CheckboxGroupAria {
  /** Props for the checkbox group wrapper element. */
  groupProps: any;
  /** Props for the checkbox group's visible label (if any). */
  labelProps: any;
}

export function useCheckboxGroup(
  props: AriaCheckboxGroupProps,
  _state: CheckboxGroupState
): CheckboxGroupAria {
  let { isDisabled } = props;

  let domProps = filterDOMProps(props, { labelable: true });

  return {
    groupProps: mergeProps(domProps, {
      accessibilityState: {
        disabled: isDisabled,
      },
      accessibilityLabel: getLabel(props),
    }),
    labelProps: {},
  };
}
