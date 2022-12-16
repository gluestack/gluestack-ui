import React, { forwardRef } from 'react';
// import type { ISelectProps } from './types';
import { useControllableState } from '../hooks/useControllableProp';
import { mergeRefs } from '../utils';
import { UIContext } from '../UIProvider';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
export const SelectContext = React.createContext({
  onValueChange: (() => {}) as any,
  selectedValue: null as any,
});

export const Select = forwardRef(
  (
    {
      children,
      selectedValue,
      onValueChange,
      defaultValue,
      placeholder,
      isReadOnly,
      isDisabled,
      isInvalid,
      ...props
    }: any,
    ref: any
  ) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const _ref = React.useRef(null);
    const { hoverProps, isHovered } = useHover({ isDisabled }, _ref);

    const { focusProps } = useFocusRing();

    const [value, setValue] = useControllableState({
      value: selectedValue,
      defaultValue,
      onChange: (newValue) => {
        onValueChange && onValueChange(newValue);
      },
    });
    const tempFix = '__NativebasePlaceholder__';

    const { StyledSelectRoot, StyledSelect, StyledSelectIcon } =
      React.useContext(UIContext);
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
      selectedItemArray && selectedItemArray.length
        ? selectedItemArray[0]
        : null;

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
      <StyledSelectRoot
        states={{
          hover: isHovered,
          focus: isFocused,
          disabled: isDisabled,
          readonly: isReadOnly,
          invalid: isInvalid,
        }}
        {...props}
      >
        <select
          aria-readonly={isReadOnly}
          disabled={isDisabled}
          {...focusProps}
          {...hoverProps}
          //@ts-ignore
          onChange={(e) => {
            setValue(e.target.value);
          }}
          ref={mergeRefs([ref, _ref])}
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
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        >
          <option disabled value={tempFix}>
            {placeholder}
          </option>
          {children}
        </select>
        {/* </Box> */}
        {commonInput}
        <StyledSelectIcon />
      </StyledSelectRoot>
    );
  }
);
