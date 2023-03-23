import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { SelectContext, SelectItemListContext } from './SelectContext';
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

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
        onClose && onClose();
      }, [onClose, setIsOpen]);

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

      const contextValue = React.useMemo(() => {
        return {
          onValueChange: setValue,
          handleClose: handleClose,
        };
      }, [setValue, handleClose]);

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
            <Actionsheet.Content>
              <Actionsheet.DragIndicatorWrapper>
                <Actionsheet.DragIndicator />
              </Actionsheet.DragIndicatorWrapper>
              <SelectItemListContext.Provider value={contextValue}>
                {children}
              </SelectItemListContext.Provider>
            </Actionsheet.Content>
          </Actionsheet>
        </>
      );
    }
  );
