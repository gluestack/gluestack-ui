import type { CheckboxGroupState } from '@react-stately/checkbox';
import type { RNAriaCheckboxGroupProps, RNCheckboxGroupAria } from 'src/types';
import { checkboxGroupNames } from './utils';
import { mergeProps, filterDOMProps } from '@react-aria/utils';
import { getLabel } from '../../../utils';

export function useCheckboxGroup(
  props: RNAriaCheckboxGroupProps,
  state: CheckboxGroupState
): RNCheckboxGroupAria {
  let { isDisabled, name } = props;

  let domProps = filterDOMProps(props, { labelable: true });

  //@ts-ignore
  checkboxGroupNames.set(state, name);

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
