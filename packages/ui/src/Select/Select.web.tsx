import React, { forwardRef, memo } from 'react';
import type { ISelectProps } from './types';
import { useControllableState } from '../hooks/useControllableProp';
import { UIContext } from '../UIProvider';
export const SelectContext = React.createContext({
  onValueChange: (() => {}) as any,
  selectedValue: null as any,
});

export const Select = ({
  children,
  selectedValue,
  onValueChange,
  defaultValue,
  placeholder,
  isReadOnly,
  isDisabled,
  ...props
}: any) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [value, setValue] = useControllableState({
    value: selectedValue,
    defaultValue,
    onChange: (newValue) => {
      onValueChange && onValueChange(newValue);
      setIsOpen(false);
    },
  });
  const tempFix = '__NativebasePlaceholder__';
  const contextValue = React.useMemo(() => {
    return {
      onValueChange: setValue,
      selectedValue: value,
    };
  }, [value, setValue]);
  const { StyledSelectRoot, StyledSelect } = React.useContext(UIContext);
  const itemsList: Array<{
    label: string;
    value: string;
  }> = React.Children.toArray(children).map((child: any) => {
    return {
      label: child?.props?.label,
      value: child?.props?.value,
    };
  });
  const selectedItemArray = itemsList.filter(
    (item: any) => item?.value === value
  );

  const selectedItem =
    selectedItemArray && selectedItemArray.length ? selectedItemArray[0] : null;

  const commonInput = (
    <StyledSelect
      aria-hidden={true}
      editable={false}
      focusable={false}
      importantForAccessibility="no"
      placeholder={placeholder}
      value={selectedItem ? selectedItem.label : ''}
      pointerEvents="none"
    />
  );

  return (
    <StyledSelectRoot {...props}>
      {/* <Box w="100%" h="100%" position="absolute" opacity="0" zIndex={1}> */}
      <select
        aria-readonly={isReadOnly}
        disabled={isDisabled}
        //@ts-ignore
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={selectedValue === null ? tempFix : value}
        aria-label={placeholder}
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          zIndex: 1,
        }}
        // onFocus={() => {
        //   setIsFocused(true);
        //   onOpen && onOpen();
        // }}
        // onBlur={() => {
        //   setIsFocused(false);
        //   onClose && onClose();
        // }}
      >
        <option disabled value={tempFix}>
          {placeholder}
        </option>
        {children}
      </select>
      {/* </Box> */}
      {commonInput}
    </StyledSelectRoot>
  );
};
