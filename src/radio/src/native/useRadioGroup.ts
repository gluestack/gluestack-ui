import type { AriaRadioGroupProps } from '@react-types/radio';
import { filterDOMProps, mergeProps, useId } from '@react-aria/utils';
import type { HTMLAttributes } from 'react';
import { radioGroupNames } from './utils';
import type { RadioGroupState } from '@react-stately/radio';
import { getLabel } from '../../../utils';

export interface RNAriaRadioGroupProps extends AriaRadioGroupProps {
  children?: React.ReactNode;
}

export interface RadioGroupAria {
  /** Props for the radio group wrapper element. */
  radioGroupProps: HTMLAttributes<HTMLElement>;
  /** Props for the radio group's visible label (if any). */
  labelProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */
export function useRadioGroup(
  props: RNAriaRadioGroupProps,
  state: RadioGroupState
): RadioGroupAria {
  let { name, isDisabled } = props;

  let domProps = filterDOMProps(props, { labelable: true });

  let groupName = useId(name);
  radioGroupNames.set(state, groupName);

  return {
    radioGroupProps: mergeProps(domProps, {
      accessibilityLabel: getLabel(props),
      accessibilityRole: 'radiogroup',
      accessible: true,
      accessibilityState: {
        disabled: isDisabled,
      },
    }),
    labelProps: {},
  };
}
