import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { isNil } from 'lodash';
import type { ISwitchProps } from './types';

export const Switch = forwardRef(
  ({
    disabled,
    isDisabled,
    // isInvalid,
    isChecked,
    defaultIsChecked,
    accessibilityLabel,
    accessibilityHint,
    onToggle,
    value,
    onValueChange,
    ...props
  }: ISwitchProps) => {
    const { StyledSwitch } = React.useContext(UIContext);
    const state = useToggleState({
      defaultSelected: !isNil(defaultIsChecked) ? defaultIsChecked : false,
    });
    const checked = !isNil(isChecked) ? isChecked : state.isSelected;
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);

    return (
      <StyledSwitch
        states={{
          hover: isHovered,
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
