import type { RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import { mergeProps } from '@react-aria/utils';
import { useToggle } from '../../../toggle';
import type { RNCheckboxAria, RNAriaCheckboxProps } from '../../../types';

export function useCheckbox(
  props: RNAriaCheckboxProps,
  state: ToggleState,
  inputRef: RefObject<HTMLInputElement>
): RNCheckboxAria {
  let { inputProps } = useToggle(props, state, inputRef);
  let { isSelected } = state;

  let { isIndeterminate } = props;

  return {
    inputProps: mergeProps(inputProps, {
      checked: isSelected,
      accessibilityRole: 'checkbox',
      accessibilityState: {
        checked: isIndeterminate ? 'mixed' : isSelected,
        disabled: props.isDisabled,
      },
    }),
  };
}
