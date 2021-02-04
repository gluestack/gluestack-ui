import type { RefObject, InputHTMLAttributes } from "react";
import type { ToggleState } from "@react-stately/toggle";
import { mergeProps } from "@react-aria/utils";
import { useToggle } from "@react-native-aria/toggle";
import { AriaCheckboxProps } from "@react-types/checkbox";

export interface CheckboxAria {
  /** Props for the input element. */
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

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
      checked: isSelected,
      accessibilityRole: "checkbox",
      accessibilityState: {
        checked: isIndeterminate ? "mixed" : isSelected,
        disabled: props.isDisabled,
      },
    }),
  };
}
