import React, { forwardRef } from 'react';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import type { ISwitchProps } from './types';

export const Switch = (StyledSwitch: any) =>
  forwardRef(
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
    }: ISwitchProps) => {
      const state = useToggleState({
        defaultSelected: !(defaultIsChecked === null)
          ? defaultIsChecked
          : false,
      });
      const checked = !(isChecked === null) ? isChecked : state.isSelected;
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);

      return (
        <StyledSwitch
          states={{
            hover: isHovered,
            disabled: isDisabled,
            invalid: isInvalid,
          }}
          thumbColor="#fafafa"
          trackColor={{ false: '#737373', true: '#9333ea' }}
          activeThumbColor="#fafafa"
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
