import type { AriaSwitchProps } from "@react-types/switch";
import type { RefObject } from "react";
import type { ToggleState } from "@react-stately/toggle";
import { useSwitch as useSwitchWeb } from "@react-aria/switch";

export interface SwitchAria {
  /** Props for the input element. */
  inputProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */
export function useSwitch(
  props: AriaSwitchProps & { accessibilityLabel?: string },
  state: ToggleState,
  ref: RefObject<HTMLInputElement>
): SwitchAria {
  const label = props.accessibilityLabel;
  let temp = useSwitchWeb({ ...props, "aria-label": label }, state, ref);

  return temp;
}
