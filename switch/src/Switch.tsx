import React, { forwardRef } from 'react';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { mergeRefs } from '@gluestack-ui/utils';
export function Switch(StyledSwitch: any) {
  return forwardRef(
    (
      {
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
      }: any,
      ref?: any
    ) => {
      const formControlContext = useFormControlContext();
      const combinedProps = { ...formControlContext, ...props };
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

      const mergedRef = mergeRefs([ref, _ref]);

      return (
        <StyledSwitch
          states={{
            hover: isHovered,
            disabled: disabled || isDisabled || combinedProps.isDisabled,
            invalid: isInvalid || combinedProps.isInvalid,
            checked: value || checked,
          }}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          disabled={disabled || isDisabled || combinedProps.isDisabled}
          onValueChange={(val: boolean) => {
            onValueChange && onValueChange(val);
            onToggle ? onToggle(val) : state.toggle();
          }}
          value={value || checked}
          {...combinedProps}
          ref={mergedRef}
        />
      );
    }
  );
}
