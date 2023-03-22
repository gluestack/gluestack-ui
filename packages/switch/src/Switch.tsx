import React, { forwardRef } from 'react';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';

export function Switch(StyledSwitch: any) {
  return forwardRef(
    ({
      disabled,
      isDisabled,
      isInvalid,
      isChecked,
      defaultIsChecked,
      accessibilityLabel,
      accessibilityHint,
      onToggle,
      value,
      onValueChange,
      ...props
    }: any, ref: any) => {
      const state = useToggleState({
        defaultSelected: !(
          defaultIsChecked === null || defaultIsChecked === undefined
        )
          ? defaultIsChecked
          : false,
      });

      const checked = !(isChecked === null || isChecked === undefined)
        ? isChecked
        : state.isSelected;
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);

      return (
        <StyledSwitch
          states={{
            hover: isHovered,
            disabled: isDisabled,
            invalid: isInvalid,
            checked: value || checked,
          }}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          disabled={disabled || isDisabled}
          onValueChange={(val: boolean) => {
            onValueChange && onValueChange(val);
            onToggle ? onToggle(val) : state.toggle();
          }}
          value={value || checked}
          {...props}
          ref={_ref}
        />
      );
    }
  );
}
