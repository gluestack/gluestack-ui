import { useCheckboxGroup as useCheckboxGroupWeb } from '@react-aria/checkbox';
import { AriaCheckboxGroupProps } from '@react-types/checkbox';
import { CheckboxGroupState } from '@react-stately/checkbox';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface CheckboxGroupAria {
  /** Props for the checkbox group wrapper element. */
  groupProps: any;
  /** Props for the checkbox group's visible label (if any). */
  labelProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a checkbox group component.
 * Checkbox groups allow users to select multiple items from a list of options.
 * @param props - Props for the checkbox group.
 * @param state - State for the checkbox group, as returned by `useCheckboxGroupState`.
 */
export function useCheckboxGroup(
  props: AriaCheckboxGroupProps,
  state: CheckboxGroupState
): CheckboxGroupAria {
  const params = useCheckboxGroupWeb(props, state);
  return {
    labelProps: {
      ...params.labelProps,
      ...mapDomPropsToRN(params.labelProps),
    },
    groupProps: {
      ...params.groupProps,
      ...mapDomPropsToRN(params.groupProps),
    },
  };
}
