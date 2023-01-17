import React, { forwardRef } from 'react';
// import type { ISelectProps } from './types';
import { useControllableState } from '../hooks/useControllableProp';
import { SelectContext } from './SelectContext';

export const SelectItemList = (StyledSelectItemList: any) =>
  forwardRef(
    (
      {
        children,
        selectedValue: selectedOption,
        onValueChange,
        defaultValue,
        placeholder,
        ...props
      }: any,
      ref: any
    ) => {
      const {
        isHovered,
        hoverRef,
        hoverProps,
        isFocused,
        isDisabled,
        isReadOnly,
        isInvalid,
        focusProps,
        isFocusVisible,
      } = React.useContext(SelectContext);
      const [value, setValue] = useControllableState({
        value: selectedOption,
        defaultValue,
        onChange: (newValue) => {
          onValueChange && onValueChange(newValue);
        },
      });

      // const { StyledSelectItemListRoot, StyledSelectItemList, StyledSelectItemListIcon } =
      //   React.useContext(UIContext);
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

      return (
        <StyledSelectItemList
          states={{
            hover: isHovered,
            active: isFocused,
            disable: isDisabled,
            invalid: isInvalid,
            readonly: isReadOnly,
            focusvisible: isFocusVisible,
          }}
          ref={ref}
          aria-hidden={true}
          editable={false}
          focusable={false}
          importantForAccessibility="no"
          placeholder={placeholder}
          value={selectedItem ? selectedItem.label : ''}
          pointerEvents="none"
          {...hoverRef}
          {...hoverProps}
          {...focusProps}
          {...props}
          onChangeText={(text: string) => setValue(text)}
        >
          {children}
        </StyledSelectItemList>
      );
    }
  );
