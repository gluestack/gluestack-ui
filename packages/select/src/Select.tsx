import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
export const Select = (StyledSelect: any) =>
  forwardRef(
    (
      {
        children,
        isReadOnly,
        isDisabled,
        isInvalid,
        isFocusVisible: isFocusVisibleProp,
        isFocused: isFocusedProp,
        isHovered: isHoveredProp,
        ...props
      }: any,
      ref: any
    ) => {
      const [isFocused, setIsFocused] = React.useState<boolean>(false);
      const hoverRef = React.useRef(null);
      const { hoverProps, isHovered } = useHover({ isDisabled }, hoverRef);
      const { focusProps, isFocusVisible } = useFocusRing();

      return (
        <SelectContext.Provider
          value={{
            isHovered: isHovered || isHoveredProp,
            isFocused: isFocused || isFocusedProp,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isInvalid: isInvalid,
            focusProps: focusProps,
            isFocusVisible: isFocusVisibleProp || isFocusVisible,
            hoverRef: hoverRef,
            hoverProps: hoverProps,
            setFocused: setIsFocused,
          }}
        >
          <StyledSelect
            ref={ref}
            accessibilityRole="button"
            states={{
              hover: isHovered || isHoveredProp,
              active: isFocused || isFocusedProp,
              disabled: isDisabled,
              invalid: isInvalid,
              readonly: isReadOnly,
              focusvisible: isFocusVisibleProp || isFocusVisible,
            }}
            {...props}
            focusable={false}
          >
            {children}
          </StyledSelect>
        </SelectContext.Provider>
      );
    }
  );
