import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useControllableState } from '@gluestack-ui/hooks';

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
        selectedValue: selectedOption,
        onValueChange,
        defaultValue,
        onClose,
        onOpen,
        closeOnOverlayClick,
        ...props
      }: any,
      ref: any
    ) => {
      const [isFocused, setIsFocused] = React.useState<boolean>(false);
      const hoverRef = React.useRef(null);
      const { hoverProps, isHovered } = useHover({ isDisabled }, hoverRef);
      const { focusProps, isFocusVisible } = useFocusRing();

      const [value, setValue] = useControllableState({
        value: selectedOption,
        defaultValue,
        onChange: (newValue: any) => {
          onValueChange && onValueChange(newValue);
        },
      });

      const [isOpen, setIsOpen] = React.useState<boolean>(false);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
        onClose && onClose();
      }, [onClose, setIsOpen]);

      const contextValue = React.useMemo(() => {
        return {
          isHovered: isHovered || isHoveredProp,
          isFocused: isFocused || isFocusedProp,
          isDisabled: isDisabled,
          isReadOnly: isReadOnly,
          isInvalid: isInvalid,
          hoverRef: hoverRef,
          hoverProps: hoverProps,
          focusProps: focusProps,
          isFocusVisible: isFocusVisibleProp || isFocusVisible,
          setIsOpen: setIsOpen,
          onOpen: onOpen,
          setValue: setValue,
          isOpen: isOpen,
          onValueChange: setValue,
          handleClose: handleClose,
          closeOnOverlayClick: closeOnOverlayClick,
          value: value,
          setFocused: setIsFocused,
        };
      }, [
        closeOnOverlayClick,
        focusProps,
        handleClose,
        hoverProps,
        isDisabled,
        isFocusVisible,
        isFocusVisibleProp,
        isFocused,
        isFocusedProp,
        isHovered,
        isHoveredProp,
        isInvalid,
        isOpen,
        isReadOnly,
        onOpen,
        setValue,
        value,
        setIsFocused,
      ]);
      return (
        <SelectContext.Provider value={contextValue}>
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
