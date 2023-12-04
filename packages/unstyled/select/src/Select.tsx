import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useHover } from '@react-native-aria/interactions';
import { useControllableState } from '@gluestack-ui/hooks';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { useFocusRing } from '@react-native-aria/focus';

export const Select = (StyledSelect: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        selectedValue: selectedOption,
        selectedLabel: selectedLabel,
        onValueChange,
        defaultValue,
        onClose,
        onOpen,
        closeOnOverlayClick,
        ...props
      }: any,
      ref?: any
    ) => {
      const [placeholderState, setPlaceholderState] = React.useState('');
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

      const [label, setLabel] = React.useState(selectedLabel);
      const [isOpen, setIsOpen] = React.useState<boolean>(false);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
        onClose && onClose();
      }, [onClose, setIsOpen]);

      const inputProps = useFormControlContext();

      const contextValue = React.useMemo(() => {
        return {
          isHovered: isHovered || isHoveredProp,
          isFocused: isFocused || isFocusedProp,
          isDisabled: isDisabled || inputProps.isDisabled,
          isInvalid: isInvalid || inputProps.isInvalid,
          isRequired: isRequired || inputProps.isRequired,
          isReadOnly: isReadOnly || inputProps.isReadOnly,
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
          label: label,
          setLabel: setLabel,
          placeholder: placeholderState,
          setPlaceholder: setPlaceholderState,
          setFocused: setIsFocused,
          focusProps: focusProps,
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
        onOpen,
        setValue,
        value,
        setLabel,
        label,
        setIsFocused,
        focusProps,
        isRequired,
        inputProps,
        isReadOnly,
        setPlaceholderState,
        placeholderState,
      ]);

      return (
        <StyledSelect ref={ref} tabIndex={-1} {...props}>
          <SelectContext.Provider value={contextValue}>
            {children}
          </SelectContext.Provider>
        </StyledSelect>
      );
    }
  );
