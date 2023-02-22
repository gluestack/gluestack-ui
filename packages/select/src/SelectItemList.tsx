import React, { forwardRef } from 'react';
// import type { ISelectProps } from './types';
import { useControllableState } from '@gluestack-ui/hooks';
import { SelectContext } from './SelectContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { Pressable, Keyboard } from 'react-native';

export const SelectItemList = (StyledSelectItemList: any, Actionsheet: any) =>
  forwardRef(
    (
      {
        children,
        selectedValue: selectedOption,
        onValueChange,
        defaultValue,
        placeholder,
        accessibilityLabel,
        onClose,
        onOpen,
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
        onChange: (newValue: any) => {
          onValueChange && onValueChange(newValue);
        },
      });
      const [isOpen, setIsOpen] = React.useState<boolean>(false);

      const handleClose = () => {
        setIsOpen(false);
        onClose && onClose();
      };
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
        <>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              Keyboard.dismiss();
              setIsOpen(true);
              onOpen && onOpen();
            }}
            disabled={isDisabled}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            ref={mergeRefs([ref, hoverRef])}
          >
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
              {...hoverProps}
              {...focusProps}
              {...props}
              onChangeText={(text: string) => setValue(text)}
            />
          </Pressable>
          <Actionsheet isOpen={isOpen} onClose={handleClose}>
            <Actionsheet.Backdrop />
            {/* @ts-ignore */}
            <Actionsheet.Content>
              <Actionsheet.DragIndicatorWrapper>
                <Actionsheet.DragIndicator />
              </Actionsheet.DragIndicatorWrapper>
              {children}
              {/* <Actionsheet.Item onPress={() => {}}>
                <Actionsheet.ItemText>Share</Actionsheet.ItemText>
              </Actionsheet.Item>
              <Actionsheet.Item onPress={() => {}}>
                <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
              </Actionsheet.Item>
              <Actionsheet.Item onPress={() => {}} isDisabled>
                <Actionsheet.ItemText>Play</Actionsheet.ItemText>
              </Actionsheet.Item>
              <Actionsheet.Item onPress={() => {}}>
                <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
              </Actionsheet.Item>
              <Actionsheet.Item>
                <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
              </Actionsheet.Item> */}
            </Actionsheet.Content>
          </Actionsheet>
        </>
      );
    }
  );
