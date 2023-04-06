import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useHover } from '@react-native-aria/interactions';
import { useControllableState } from '@gluestack-ui/hooks';
import { useFormControl } from '@gluestack-ui/form-control';
import { useFocusRing } from '@react-native-aria/focus';

export const Select = (StyledSelect: any) =>
  forwardRef(
    (
      {
        children,
        isReadOnly,
        isDisabled,
        isInvalid,
        isRequired,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        isFullWidth = false,
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
      const [isFocused, setIsFocused] = React.useState(false);
      const { isFocusVisible, focusProps } = useFocusRing();

      const hoverRef = React.useRef(null);
      const { hoverProps, isHovered } = useHover({ isDisabled }, hoverRef);

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

      const inputProps = useFormControl({
        isDisabled: props.isDisabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        nativeID: props.nativeID,
      });

      const contextValue = React.useMemo(() => {
        return {
          isHovered: isHovered || isHoveredProp,
          isFocused: isFocused || isFocusedProp,
          isDisabled: isDisabled || inputProps.isDisabled,
          isReadOnly: isReadOnly || inputProps.isReadOnly,
          isInvalid: isInvalid || inputProps.isInvalid,
          isRequired: isRequired || inputProps.isRequired,
          hoverRef: hoverRef,
          hoverProps: hoverProps,
          isFocusVisible: isFocusVisibleProp || isFocusVisible,
          setIsOpen: setIsOpen,
          onOpen: onOpen,
          isOpen: isOpen,
          onValueChange: setValue,
          handleClose: handleClose,
          closeOnOverlayClick: closeOnOverlayClick,
          value: value,
          setFocused: setIsFocused,
          focusProps: focusProps,
          setvalue: setValue,
        };
      }, [
        closeOnOverlayClick,
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
        focusProps,
        isRequired,
        inputProps,
      ]);

      const style: any = {};
      if (isFullWidth) {
        style.w = '100%';
      }

      return (
        <StyledSelect
          ref={ref}
          accessibilityRole="button"
          focusable={false}
          {...props}
          {...style}
        >
          <SelectContext.Provider value={contextValue}>
            {children}
          </SelectContext.Provider>
        </StyledSelect>
      );
    }
  );
